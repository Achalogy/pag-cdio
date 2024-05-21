
import initDB from '@/src/comps/initDB';
import Notifications from '@/src/models/Notifications';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, params }) => {
  let status = 200;

  await initDB();

  const { notification } = await request.json();

  await Notifications.create(notification);

  return new Response(JSON.stringify({
    message: status == 200 ? "OK" : "ERROR"
  }), {
    status: status,
    headers: {
      "Content-Type": "application/json"
    }
  })
}
