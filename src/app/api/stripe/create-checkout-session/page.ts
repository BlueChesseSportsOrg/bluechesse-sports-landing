// // This example sets up an endpoint using the Express framework.
// // To learn more about Express, watch this video: https://youtu.be/rPR2aJ6XnAc.

// // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// // const stripe = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');


// pages/api/create-checkout-session.ts

// import { NextApiRequest, NextApiResponse } from 'next';
import stripe from 'stripe';

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeSecretKey = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');


import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req', req, 'res', res);

  const session = await stripeSecretKey.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'T-shirt',
        },
        unit_amount: 199.00,
      },
      quantity: 1,
    }],
    mode: 'payment',
    ui_mode: 'embedded',
    return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
  });

  // return NextResponse.json({ clientSecret: session.client_secret });
  return res.json({ clientSecret: session.client_secret });
};
