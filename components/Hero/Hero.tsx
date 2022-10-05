import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden object-cover ">
      {/* <video
        autoPlay
        loop
        muted
        className="w-full h-screen overflow-hidden object-cover"
      >
        <source src="/hero.mp4" />
      </video> */}
      <Image src="/hero.png" layout="fill" className="object-cover" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 px-2">
        <h1 className="text-[48px] font-black text-white text-center w-96">
          Omega Chapel
        </h1>
        <p className="font-extrabold text-white text-center">Welcome Home</p>
      </div>
    </div>
  );
};

export default Hero;
