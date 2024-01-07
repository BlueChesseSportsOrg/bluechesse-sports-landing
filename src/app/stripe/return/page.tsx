'use client';
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { returnCheckoutStatus } from '../../actions/stripe';
import Image from 'next/image'
import Link from 'next/link';
import { getScaRef } from '../../actions/cookies';

let plansData: any = {
    "nonmember": {
        type: "non-member",
        title: "non-member service",
        link: "https://19inmiwozzs.typeform.com/to/AQROIOnK",
    },
    "basic": {
        type: "basic",
        title: "basic plan",
        link: "https://19inmiwozzs.typeform.com/to/epAgWGR0",
    },
    "vip": {
        type: "VIP",
        title: "VIP plan",
        link: "https://19inmiwozzs.typeform.com/to/epAgWGR0",
    },
}

export default function Return() {
    const [plan, setPlan] = useState('');
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const [scaRefDuration, setScaRefDuration] = React.useState('');

    useEffect(() => {
        getScaRef().then((res: any) => setScaRefDuration(res));
    }, []);

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');
        const plan = urlParams.get('plan') || 'nonmember';
        setPlan(plan);
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
                    <div className="w-full my-10 flex flex-col max-w-md bg-white border border-white rounded-[12px] shadow">
                        <div className="px-5 pb-5 text-black text-center">
                            <div className="flex font-gotham flex-row justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                                <div>
                                    <h6 className="font-bold text-base">
                                        Thank you for your payment!
                                    </h6>
                                </div>
                            </div>
                            <div>
                                <p className='my-4'>
                                    A confirmation email will be sent to {customerEmail}.
                                </p>
                                <p className='my-4'>
                                    Please fill this form for our {plansData[plan].title} below to help us render our service to you.
                                </p>
                            </div>
                            <div className="py-4 mt-4 text-center">
                                <Link
                                    className="text-white font-avenir font-semibold text-base  bg-black  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                                    href={plansData[plan].link + scaRefDuration}
                                >
                                    {/* href={"https://bit.ly/45TmDev" + scaRefDuration} */}
                                    Fill {plansData[plan].type} form here
                                </Link>
                            </div>
                            <div>
                                <p className='my-4'>
                                    If you have any questions, please email <a className='underline' href="mailto:info@bluchessesports.com">info@bluchessesports.com</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }

    return null;
}