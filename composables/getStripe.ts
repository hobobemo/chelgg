// composables/useStripe.ts
import { Stripe } from 'stripe';

export const useStripe = () => {
  const config = useRuntimeConfig();
  const stripe = new Stripe(config.public.stripeSecret);

  async function getProducts(params: object){
    return await stripe.products.list(params);
  }

  async function getPrice(priceId: string){
    return await stripe.prices.retrieve(priceId);
  }

  async function createCheckoutSession(params: Stripe.Checkout.SessionCreateParams){
    return await stripe.checkout.sessions.create(params);
  };

  async function retrieveCustomer(customerId: string){
    return await stripe.customers.retrieve(customerId);
  };

  async function createCustomer(params: object) {
    return await stripe.customers.create(params);
  };

  return {
    getProducts,
    getPrice,
    createCheckoutSession,
    retrieveCustomer,
    createCustomer,
  };
};
