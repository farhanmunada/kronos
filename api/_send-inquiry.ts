import { Resend } from 'resend';

export interface InquiryPayload {
  name: string;
  email: string;
  terrain: string;
  area: number;
}

export interface SendResult {
  ok: boolean;
  status: number;
  error?: string;
}

const TERRAINS = ['Coastal', 'Alpine', 'Forest', 'Urban', 'Tundra', 'Volcanic'];

/** Validates and normalises an untrusted request body. */
export function parseInquiry(body: unknown): { data?: InquiryPayload; error?: string } {
  if (typeof body !== 'object' || body === null) {
    return { error: 'Request body must be a JSON object.' };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === 'string' ? record.name.trim() : '';
  const email = typeof record.email === 'string' ? record.email.trim() : '';
  const terrain = typeof record.terrain === 'string' ? record.terrain.trim() : '';
  const area = typeof record.area === 'number' ? record.area : Number.NaN;

  if (name.length < 2 || name.length > 120) {
    return { error: 'Name must be between 2 and 120 characters.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return { error: 'A valid email address is required.' };
  }
  if (!TERRAINS.includes(terrain)) {
    return { error: 'Terrain must be one of the supported values.' };
  }
  if (!Number.isFinite(area) || area < 40 || area > 100000) {
    return { error: 'Area must be a number between 40 and 100000 square meters.' };
  }

  return { data: { name, email, terrain, area } };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Sends an inquiry notification through Resend. Never throws. */
export async function sendInquiryEmail(data: InquiryPayload): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_EMAIL;
  const from = process.env.INQUIRY_FROM ?? 'Kronos KD <onboarding@resend.dev>';

  if (!apiKey) {
    return { ok: false, status: 500, error: 'Email service is not configured.' };
  }
  if (!to) {
    return { ok: false, status: 500, error: 'Recipient address is not configured.' };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New inquiry — ${data.name} / ${data.terrain}`,
    html: `
      <h2>New Commission Inquiry</h2>
      <p><strong>Client entity / name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Target terrain:</strong> ${escapeHtml(data.terrain)}</p>
      <p><strong>Target square meters:</strong> ${escapeHtml(String(data.area))} m²</p>
    `,
  });

  if (error) {
    return { ok: false, status: 502, error: error.message };
  }

  return { ok: true, status: 200 };
}
