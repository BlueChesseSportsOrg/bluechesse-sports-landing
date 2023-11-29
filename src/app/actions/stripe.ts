// 'use server'

const stripeSecretKey = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');
// const stripeSecretKey = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession() {
    console.log(process.env.STRIPE_SECRET_KEY);
    
//   const checkoutSession: Stripe.Checkout.Session =
  const checkoutSession = await stripeSecretKey.checkout.sessions.create({
    //   mode: 'payment',
      mode: 'subscription',
      ui_mode: 'embedded',
      line_items: [
        {
          quantity: 1,
          price: "price_1O23TUKjJHwtrSP7NEtaoPLT"
        },
      ],
      return_url: 'http://localhost:3000/stripe/return?session_id={CHECKOUT_SESSION_ID}'
    })
    
    console.log(checkoutSession);
    console.log(checkoutSession.client_secret);
    
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
