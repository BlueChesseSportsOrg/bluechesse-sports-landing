'use client';
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { returnCheckoutStatus } from '../../actions/stripe';

export default function Return() {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        returnCheckoutStatus(sessionId).then(res => {
            setStatus(res.status);
            setCustomerEmail(res.customer_email);
        });
    }, []);

    if (status === 'open') {
        return (
            redirect('/')
        )
    }

    if (status === 'complete') {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black">
                <section id="success">
                    <p>
                        We appreciate your business! A confirmation email will be sent to {customerEmail}.

                        If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
                    </p>
                </section>
            </main>
        )
    }

    return null;
}