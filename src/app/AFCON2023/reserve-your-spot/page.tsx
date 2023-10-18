import Image from 'next/image'
import Link from 'next/link'

export default function ReserveSpot(){
    return (
      <div>
        <div className="container mx-auto px-4 ">
          <div className="flex flex-col py-10">
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
          </div>
        </div>
      </div>
    );
}