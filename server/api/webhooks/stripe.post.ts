// server/api/webhooks/stripe.post.ts
import { serverPostData } from '~/server/utils/firebaseRtdb'; // adjust path as needed

export default defineEventHandler(async (event) => {
  const stripeEvent = await readBody(event);

  switch (stripeEvent.object.object) {
    case 'checkout.session':
    case 'checkout.session.completed':
      const session = stripeEvent.object;
      await serverPostData(`checkouts/${session.id}`, session);
      break;
  }

  return { received: true };
});
