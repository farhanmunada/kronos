import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Serves the inquiry endpoint during `vite dev` so the form can be tested
 * locally without deploying. Production uses the Vercel function in /api.
 */
function inquiryDevApi(): Plugin {
  return {
    name: 'kronos-inquiry-dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/send-inquiry', (req, res, next) => {
        if (req.method !== 'POST') {
          next();
          return;
        }

        const chunks: Buffer[] = [];
        req.on('data', (chunk: Buffer) => chunks.push(chunk));
        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json');

          let payload: unknown;
          try {
            payload = JSON.parse(Buffer.concat(chunks).toString('utf8'));
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid JSON body.' }));
            return;
          }

          const { parseInquiry, sendInquiryEmail } = await import('./api/_send-inquiry.ts');
          const { data, error } = parseInquiry(payload);

          if (!data) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error }));
            return;
          }

          const result = await sendInquiryEmail(data);
          res.statusCode = result.status;
          res.end(JSON.stringify(result.ok ? { success: true } : { error: result.error }));
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Surface server-only vars to the dev API handler.
  process.env.RESEND_API_KEY ??= env.RESEND_API_KEY;
  process.env.INQUIRY_EMAIL ??= env.INQUIRY_EMAIL;
  process.env.INQUIRY_FROM ??= env.INQUIRY_FROM;

  return {
    plugins: [react(), tailwindcss(), inquiryDevApi()],
  };
});
