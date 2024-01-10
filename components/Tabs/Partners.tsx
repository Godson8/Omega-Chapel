import Image from "next/image";

interface Props {
  image?: string;
  name: string;
  position: string;
  position2?: string;
  position3?: string;
}

export const Partners = ({
  image,
  name,
  position,
  position2,
  position3,
}: Props) => {
  return (
    <div className="space-y-5 w-full">
      <h1 className="text-4xl font-normal tracking-wider font-primary">
        {name}
      </h1>
      <div className="relative flex items-center h-72 w-full md:h-[400px] md:w-[400px] bg-[#D9D9D9] overflow-hidden">
        <Image
          src={`/leaders/${image}.png`}
          layout="fill"
          objectFit="contain"
          alt=""
          className="hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
        />
      </div>
      <div className="bg-[#c9f0fa] p-8 rounded-xl w-full">
        <div className="text-lg font-extrabold text-primary font-primary uppercase">
          {position}
        </div>
        <div className="text-lg font-extrabold text-primary font-primary uppercase">
          {position2}
        </div>
        <div className="text-lg font-bold text-primary font-primary uppercase">
          {position3}
        </div>
      </div>
    </div>
  );
};

export const PartnerTag = ({
  image,
  name,
  position,
  position2,
  position3,
}: Props) => {
  return (
    <div className="">
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <br />
      <div className="text-xs normal-case">{position}</div>
      <div className="text-xs normal-case">{position2}</div>
      <div className="text-xs normal-case">{position3}</div>
    </div>
  );
};
