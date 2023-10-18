import Image from 'next/image'
import Link from 'next/link'
import {BsHouseCheck,BsTicketPerforated,BsBusFrontFill,BsPersonWorkspace} from 'react-icons/bs'
import {BiParty} from 'react-icons/bi'
import {CiForkAndKnife} from 'react-icons/ci'
import {TbBrandOnlyfans} from 'react-icons/tb'

const activities = [
    {
      name: "Accomodation",
      icon: <BsHouseCheck color={"white"}/>
    },
    {
      name: "Tickets",
      icon: <BsTicketPerforated color={"white"}/>
    },
    {
      name: "City Tours",
      icon: <BsBusFrontFill color={"white"}/>
    },
    {
        name: "Fan merch",
        icon: <TbBrandOnlyfans color={"white"}/>
    },
    {
        name: "After game parties",
        icon: <BiParty color={"white"}/>
      },
    {
      name: "Feeding",
      icon: <CiForkAndKnife color={"white"}/>
    },
    {
        name: "Internet access",
        icon: <BsPersonWorkspace color={"white"}/>
      },
    {
      name: "Transportation",
      icon: <BsBusFrontFill color={"white"}/>
    },
    
    
    
  
  ]

const cards = [
    {
        img: "/GregSailor.jpeg",
        description: "Blue Chesse is my preferred sports and fitness hub. I get access to curated sailing events ,which helps me plan throughout the year. It’s also a great way to connect with other professional sailors",
        name: "Greg, Engineer & Sailor",
        location: "San Francisco"
    },
    {
      img: "/MariaPhysio.jpeg",
      description: " What I love about Blue Chesse is the community of health and fitness enthusiasts it connects me with. I recommend it regularly to my patients to help them gain fitness in a communal way",
      name: "Maria, Physiotherapist",
      location: "Mexico City"
    },
    {
      img: "/BarryBanker.jpeg",
      description: "With Blue Chesse I’ll be watching my first UEFA Champions League game next year. It’s a dream come true. I like that I’m also able to curate a fitness lifestyle with my family",
      name: "Barry, Banker",
      location: "Johannesburg"
    },
]  

export default function Afcon(){
    return (
      <div className="container mx-auto px-8 ">
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-4 my-10">
          <div className="w-full lg:w-6/12">
            <div className="max-w-xl mx-auto">
              <h1 className="text-white font-bold md:text-6xl md:leading-normal text-4xl leading-normal mb-3">
                Let&apos;s play <span>&#x26BD;</span> in Abidjan!
              </h1>
              <div className="flex flex-row gap-1 mb-3 w-full">
                {/* <Image src={"/ci.svg"} alt="Ivorian Flag" width={18} height={10} /> */}
                <h2 className="text-[#ffde59] font-normal md:text-lg md:leading-normal text-base leading-normal">
                  Travel with a group of 50 fans to Cote D&apos;Ivoire.
                  Let&apos;s celebrate African football at the African Cup of
                  Nations(AFCON 2023)
                </h2>
              </div>
              <div className="my-4">
                {/* <div className="max-w-sm mb-4">
                   <h3 className="text-[#ffffffc9] font-medium text-sm leading-relaxed">Let&apos;s celebrate African football at the African Cup of Nations(AFCON 2023)</h3>
                </div> */}
                <div className="flex flex-row flex-wrap gap-4 w-full">
                  {activities.map((item, index) => {
                    return (
                      <div
                        className="flex flex-row gap-2 mb-1 md:w-2/5 w-full"
                        key={item.name + "___" + index}
                      >
                        {item.icon}
                        <p className="text-white font-medium text-sm">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-8 mb-4">
                <Link
                  className="text-[#131517] font-semibold text-base  bg-white  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                  href={"/AFCON2023/reserve-your-spot"}
                >
                  Reserve Your Spot
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden w-6/12 relative lg:flex justify-center items-center">
            <div className="relative w-[90%] h-[30rem]">
              <Image
                src={`/hero-image.png`}
                fill={true}
                // width={850}
                // height={500}
                alt="football fans"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-8 pt-[4rem]">
          <div className="flex flex-row justify-center  mb-8">
            <div className="w-7/12 text-center ">
              <h6 className="text-white font-medium  text-lg ">
                We are a community of sports fans and fitness enthusiasts ,
                families ,entrepreneurs and creators utilizing sports as a force
                for good
              </h6>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 flex-wrap mb-5">
          {
                cards.map((item) => {
                    return (
                    <div key={"index--" + item} className="w-full h-full max-w-[22rem] bg-[#252525] border border-[#252525] rounded-[12px] shadow">
                        <div className="px-5 pb-5">
                             <div className="relative w-[214px] h-[214px] mx-auto mt-8 mb-3">
                                 <Image 
                                   src={item.img}
                                   fill={true}
                                   alt="card image"
                                   className="rounded-[12px]"
                                 />
                            </div>
                            <div className="py-5 text-center">
                              <p className="text-base font-medium text-white">
                                &quot;{item.description}&quot;
                              </p>
                            </div>
                             <div className="py-4 text-center">
                                 <p className="text-white mb-1 font-medium">{item.name}</p>
                                 <p className="text-white mb-2 font-medium">{item.location}</p>
                             </div>
                          
                        </div>
                      </div>
                    )
                })
              }
            
          </div>
          <div className="flex flex-row justify-center my-8">
              <div>
              <Link
                  className="text-[#131517] font-semibold text-base  bg-white  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                  href={"/AFCON2023/reserve-your-spot"}
                >
                  Join our community
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
          </div>
        </div>
        
      </div>
    );
}