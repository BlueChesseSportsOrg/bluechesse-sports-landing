import Image from 'next/image'
import Link from 'next/link'

export default function AfconLayout({
    children,
  }: {
    children: React.ReactNode
  }){
     return (
       <div className="font-gotham">
         <div className="flex flex-row justify-between items-center py-3 px-8">
           <div>
             <Image
               src={"/bluecheese-logo-white.png"}
               width={100}
               height={150}
               alt="blue chesse logo"
               className="mx-auto md:mx-0"
             />
           </div>
           <div className="">
               <a href="#" className="cursor-pointer font-medium text-white">FAQs</a>
           </div>
           
         </div>
         {children}
         <div className="w-full px-8 p-12 mt-10 flex justify-between flex-row md:flex-nowrap flex-wrap ">
           <div className='mt-3'>
               <h6 className='text-white font-medium'>© DIHGroup 2023</h6>
           </div>
           <div className="flex flex-row">
           <div className="p-1 mt-3 flex">
            <a className="text-white fomt-semibold text-sm cursor-pointer">
              FAN MERCH
            </a>
            <div className="border-r ml-2"></div>
          </div>
          <div className="p-1 mt-3 flex">
            <a className="text-white fomt-semibold text-sm cursor-pointer">
              OTHER SPORTS
            </a>
            <div className="border-r ml-2"></div>
          </div>
         
          <div className="p-1 mt-3 flex">
            <a className="text-white fomt-semibold text-sm cursor-pointer">
              TERMS & CONDITIONS
            </a>
          </div>
           </div>
          
        </div>
       </div>
     );
}