
const stripeSecretKey = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');
// const stripeSecretKey = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(plan: any) {
  const checkoutSession = await stripeSecretKey.checkout.sessions.create({
    mode: 'subscription',
    ui_mode: 'embedded',
    line_items: [
      {
        quantity: 1,
        price: "price_1O23TUKjJHwtrSP7NEtaoPLT"
      },
    ],
    return_url: `http://localhost:3000/stripe/return?plan=${plan}&session_id={CHECKOUT_SESSION_ID}`
  })
  return checkoutSession.client_secret;
}

export async function createNonMemberCheckoutSession() {
  const checkoutSession = await stripeSecretKey.checkout.sessions.create({
    mode: 'payment',
    ui_mode: 'embedded',
    line_items: [
      {
        quantity: 1,
        price: "price_1O7g8gKjJHwtrSP7dme1ApVE"
      },
    ],
    return_url: `http://localhost:3000/stripe/return?plan=nonmember&session_id={CHECKOUT_SESSION_ID}`
  })
  return checkoutSession.client_secret;
}

export async function createBasicCheckoutSession() {
  const checkoutSession = await stripeSecretKey.checkout.sessions.create({
    mode: 'subscription',
    ui_mode: 'embedded',
    line_items: [
      {
        quantity: 1,
        price: "price_1O4TlhKjJHwtrSP7n60yGEM7"
      },
    ],
    return_url: `http://localhost:3000/stripe/return?plan=basic&session_id={CHECKOUT_SESSION_ID}`
  })
  return checkoutSession.client_secret;
}

export async function createVipCheckoutSession() {
  const checkoutSession = await stripeSecretKey.checkout.sessions.create({
    mode: 'subscription',
    ui_mode: 'embedded',
    line_items: [
      {
        quantity: 1,
        price: "price_1O7d10KjJHwtrSP7V9zJhlcx"
      },
    ],
    return_url: `http://localhost:3000/stripe/return?plan=vip&session_id={CHECKOUT_SESSION_ID}`
  })
  return checkoutSession.client_secret;
}

export async function returnCheckoutStatus(session_id: any) {
  const session = await stripeSecretKey.checkout.sessions.retrieve(session_id);
  console.log(session);

  return ({
    status: session.status,
    customer_email: session.customer_details.email
  });
}
