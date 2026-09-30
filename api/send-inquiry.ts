import { parseInquiry, sendInquiryEmail } from './_send-inquiry.js';

/**
 * Vercel serverless function (Web standard signature).
 * POST /api/send-inquiry
 */
export async function POST(request: Request): Promise<Response> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const { data, error } = parseInquiry(body);

  if (!data) {
    return Response.json({ error }, { status: 400 });
  }

  const result = await sendInquiryEmail(data);

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true }, { status: 200 });
}
