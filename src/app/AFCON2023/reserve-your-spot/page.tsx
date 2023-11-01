import Image from 'next/image'
import Link from 'next/link'

const benefits = [
    {
        title: "Front row seat game tickets",
        description: "Enjoy an exclusive viewing experience with top-tier seats for every tournament game, giving you a front-row view of the excitement.",
        order: "md:order-none order-1",
        textMargin: "md:mr-auto",
        img: "/tickets.png",
        height: "h-[12rem]",  
        width: "md:w-[100%]"
    },
    {
        title: "Comfortable and secure accommodation",
        description: "Stay in comfortable hotels and apartments in the heart of Abidjan, close to both the stadium and the city's main attractions.",
        order: "md:order-1 order-1 md:text-end",
        textMargin: "md:ml-auto",
        img: "/accommodation.png",
        width: "md:w-[100%]",
        height: "h-[12rem]"
    },
    {
        title: "Private transportation between game venues",
        description: "Travel in style with private transportation to and from the stadium, as well as airport transfers from the airport.",
        order: "md:order-none order-1",
        textMargin: "md:mr-auto",
        img: "/transportation.png",
        width: "md:w-[100%]",
        height: "h-[12rem]"
    },
    {
        title: "Local and continental cuisine curated to your taste",
        description: " Savor the flavors of Cote D'Ivoire with delicious meals provided throughout the trip, including breakfasts, lunches, and dinners at local restaurants and cafes.",
        order: "md:order-1 order-1 md:text-end",
        textMargin: "md:ml-auto",
        img: "/local-cuisine.png",
        width: "md:w-[100%]",
        height: "h-[10rem]"
      },
      {
        title: "Enjoy After Game Parties, Ivorian Style",
        description: "Celebrate every match in style with exclusive access to after-game parties featuring local music and dance styles, like the electrifying Coupe Decale.",
        order: "md:order-none order-1",
        textMargin: "md:mr-auto",
        img: "/after-parties.png",
        width: "md:w-[100%]",
        height: "h-[12rem]"
      },
    {
      title: "Explore sights and sounds of Cote D’Ivoire via our curated city tours",
        description: "Discover the beauty and culture of Cote D’Ivoire with guided city tours to popular hotspots and hidden gems.",
        order: "md:order-1 order-1 md:text-end",
      textMargin: "md:ml-auto",
        img: "/sights-sounds.png",
        width: "md:w-[100%]",
        height: "h-[12rem]"
      },
    {
      title: "Keep up with work remotely while you enjoy the tournament",
      description: "Stay connected with reliable internet access throughout the trip, perfect for remote work or staying in touch with loved ones back home.",
      order: "md:order-none order-1",
      textMargin: "md:mr-auto",
        img: "/work.png",
        height: "h-[12rem]",
        width: "md:w-[100%]"
    },
    {
      title: "Be on brand with our curated fan merchandise",
      description: "Show off your team spirit with official fan merchandise included in the package.",
        order: "md:order-1 order-1 md:text-end",
      textMargin: "md:ml-auto",
        img: "/merch.png",
        height:"h-[12rem]",
        width: "md:w-[100%]"
    },
]

export default function ReserveSpot(){
    return (
      <div>
        <div className="container xl:max-w-7xl mx-auto px-8 ">
        <div className="flex flex-row md:flex-nowrap flex-wrap justify-between gap-[50px] py-8">
          <div className="w-full lg:w-6/12 lg:flex-auto lg:order-none  order-1 flex items-center">
            <div className="max-w-2xl ">
              <h1 className="text-white font-gotham font-bold md:text-[2.65rem] md:leading-snug text-2xl leading-snug mb-3">
              Are you ready to experience the ultimate African football journey?
              </h1>
              <div className="flex flex-row gap-1 mb-3 w-full">
                {/* <Image src={"/ci.svg"} alt="Ivorian Flag" width={18} height={10} /> */}
                <h2 className="text-[#ffde59] font-avenir font-normal md:text-lg md:leading-sn text-sm leading-normal">
                Reserve your spot now for this once-in-a-lifetime trip to Abidjan, Côte D&apos;Ivoire and witness the magic of the African Cup of Nations!
                </h2>
              </div>
             
              
            </div>
          </div>
          <div className="w-full lg:w-7/12 relative lg:flex lg:flex-auto justify-center items-center">
            <div className="relative lg:w-[100%]  w-full  lg:h-[40rem] md:h-[30rem] h-[22rem]">
              <Image
                src={`/akwaba.png`}
                fill={true}
                // width={850}
                // height={500}
                style={{objectFit: "contain"}}
                alt="football fans"
                className='rounded-[12px]'
              />
            </div>
          </div>
        </div>
          {/* <div className="flex flex-col py-10">
            <div className="w-8/12 mx-auto text-center">
              <div>
                <h1 className="text-white font-bold md:text-4xl md:leading-normal text-4xl leading-normal mb-3">
                  Are you ready to experience the ultimate African football
                  journey?
                </h1>
                <h2 className="text-[#ffde59] font-normal md:text-lg md:leading-normal text-base leading-normal">
                  Reserve your spot now for this once-in-a-lifetime trip to
                  Abidjan, Côte D&apos;Ivoire and witness the magic of the
                  African Cup of Nations!
                </h2>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col gap-y-[8rem]  mt-8  py-8">
            {benefits.map((item, index) => {
              return (
                <div
                  key={"benefits--" + index}
                  className="flex  md:flex-nowrap flex-wrap gap-4 flex-row py-8"
                >
                  <div className={`md:w-6/12 w-full flex flex-col ${item.order}`}>
                    <div className={`leading-loose max-w-[500px] ${item.textMargin}`}>
                      <div className="break-words">
                        <h2 className="lg:text-4xl md:text-2xl text-xl text-white font-gotham font-bold mb-3">
                          {item.title}
                        </h2>
                     
                    </div>
                      <p className="text-white font-avenir font-light">
                        {item.description}
                      </p>
                      </div>
                  </div>
                  <div className="md:w-6/12 w-full md:mb-0 mb-4">
                    <div className={`relative ${item.height} ${item.width} md:h-[15rem]`}>
                      <Image src={item.img} alt="Benefits" fill={true} style={{objectFit: "contain"}} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full bg-[#f6f5f4] p-10">
          <div className="container xl:max-w-7xl mx-auto px-4">
            <h1 className="text-black font-gotham text-center font-medium md:text-3xl md:leading-normal text-3xl leading-normal my-8">
              Ready to reserve your spot?
            </h1>
            <div className="flex flex-row gap-16 flex-wrap lg:flex-nowrap justify-center">
              {/* card 1 */}
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
                  <div className="py-4 mt-4 text-center">
                    <Link
                      className="text-white font-avenir font-semibold text-base  bg-black  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                      href={"https://bit.ly/45TmDev"}
                    >
                      Select non-member services
                      
                    </Link>
                  </div>
                </div>
              </div>
              {/* card 1 */}
              {/* card 2 */}
              <div className="w-full flex flex-col max-w-sm bg-white border border-white rounded-[12px] shadow">
                <div className="relative">
                    <Image src={`/badge.png`} className='absolute left-[50%] top-[50%]' height={50} width={140} alt="badge" style={{transform: "translate(-50%, -50%)"}} />
                </div>
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
                    {/* <p className="text-sm font-light mb-2">
                      Choose the Blue Chesse Sports team and we will handle all
                      the necessary arrangements on your behalf.
                    </p>
                    <p className="text-sm font-light mb-3">
                      Our non-member services package includes:
                    </p> */}
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
                  <div className="py-4 mt-[7.251rem] text-center">
                    <Link
                      className="text-white font-avenir font-semibold text-base  bg-black  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                      href={"https://bit.ly/3S7RhO5"}
                    >
                      Select Basic Plan
                      
                    </Link>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              {/* card 3 */}
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
                    {/* <p className="text-sm font-light mb-2">
                      Choose the Blue Chesse Sports team and we will handle all
                      the necessary arrangements on your behalf.
                    </p>
                    <p className="text-sm font-light mb-3">
                      Our non-member services package includes:
                    </p> */}
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
                  <div className="py-4 mt-16 text-center">
                    <Link
                      className="text-white font-avenir font-semibold text-base  bg-black  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                      href={"https://bit.ly/3S7RhO5"}
                    >
                      Select VIP Plan
                      
                    </Link>
                  </div>
                </div>
              </div>
              {/* card 3 */}
            </div>
            <div className="flex flex-col py-6 font-avenir">
                <div className="mb-3 mx-auto mt-8">
                   <Image
                     src={`/30.png`}
                     width={70}
                     height={69}
                     alt="30 days"
                   />
                </div>
                <h6 className='text-base font-medium text-center mb-3 text-black'>Try BlueChesse for 30 days and if it isn&apos;t for you get refunded - See 
                   <Link className="cursor-pointer text-blue-500  text-base " href="/AFCON2023/terms"> Terms & Conditions </Link>
                 </h6>
                 <h6 className='text-base font-medium text-center text-black'>Limited spots available - don&apos;t miss out on this amazing opportunity!
                 </h6>
                 <h6 className='text-base font-medium text-center text-black'>
                  <a href="mailto:info@bluchessesports.com" target="blank">
                    Contact us &nbsp; 
                  </a>
                  today to learn more!
                 </h6>
            </div>
          </div>
        </div>
      </div>
    );
}