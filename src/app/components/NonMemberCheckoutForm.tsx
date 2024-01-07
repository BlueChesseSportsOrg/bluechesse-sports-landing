'use client';
import { createVipCheckoutSession } from '../actions/stripe';
import * as React from 'react';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import getStripe from '../utils/get-stripejs';

export default function Checkout() {
    const [clientSecret, setClientSecret] = React.useState('');

    React.useEffect(() => {
        // Create a Checkout Session as soon as the page loads
        createVipCheckoutSession().then(res => setClientSecret(res))
    }, []);

    const options = { clientSecret };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
            <div id="checkout" className='bg-white text-black w-[1000px] max-w-full'>
                {clientSecret && (
                    <EmbeddedCheckoutProvider
                        stripe={getStripe()}
                        options={options}
                    >
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                )}
            </div>
        </div>
    );
}
