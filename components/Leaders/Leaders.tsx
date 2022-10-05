import Image from "next/image";

interface Props {
  image?: string;
  name: string;
  position: string;
}

const Leaders = ({ image, name, position }: Props) => {
  return (
    <div className="flex  flex-col items-center">
      <div className="relative flex items-center h-32 w-32 md:h-[212px] md:w-[212px] rounded-full bg-[#D9D9D9] overflow-hidden">
        <Image src={`/leaders/${image}`} layout="fill" objectFit="contain" />
      </div>
      <div>
        <p className="font-bold text-2xl text-center">{name}</p>
        <p className="text-sm text-center">{position}</p>
      </div>
    </div>
  );
};

export default Leaders;
