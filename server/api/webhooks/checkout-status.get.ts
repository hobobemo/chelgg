// server/api/checkout-status.get.ts
import { getData } from '@/composables/useFirebase'; // your path might differ

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const sessionId = query.id as string;

  const session = await getData(`/checkouts/${sessionId}`);

  if (!session) {
    throw createError({ statusCode: 404, message: 'Session not found' });
  }

  return { status: session.status };
});
