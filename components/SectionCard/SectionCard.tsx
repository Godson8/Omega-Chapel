import Image from "next/image";

const SectionCard = ({ title, images, altText }: any) => {
  return (
    <div className="w-full mb-4">
      <h1 className="md:text-2xl text-xl font-primary mb-4">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg w-full h-56"
          >
            <Image
              src={image}
              alt={altText}
              layout="fill" // Ensures the image covers the container
              objectFit="cover" // Ensures proper resizing
              objectPosition="top" // Aligns the image as needed
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
