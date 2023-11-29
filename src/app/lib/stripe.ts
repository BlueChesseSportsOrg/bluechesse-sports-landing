// import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: '2022-11-15',
  appInfo: {
    name: 'blue chess sports',
    url: 'https://bluechesse-sports-landing-one.vercel.app',
  },
})