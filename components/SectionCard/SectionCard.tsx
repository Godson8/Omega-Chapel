const SectionCard = ({ title, images, altText }: any) => {
  return (
    <div className="w-full mb-4">
      <h1 className="md:text-2xl text-xl font-primary mb-4">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image: any, index: any) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={altText}
              className="w-full h-56 object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
