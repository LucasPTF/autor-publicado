const PIXEL_ID = '1528452632263759';
const ALLOWED_HOSTS = new Set([
  'angelo-painradar.vercel.app',
  'angelo-inky.vercel.app',
]);

function respond(response, status, payload) {
  response.status(status).setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(payload));
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return respond(response, 405, { ok: false });
  }

  const accessToken = process.env.META_CONVERSION_API_TOKEN;
  if (!accessToken) return respond(response, 503, { ok: false });

  let body;
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
  } catch {
    return respond(response, 400, { ok: false });
  }

  const eventId = typeof body?.eventId === 'string' ? body.eventId.slice(0, 160) : '';
  const eventSourceUrl = typeof body?.eventSourceUrl === 'string' ? body.eventSourceUrl : '';
  if (!eventId || !eventSourceUrl) return respond(response, 400, { ok: false });

  let source;
  try {
    source = new URL(eventSourceUrl);
  } catch {
    return respond(response, 400, { ok: false });
  }
  if (source.protocol !== 'https:' || !ALLOWED_HOSTS.has(source.hostname)) {
    return respond(response, 403, { ok: false });
  }

  const userData = {
    client_ip_address: String(request.headers['x-forwarded-for'] || '').split(',')[0].trim(),
    client_user_agent: String(request.headers['user-agent'] || ''),
  };
  if (typeof body.fbp === 'string' && body.fbp) userData.fbp = body.fbp.slice(0, 255);
  if (typeof body.fbc === 'string' && body.fbc) userData.fbc = body.fbc.slice(0, 255);

  try {
    const metaResponse = await fetch(`https://graph.facebook.com/${PIXEL_ID}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_token: accessToken,
        data: [
          {
            event_name: 'Purchase',
            event_time: Math.floor(Date.now() / 1000),
            event_id: eventId,
            event_source_url: eventSourceUrl,
            action_source: 'website',
            user_data: userData,
            custom_data: { currency: 'BRL', value: 97 },
          },
        ],
      }),
    });

    if (!metaResponse.ok) return respond(response, 502, { ok: false });
    return respond(response, 200, { ok: true });
  } catch {
    return respond(response, 502, { ok: false });
  }
}
