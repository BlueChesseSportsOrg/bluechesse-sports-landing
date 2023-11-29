'use client';
import { createCheckoutSession } from '../actions/stripe';


import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import getStripe from '../utils/get-stripejs';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_123');
// const stripePromise = loadStripe('pk_test_51MwjISKjJHwtrSP7KLzt9mALLZ01zgfXeTKjlemB6XRiJpL5VNUylMjzXKmf2t5fuUt8euW3akRVZKnylWnUQRA500pMeiknGF');

export default function Checkout() {
    const [clientSecret, setClientSecret] = React.useState('');

    React.useEffect(() => {
        // Create a Checkout Session as soon as the page loads
        createCheckoutSession().then(res => setClientSecret(res))

    }, []);

    const options = { clientSecret };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
            <div id="checkout" className='bg-white text-black'>
                {clientSecret && (
                    // stripe={stripePromise}
                    <EmbeddedCheckoutProvider
                        stripe={getStripe()}
                        options={options}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                )}
            </div>
        </main>
    );
}

