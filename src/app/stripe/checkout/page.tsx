
'use client';
import React, { useEffect, useState } from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import VipCheckoutForm from '../../components/VipCheckoutForm';
import BasicCheckoutForm from '../../components/BasicCheckoutForm';
import NonMemberCheckoutForm from '../../components/NonMemberCheckoutForm';

export default function Checkout() {
    const [plan, setPlan] = useState('');
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const plan = urlParams.get('plan') || '';
        setPlan(plan);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
            <div id="checkout" className='bg-white text-black'>
                {
                    (plan === "vip") ? (
                        <VipCheckoutForm />
                    ) : (
                        (plan === "basic") ? (
                            <BasicCheckoutForm />
                        ) : (
                            (plan === "nonmember") ? (
                                <NonMemberCheckoutForm />
                            ) : (
                                <CheckoutForm />
                            )
                        )
                    )
                }
            </div>

        </main>
    );
}


