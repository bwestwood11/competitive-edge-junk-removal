import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export const getPrices = async () => {
  const prices = await stripe.prices.list({
    limit: 4,
    active: true,
  });
  console.log(prices);
  return prices.data;
};
