import Image from 'next/image';
import Link from 'next/link';

export default function AfconLayout() {
    return (
        <header className="container xl:max-w-7xl mx-auto px-8">
            <div className="flex flex-row justify-between items-center py-6 ">
                <div>
                    <Link className="cursor-pointer" href="/AFCON2023">
                        <Image
                            src={`/bluecheese-logo-white.png`}
                            width={100}
                            height={90}
                            alt="blue chesse logo"
                            className="mx-auto md:mx-0 max-w-[50px] md:max-w-[120px]"
                        />
                    </Link>
                </div>
                <div className="flex gap-4 items-center">
                    {/* <Link
              href="/AFCON2023/faqs"
              className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
            >
              Partner programs
            </Link>
            <Link
              href="/AFCON2023/faqs"
              className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
            >
              Resources
            </Link>
            <Link
              href="/AFCON2023/faqs"
              className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
            >
              Tools
            </Link>
            <Link
              href="/AFCON2023/faqs"
              className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
            >
              About us
            </Link> */}
                    <Link
                        href="/AFCON2023/faqs"
                        className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
                    >
                        FAQs
                    </Link>
                    <Link
                        href={"https://af.uppromote.com/445cc7-4/login"}
                        className="cursor-pointer font-avenir font-medium text-sm md:text-base text-white"
                    >
                        Log in
                    </Link>
                    <Link
                        href={"https://af.uppromote.com/445cc7-4/register"}
                        className="cursor-pointer font-avenir font-bold text-sm md:text-base text-black bg-white px-2 py-1 md:px-4 md:py-2 rounded"
                    >
                        Get started
                    </Link>
                </div>
            </div>
        </header>
    );
}