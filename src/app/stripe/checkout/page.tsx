'use client';


import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_123');
const stripePromise = loadStripe('pk_test_51MwjISKjJHwtrSP7KLzt9mALLZ01zgfXeTKjlemB6XRiJpL5VNUylMjzXKmf2t5fuUt8euW3akRVZKnylWnUQRA500pMeiknGF');

export default function Checkout() {
    const [clientSecret, setClientSecret] = React.useState('');
  
  // Call the function when needed
  
  React.useEffect(() => {
        // Create a Checkout Session as soon as the page loads

        fetch("/api/stripe/create-checkout-session", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => {
                console.log(res);
                
              if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
              }
              return res.json();
            })
            .then((data) => {
              console.log('data', data);
              setClientSecret(data.clientSecret);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          
    }, []);  

    const options = { clientSecret };
    console.log(options);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
            <div id="checkout">
                {clientSecret && (
                    <EmbeddedCheckoutProvider
                        stripe={stripePromise}
                        options={options}
                    >
                        aaaa
                        <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                )}
                aaaayayya
            </div>

        </main>
    );
}


