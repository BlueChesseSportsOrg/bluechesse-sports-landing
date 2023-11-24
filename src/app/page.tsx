// import { redirect } from 'next/navigation';
'use client';
import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  // redirect('/AFCON2023');

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-4 bg-black relative font-gotham">
      <header className="header absolute z-10 top-0 right-0 left-0">
        <div className="bg-black ">
          <div className="container xl:max-w-7xl mx-auto px-8 py-3">
            <div className="flex gap-10">
              <div className="hidden lg:block w-[60px]"></div>
              <div className="flex gap-5">
                <a href="#" className="font-bold">Individuals</a>
                <a href="#" className="font-bold">Employers</a>
                <a href="#" className="font-bold">Advisors</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container xl:max-w-7xl mx-auto px-8 py-3">
          <div className="flex items-center w-full gap-10">
            <Image
              src={`/blue-cheese-logo.png`}
              width={60}
              height={60}
              alt="blue cheese logo"
            />
            <div className="nav-mobile relative lg:hidden ml-auto">
              <button className='text-black text-3xl' onClick={handleNavToggle}>☰</button>
              <div className="absolute top-100 right-0 z-10 bg-gray-100 px-4 py-6 rounded-md w-44" style={{ display: isNavOpen ? 'block' : 'none' }}>
                <div className="flex flex-col gap-10 justify-between items-center w-full">
                  <div className="flex flex-col items-center gap-5">
                    <a href="#" className="text-black font-bold">Investing</a>
                    <a href="#" className="text-black font-bold">Cash</a>
                    <a href="#" className="text-black font-bold">About</a>
                    <a href="#" className="text-black font-bold">Planning</a>
                    <a href="#" className="text-black font-bold">Education</a>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                    <a href="#" className="text-black font-bold">Log in</a>
                    <a href="#" className="bg-white text-black font-bold rounded-md px-4 py-1">Get started</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-desktop hidden lg:flex gap-10 justify-between items-center w-full">
              <div className="flex gap-5">
                <a href="#" className="text-black font-bold">Investing</a>
                <a href="#" className="text-black font-bold">Cash</a>
                <a href="#" className="text-black font-bold">About</a>
                <a href="#" className="text-black font-bold">Planning</a>
                <a href="#" className="text-black font-bold">Education</a>
              </div>
              <div className="flex items-center gap-5">
                <a href="#" className="text-black font-bold">Log in</a>
                <a href="#" className="bg-white text-black font-bold rounded-md px-4 py-1">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="landing-section bg-white w-full relative">
        <div className="min-h-screen landing-bg relative w-full h-screen text-gray-800">
          <div className="container xl:max-w-7xl mx-auto px-8 h-full">
            <div className="flex flex-col h-full w-full">
              <div className="flex-1 flex justify-center items-center w-full max-w-[800px] h-full mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mt-14">
                  Refer friends to earn a special offer
                </h1>
              </div>
              <div className="w-full h-full flex-1">
                <div className="w-full max-w-md">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-20">
                    Give your friends and family a smarter investing experience.
                  </h2>
                  <p className="text-lg md:text-xl">
                    As a thank you, we'll reward you and your friends with a special referral offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f1f1f1] text-gray-800 w-full">
        <div className="container xl:max-w-7xl mx-auto px-8 py-32">
          <h2 className="mb-24 text-center font-bold text-3xl md:text-4xl">
            What can Betterment give your friends?
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <div className="">
                <Image
                  src={`/download.png`}
                  width={40}
                  height={40}
                  alt="low costs"
                  className='mx-auto'
                />
                <h3 className="font-bold text-lg md:text-2xl my-3 md:my-4">
                  Low costs
                </h3>
                <p className="text-lg md:text-xl">
                  Our low-fee pricing plans and low-cost ETFs in our portfolios limit the impact of fees on returns
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="">
                <Image
                  src={`/30.png`}
                  width={40}
                  height={40}
                  alt="personalized advice"
                  className='mx-auto'
                />
                <h3 className="font-bold text-lg md:text-2xl my-3 md:my-4">
                  Personalized advice
                </h3>
                <p className="text-lg md:text-xl">
                  Betterment will recommend a personalized strategy for their financial goals. Create goals to save
                  for retirement, a house, to build wealth, or all of the above.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="">
                <Image
                  src={`/dollar_circle.png`}
                  width={40}
                  height={40}
                  alt="tax-efficient investing"
                  className='mx-auto'
                />
                <h3 className="font-bold text-lg md:text-2xl my-3 md:my-4">
                  Tax-efficient investing
                </h3>
                <p className="text-lg md:text-xl">
                  Automatic investment of deposits and dividends keep their portfolio
                  balanced, reducing the need to trigger gains through rebalancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="started-section w-full">
        <div className="container xl:max-w-7xl mx-auto px-8 ">
          <div className="min-h-screen w-full py-14 flex flex-col gap-14 justify-between border-b border-gray-100">
            <div className="text-center">
              <h2 className="font-bold text-3xl md:text-4xl max-w-md mx-auto mb-14">
                Give your friends and family a smarter investing experience.
              </h2>
              <button className="bg-white text-gray-800 text-xl font-semibold px-8 py-2 rounded-md">
                Get started
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="">
                <ul className="">
                  <h3 className="font-semibold">Accounts</h3>
                  <li className="">Investing</li>
                  <li className="">Crypto investing</li>
                  <li className="">IRAs and 401(k)s</li>
                  <li className="">Roth IRAs</li>
                  <li className="">High-yield cash account</li>
                  <li className="">Checking</li>
                  <li className="">Trusts</li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                  <h3 className="font-semibold">Investments</h3>
                  <li className="">Portfolio options</li>
                  <li className="">Socially responsible</li>
                  <li className="">investing</li>
                  <li className="">Tax-smart investing</li>
                  <li className="">Charitable giving</li>
                  <li className="">401(k) rollovers</li>
                  <li className="">Retirement income</li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                  <h3 className="font-semibold">Tools</h3>
                  <li className="">Retirement planning</li>
                  <li className="">Refer-a-friend program</li>
                  <li className="">Track your goals</li>
                  <li className="">All-in-one dashboard</li>
                  <li className="">Rewards</li>
                </ul>
              </div>
              <div className="">
                <ul className="">
                  <h3 className="font-semibold">Help</h3>
                  <li className="">Help center</li>
                  <li className="">FAQ</li>
                  <li className="">Talk to an advisor</li>
                  <li className="">Investment philosophy</li>
                  <li className="">Legal</li>
                  <li className="">Article library</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#335d7e]">
        <div className="container xl:max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex gap-5">
              <Image
                src={`/twitter icon.png`}
                width={24}
                height={24}
                alt="football fans"
              />
              <Image
                src={`/facebook-icon-white-png.png`}
                width={24}
                height={24}
                alt="football fans"
              />
              <Image
                src={`/instagram-icon.png`}
                width={24}
                height={24}
                alt="football fans"
              />
              <Image
                src={`/tiktok-round-white-icon.webp`}
                width={24}
                height={24}
                alt="football fans"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <a href="#" className="text-white">Contact us</a>
              <a href="#" className="text-white">Blue Chesse 401(k)</a>
              <a href="#" className="text-white">Blue Chesse for Advisors</a>
            </div>
          </div>
          <div className="py-20">
            <p className="mb-5">
              This experience and any marketing of the experience are provided by Betterment LLC. To the extent that there is marketing related to
              Betterment Checking, it is provided by Betterment Financial LLC.
            </p>
            <p className="mb-5">
              The articles and client support materials available are educational only and not investment or tax advice.
            </p>
            <p className="mb-5">
              We want you to know a few things:
            </p>
            <h2 className="font-bold mb-5">
              Who Provides What Service?
            </h2>
            <p className="mb-5">
              Investment Advice: Advisory services for traditional investments (e.g., ETFs) and digital assets are provided by Betterment LLC, an SECregistered investment adviser. Betterment LLC also offers the Betterment Cash Reserve product. Betterment LLC does not require
              clients to maintain a minimum investment account balance. However, accounts below a certain balance may have certain restrictions.
              For more information, please see additional disclosure.
            </p>
            <p className="mb-5">
              Traditional Investment Brokerage Services & Custody: Brokerage services are provided to clients of Betterment LLC by Betterment
              Securities, an SEC-registered broker-dealer and member of FINRA /SIPC, and Apex Clearing Corporation, a third-party SEC registered
              broker-dealer and member FINRA/SIPC.
            </p>
            <p className="mb-5">
              Digital Asset Trading Services & Custody: Digital asset trading services and custody are provided by Gemini Trust Company, LLC. For
              further details regarding the custody of assets, including cash, held at Gemini Trust Company, please see your Gemini user agreement.
            </p>
            <p className="mb-5">
              Blue Chesse Checking: Betterment Checking is made available through Betterment Financial LLC. Checking accounts and the
              Betterment Visa Debit Card provided by and issued by nbkc bank, Member FDIC. Neither Betterment LLC nor Betterment Financial
              LLC, nor any of their affiliates, is a bank.
            </p>
            <h2 className="font-bold mb-5">
              Let’s Talk About Risk:
            </h2>
            <p className="mb-5">
              Investing involves risk and there is the potential of losing money when you invest in securities and digital assets. Past performance
              does not guarantee future results and the likelihood of investment outcomes are hypothetical in nature.
            </p>
            <p className="mb-5">
              Investments in securities and digital assets are: Not FDIC Insured • Not Bank Guaranteed • May Lose Value.
            </p>
            <p className="mb-5">
              Furthermore, investing in digital assets is highly speculative and volatile, and only suitable for investors who are able to bear the risk of
              potential loss and experience sharp drawdowns. Digital assets are not legal tender and are not backed by the U.S. government. Digital
              assets are not subject to SIPC protections.
            </p>
            <p className="mb-5">
              Before investing, consider your investment objectives and Betterment LLC's fees and expenses. Betterment LLC's internet-based
              advisory services are designed to assist clients in achieving discrete financial goals. They are not intended to provide comprehensive
              tax advice or financial planning with respect to every aspect of a client's financial situation and do not incorporate specific
              investments that clients hold elsewhere. For more details, see Betterment’s Form CRS, Form ADV Part II and other disclosures.
            </p>
            <p className="mb-5">
              Not an offer, solicitation of an offer, or advice to buy or sell securities in jurisdictions where Betterment LLC is not registered.
            </p>
            <h2 className="font-bold mb-5">
              Who Provides the Market Data?
            </h2>
            <p className="mb-5">
              Market Data by Xignite. Fund data © 2022 Morningstar. All Rights Reserved. The information contained herein: (1) is proprietary to
              Morningstar and/or its content providers; (2) may not be copied or distributed; and (3) is not warranted to be accurate, complete or
              timely. Neither Morningstar nor its content providers are responsible for any damages or losses arising from any use of this information.
            </p>
            <p className="mb-5">
              You are viewing a web property located at Betterment.com. Different properties may be provided by a different entity with different
              marketing standards.
            </p>
            <p className="font-bold mb-5">
              Site Map | Terms of Use | Privacy Policy | Trademark | Legal Directory
            </p>
            <p className="mb-5">
              Google Play and the Google Play logo are trademarks of Google, Inc.
            </p>
            <p className="mb-5">
              Apple, the Apple logo, and iPhone are trademarks of Apple, Inc., registered in the U.S.
            </p>
            <p className="font-bold mb-5">
              Blue Chesse assumes no responsibility or liability whatsoever for the content, accuracy, reliability or opinions expressed in a thirdparty website, to which a published article links (a “linked website”). Such linked websites are not monitored, investigated, or
              checked for accuracy or completeness by Betterment. It is your responsibility to evaluate the accuracy, reliability, timeliness and
              completeness of any information available on a linked website. All products, services, and content obtained from a linked website
              are provided “as is” without warranty of any kind, express or implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose, title, non-infringement, security, or accuracy. If Betterment has a relationship or
              affiliation with the author or content, it will note this in additional disclosure.
            </p>
            <p className="font-bold mb-5">
              © Blue Chesse. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
