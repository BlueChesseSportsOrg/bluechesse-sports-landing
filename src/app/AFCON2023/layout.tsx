import Image from 'next/image'
import Link from 'next/link'

export default function AfconLayout({
    children,
  }: {
    children: React.ReactNode
  }){
     return (
       <div className="container mx-auto px-4 font-gotham">
         <div className="flex flex-row justify-between items-center py-3">
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
       </div>
     );
}