import Image from 'next/image'
import Link from 'next/link';

export default function ReserveSpot() {
  return (
    <div className="">
      <div className='w-full bg-black min-h-[90vh]'>
        <div className="container xl:max-w-7xl mx-auto px-8 ">
          <div className="flex flex-row items-center lg:flex-nowrap flex-wrap gap-4 py-10">
            <div className="w-full lg:w-5/12 lg:order-none  order-1">
              <div className="max-w-md">
                <h1 className="text-white font-gotham font-bold md:text-3xl lg:text-5xl md:leading-normal text-4xl leading-normal mb-3">
                  Blue Chesse Affiliate Program
                </h1>
                <div className="flex flex-row gap-1 mb-3 w-full">
                  <h2 className="text-white font-avenir font-normal md:text-2xl md:leading-normal text-base leading-normal">
                    Start earning money, by referring your friends to Blue Chesse Sports
                  </h2>
                </div>
                <div className="mt-8 mb-4">
                  <Link
                    className="text-[#131517] font-avenir font-bold text-base tracking-wider bg-white focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg w-[180px] h-[50px] justify-center flex items-center dark:focus:ring-gray-600"
                    href={"https://af.uppromote.com/445cc7-4/register"}
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12  relative lg:flex justify-center items-center">
              <div className="relative w-full md:h-[30rem] h-[16rem]">
                <Image
                  src={`/affiliate.png`}
                  fill={true}
                  sizes="100vw"
                  alt="football fans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-8 py-20">
        <div className="container xl:max-w-7xl mx-auto px-4">
          <h1 className="text-black font-gotham text-center font-medium md:text-3xl md:leading-normal text-3xl leading-normal mt-8 mb-1">
            This is how the program works
          </h1>
          <div className="flex flex-row gap-16 flex-wrap lg:flex-nowrap justify-center my-6">
            <div className="w-full flex flex-col max-w-sm text-center">
              <div className="text-black">
                <Image
                  src={`/handshake.png`}
                  width={60}
                  height={60}
                  className='mx-auto my-3'
                  alt="football fans"
                />
                <h6 className="font-bold text-2xl">
                  Join as an Affiliate
                </h6>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    It’s free to get started.
                    Sign up and create your unique
                    link or code. Access marketing
                    materials, tools, and more!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm text-center">
              <div className="text-black">
                <Image
                  src={`/rocket.png`}
                  width={60}
                  height={60}
                  className='mx-auto my-3'
                  alt="football fans"
                />
                <h6 className="font-bold text-2xl">
                  Promote Blue Chesse Sports
                  to sports fans
                </h6>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    Share your link or code to your network
                    who are sports fans via your networks and socials
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm text-center">
              <div className="text-black">
                <Image
                  src={`/receive.png`}
                  width={60}
                  height={60}
                  className='mx-auto my-3'
                  alt="football fans"
                />
                <h6 className="font-bold text-2xl">
                  Start earning
                </h6>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    Earn right from the moment
                    your leads become paid clients
                    of Blue Chesse Sports. Check
                    out our commission plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              className="text-[#0f7063] font-avenir font-semibold text-2xl border-current border-[1.5px] rounded px-5 py-2 text-center inline-flex items-center"
              href={"https://af.uppromote.com/445cc7-4/register"}
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f6f5f4] p-10">
        <div className="container xl:max-w-7xl mx-auto px-4">
          <h1 className="text-black font-gotham text-center font-medium md:text-3xl md:leading-normal text-3xl leading-normal mt-8 mb-1">
            Our Commission plan and products you will promote
          </h1>
          <p className="text-black font-avenir font-medium text-center md:text-2xl md:leading-normal text-xl leading-normal mb-8">
            These are Blue Chesse Sports products
          </p>
          <div className="flex flex-row gap-16 flex-wrap lg:flex-nowrap justify-center">
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">
                      Non-member services
                    </h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">$199</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    Choose the Blue Chesse Sports team and we will handle all
                    the necessary arrangements on your behalf.
                  </p>
                  <p className="text-sm font-light mb-1">
                    Our non-member services package includes:
                  </p>
                  <ul className="list-disc ml-10 mb-2">
                    <li className="text-sm font-light mb-1">
                      Accommodation Booking
                    </li>
                    <li className="text-sm font-light mb-1">
                      Ticket Purchasing
                    </li>
                  </ul>
                  <p className="text-sm font-light mb-2">
                    Please note that as a non-member, priority service and
                    discount offers from our partners are not available with
                    this package.
                  </p>
                  <p className="text-sm font-light mb-2">
                    However, you can still rely on our expertise and extensive
                    network to ensure a seamless and memorable experience.
                  </p>
                  <p className="text-sm font-light mb-1">
                    This option is best suited for sports enthusiasts
                    who want to attend a singular sports event and not
                    necessarily become a member of the Blue Chesse Sports community.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row items-stretch justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">Basic Plan</h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">$249/year</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <ul className="list-disc ml-4 mb-4 text-black">
                    <li className="text-sm font-light mb-2">
                      Concierge service to book group accommodation, remote
                      work space, game tickets and group transportation
                    </li>
                    <li className="text-sm font-light mb-2">
                      Blue Chesse fan merchandise
                    </li>
                    <li className="text-sm font-light mb-2">
                      After game parties and city tours
                    </li>
                    <li className="text-sm font-light mb-2">
                      Get 300 Blue Chesse Sports points to boost leaderboard
                      standings, access discount and priority offers from our
                      partners all year round
                    </li>
                    <li className="text-sm font-light mb-2">
                      Become a Blue Chesse member
                    </li>
                    <li className="text-sm font-light mb-2">
                      Support via whatsapp/email
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row items-stretch justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">VIP Plan</h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">$499/year</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <ul className="list-disc ml-4 mb-4 text-black">
                    <li className="text-sm font-light mb-2">
                      Concierge service to book private accommodation ,remote work space , game tickets and private transfers
                    </li>
                    <li className="text-sm font-light mb-2">
                      After game parties and city tours
                    </li>
                    <li className="text-sm font-light mb-2">
                      Priority support all throughout your stay via phone
                    </li>
                    <li className="text-sm font-light mb-2">
                      Hands on curation of sporting events such as Olympic, F1 and UFC matches all year round
                    </li>
                    <li className="text-sm font-light mb-2">
                      Get 900 Blue Chesse Sports points to boost leaderboard standing, access discount and priority offers from our partners all year round
                    </li>
                    <li className="text-sm font-light mb-2">
                      Become a Blue Chesse member
                    </li>
                    <li className="text-sm font-light mb-2">
                      Blue Chesse fan merchandise
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f6f5f4] px-8 py-10">
        <div className="container xl:max-w-7xl mx-auto">
          <h1 className="text-black font-gotham text-center font-medium md:text-3xl md:leading-normal text-3xl leading-normal mt-8 mb-1">
            Commission plans
          </h1>
          <p className="text-black font-avenir font-medium text-center md:text-2xl md:leading-normal text-xl leading-normal mb-8">
            Based on the plan your referrals purchase , you will earn 5% -15% of the package price
          </p>
          <div className="flex flex-row gap-16 flex-wrap lg:flex-nowrap justify-center">
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">
                      Non-Member Services
                    </h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">5%</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    You will earn $9.95 on
                    every referral that
                    purchases our non-
                    member services
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row items-stretch justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">Basic Plan</h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">10%</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-1">
                    You will earn $24.9 on
                    every referral that
                    purchases our basic plan
                    membership
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
              <div className="px-5 pb-5 text-black">
                <div className="flex font-gotham flex-row items-stretch justify-between pt-6 pb-3 border-[#e9e9ec] border-b-2">
                  <div>
                    <h6 className="font-bold text-base">VIP Plan</h6>
                  </div>
                  <div>
                    <h6 className="font-medium text-base">15%</h6>
                  </div>
                </div>
                <div className="py-5 font-avenir">
                  <p className="text-sm font-light mb-2">
                    You will earn $74.85 on
                    every referral that
                    purchases our VIP plan
                    membership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#f6f5f4]'>
        <div className="container xl:max-w-7xl mx-auto px-8 ">
          <div className="flex flex-row items-center lg:flex-nowrap flex-wrap gap-4 py-10">
            <div className="w-full lg:w-5/12 lg:order-none  order-1">
              <div className="max-w-xl">
                <h1 className="text-black font-gotham font-bold md:text-3xl lg:text-5xl md:leading-normal text-4xl leading-normal mb-3">
                  What is Blue Chesse Sports?
                </h1>
                <div className="flex flex-row gap-1 mb-3 w-full">
                  {/* <Image src={"/ci.svg"} alt="Ivorian Flag" width={18} height={10} /> */}
                  <h2 className="text-black font-avenir font-normal md:text-xl md:leading-normal text-base leading-normal">
                    We are the leading ticketing and sports travel
                    platform for fans all over the world. We will help
                    you, plan your entire trip to any major sporting
                    event in the world
                  </h2>
                </div>
                <div className="mt-8 mb-4">
                  <Link
                    className="text-[#f6f5f4] font-avenir font-medium text-base tracking-wider bg-black focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600"
                    href={"/AFCON2023/reserve-your-spot"}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12  relative lg:flex justify-center items-center">
              <div className="relative w-full md:h-[30rem] h-[16rem]">
                <Image
                  src={`/affiliate-bg-2.png`}
                  fill={true}
                  sizes="100vw"
                  alt="football fans"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#f6f5f4]'>
        <div className="container xl:max-w-7xl mx-auto px-8">
          <div className="flex flex-row items-center lg:items-stretch lg:flex-nowrap flex-wrap gap-0 lg:min-h-screen">
            <div className="w-full lg:w-7/12 relative lg:flex justify-start items-center relative z-0">
              <div className="relative w-full lg:min-w-[65vw] lg:w-[100vw] lg:h-full md:h-[23rem] h-[16rem] min-h-[16rem]">
                <Image
                  src={`/affiliate-bg-3.png`}
                  fill={true}
                  sizes="100vw"
                  alt="football fans"
                />
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex lg:order-none order-1 relative">
              <div className="max-w-xl flex flex-col justify-center self-center text-center py-14">
                <h1 className="text-black font-gotham font-bold md:text-2xl lg:text-3xl text-xl leading-normal mb-3">
                  Interested in becoming a Blue Chesse Sports Affiliate?
                </h1>
                <div className="mt-8 mb-4">
                  <Link
                    className="text-[#f6f5f4] font-avenir font-medium text-base tracking-wider bg-black focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600"
                    href={"https://af.uppromote.com/445cc7-4/register"}
                  >
                    Start earning now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}