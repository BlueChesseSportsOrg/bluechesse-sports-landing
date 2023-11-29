// // This example sets up an endpoint using the Express framework.
// // To learn more about Express, watch this video: https://youtu.be/rPR2aJ6XnAc.
// // const express = require('express');
// // const app = express();

// // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// // const stripe = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');

// // app.post('/create-checkout-session', async (req, res) => {
// //   const session = await stripe.checkout.sessions.create({
// //     line_items: [{
// //       price_data: {
// //         currency: 'usd',
// //         product_data: {
// //           name: 'T-shirt',
// //         },
// //         unit_amount: 199.00,
// //       },
// //       quantity: 1,
// //     }],
// //     mode: 'payment',
// //     ui_mode: 'embedded',
// //     return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
// //   });
  
// //   console.log('backend working');
  
// //   res.send({clientSecret: session.client_secret});
// // });

// // app.listen(4242, () => console.log(`Listening on port ${4242}!`));

// // pages/api/create-checkout-session.js

// import stripe from 'stripe';

// // const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// // const stripeSecretKey = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// const stripeSecretKey = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
  //     try {
//       const session = await stripe(stripeSecretKey).checkout.sessions.create({
//         line_items: [{
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'T-shirt',
//             },
//             unit_amount: 199.00,
//           },
//           quantity: 1,
//         }],
//         mode: 'payment',
//         ui_mode: 'embedded',
//         return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}',
//       });

//       console.log('backend working');

//       res.status(200).json({ clientSecret: session.client_secret });
//     } catch (error) {
  //       console.error('Error creating checkout session:', error);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }



// // const express = require('express');
// // const app = express();

// // const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// // app.post('/create-checkout-session', async (req, res) => {
  // //   const session = await stripe.checkout.sessions.create({
    // //     line_items: [{
      // //       price_data: {
        // //         currency: 'usd',
        // //         product_data: {
          // //           name: 'T-shirt',
          // //         },
          // //         unit_amount: 199.00,
          // //       },
          // //       quantity: 1,
          // //     }],
          // //     mode: 'payment',
          // //     ui_mode: 'embedded',
          // //     return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}'
          // //   });
          
          // //   console.log('backend working');
          
// //   res.send({clientSecret: session.client_secret});
// // });

// // app.listen(4242, () => console.log(`Listening on port ${4242}!`));



// pages/api/create-checkout-session.ts

import { NextApiRequest, NextApiResponse } from 'next';
import stripe from 'stripe';

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeSecretKey = require('stripe')('sk_test_51MwjISKjJHwtrSP7gnAA7gcpwz9kKThbqeOPdyRAB2jvER79VvwdMTaDBxImtBmiQJ4uu97GVuTfklDF0FWaeo0h00GyMJatBJ');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const session = await new stripe(stripeSecretKey).checkout.sessions.create({
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
        return_url: 'https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}',
      });

      console.log('backend working');

      res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
