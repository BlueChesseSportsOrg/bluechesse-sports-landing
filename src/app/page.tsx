import Image from 'next/image'
import Link from 'next/link'
import {BsHouseCheck,BsTicketPerforated,BsBusFrontFill,BsPersonWorkspace} from 'react-icons/bs'
import {BiParty} from 'react-icons/bi'
import {CiForkAndKnife} from 'react-icons/ci'
import {TbBrandOnlyfans} from 'react-icons/tb'

const activities = [
  {
    name: "Accomodation",
    icon: <BsHouseCheck color={"#ffffffc9"}/>
  },
  {
    name: "Tickets",
    icon: <BsTicketPerforated color={"#ffffffc9"}/>
  },
  {
    name: "Transportation",
    icon: <BsBusFrontFill color={"#ffffffc9"}/>
  },
  {
    name: "Feeding",
    icon: <CiForkAndKnife color={"#ffffffc9"}/>
  },
  {
    name: "After game parties",
    icon: <BiParty color={"#ffffffc9"}/>
  },
  {
    name: "City tours",
    icon: <BsBusFrontFill color={"#ffffffc9"}/>
  },
  {
    name: "Fan merch",
    icon: <TbBrandOnlyfans color={"#ffffffc9"}/>
  },
  {
    name: "Work remotely with reliable internet access",
    icon: <BsPersonWorkspace color={"#ffffffc9"}/>
  },
  

]

export default function Home() {
  return (
    //<Image src={"/ci.svg"} alt="Ivorian Flag" width={18} height={10} />
    <main className="flex min-h-screen flex-col items-center justify-center py-4">
      <div className="container mx-auto px-4 font-poppins">
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-4">
          <div className="w-full lg:w-6/12">
            <div className="max-w-xl mx-auto">
              <div className="mb-6">
                <Image
                  src={"/blue-cheese-logo.png"}
                  width={90}
                  height={60}
                  alt="blue chesse logo"
                  className='mx-auto md:mx-0'
                />
              </div>
              <div className="mb-5 lg:hidden">
              <Image 
                src={"/placeholder.jpg"}
                width={1500}
                height={1820}
                alt="football fans"
                />
            </div>
              <h1 className="text-[#ffffffc9] font-semibold md:text-6xl md:leading-normal text-4xl leading-normal mb-3">
                Let&apos;s play ball in Abidjan!
              </h1>
              <div className="flex flex-row gap-1 mb-3 w-full">
              {/* <Image src={"/ci.svg"} alt="Ivorian Flag" width={18} height={10} /> */}
                <h2 className="text-[#ffffffc9] font-medium md:text-lg md:leading-normal text-base leading-normal">
                  Travel with a group of 50 fans to Cote D&apos;Ivoire. Let&apos;s celebrate African football at the African Cup of Nations(AFCON 2023)
                </h2>
                
              </div>
              <div className="my-4">
                {/* <div className="max-w-sm mb-4">
                   <h3 className="text-[#ffffffc9] font-medium text-sm leading-relaxed">Let&apos;s celebrate African football at the African Cup of Nations(AFCON 2023)</h3>
                </div> */}
                 <div className="flex flex-row flex-wrap gap-4 w-full">
                    {
                         activities.map((item,index) => {
                          return (
                             <div className="flex flex-row gap-2 mb-1 md:w-2/5 w-full" key={item.name + "___" + index}>
                                {item.icon}
                                <p className="text-[#ffffffc9] font-medium text-sm">{item.name}</p>
                             </div>
                          )
                         })
                    }
                       
                 </div>
              </div>
              <div className="mt-8 mb-4">
                <Link
                  className="text-[#131517] font-semibold text-base  bg-white  focus:ring-4 focus:outline-none focus:ring-[#050708]/50  rounded-lg  px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-gray-600"
                  href={"#"}
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
            <div className="">
              <Image 
                src={"/placeholder.jpg"}
                width={1500}
                height={1820}
                alt="football fans"
                />
            </div>

          </div>
        </div>
        <div className="w-full mt-10 flex flex-row md:flex-nowrap flex-wrap border-t  border-[#ffffff14]">
           <div className="p-1 mt-3 flex">
              <a className='text-[#ffffffc9] fomt-semibold text-sm cursor-pointer'>FAN MERCH</a>
              <div className='border-r ml-2'></div>
           </div>
           <div className="p-1 mt-3 flex">
              <a className='text-[#ffffffc9] fomt-semibold text-sm cursor-pointer'>UCL</a>
              <div className='border-r ml-2'></div>
           </div>
           <div className="p-1 mt-3 flex">
              <a className='text-[#ffffffc9] fomt-semibold text-sm cursor-pointer'>PREMIERSHIP</a>
              <div className='border-r ml-2'></div>
           </div>
           <div className="p-1 mt-3 flex">
              <a className='text-[#ffffffc9] fomt-semibold text-sm cursor-pointer'>LA LIGA</a>
              
           </div>
        </div>
      </div>
    </main>
  );
}
