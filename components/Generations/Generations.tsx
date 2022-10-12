import Image from "next/image";
import Link from "next/link";

const Generations = () => {
  return (
    <div className="container mt-16 md:mt-[100px] space-y-8 md:space-y-20">
      <h1 className="text-[32px] font-bold text-center">Generations</h1>
      <div className="flex flex-col md:flex-row items-center md:space-x-[50px] md:space-y-0 space-y-8 ">
        <Link href="/youths">
          <div className="relative h-[400px] w-full max-w-[590px] rounded-xl overflow-hidden cursor-pointer">
            <div className="w-full h-full top-0 z-10 absolute bg-gradient-to-b from-transparent to-[#2b2b2bb2]"></div>
            <Image
              src="/youths/youths.jpg"
              layout="fill"
              alt="youths"
              className="rounded-xl object-cover object-center "
            />
            <p className="text-white text-[32px] font-bold absolute left-4 bottom-8 z-20">
              Omega Youths
            </p>
          </div>
        </Link>
        <Link href="/kids">
          <div className="relative h-[400px] w-full max-w-[590px] rounded-xl overflow-hidden cursor-pointer">
            <div className="w-full h-full top-0 z-10 absolute bg-gradient-to-b from-transparent to-[#2b2b2bb2]"></div>
            <Image
              src="/kids/kids.jpg"
              layout="fill"
              alt="kids"
              className="rounded-xl object-cover object-center "
            />
            <p className="text-white text-[32px] font-bold absolute left-4 bottom-8 z-20">
              Omega Kids
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Generations;
