
import initDB from '../../comps/initDB';
import Notifications from '../../models/Notifications';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request, params }) => {
  let status = 200;

  await initDB();

  const list = await Notifications.find();

  return new Response(JSON.stringify({
    list,
    message: status == 200 ? "OK" : "ERROR"
  }), {
    status: status,
    headers: {
      "Content-Type": "application/json"
    }
  })
}
