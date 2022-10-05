import Image from "next/image";
import Button from "../components/Button/Button";
import Leaders from "../components/Leaders/Leaders";
import PageHeader from "../components/PageHeader/PageHeader";

const leadership = () => {
  return (
    <div className="container">
      <PageHeader
        title="Our Leadership"
        subTitle1="About"
        subTitle2="Leadership"
        // image="leadership.jpg"
      />
      <div className="flex flex-col md:flex-row w-full space-y-20 md:space-y-0 md:space-x-20 md:items-center mt-16 md:mt-[100px]">
        <div className="relative w-full h-[505px] rounded-lg overflow-hidden">
          <Image src="/founders.jpg" layout="fill" className="object-cover" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-[32px] font-bold">
            Rev’d Pius and Funke Oladipupo
          </h1>
          <p className="text-justify">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
          <h1 className="font-bold">Founders & General Overseers</h1>
          <div className="flex w-full">
            <Button title="View Sermons" outline />
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-[100px] space-y-8">
        <h1 className="text-2xl md:text-[32px] font-bold">Meet our Leaders</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 md:gap-x-14 gap-y-8">
          <Leaders
            name="Oluwaseyi Akinyemi Olumuyiwa"
            position="Senior Pastor Omega Chapel, UK"
          />
          <Leaders
            name="Kemisola Olumuyiwa"
            position="Assistant Pastor Omega Chapel, UK"
          />
          <Leaders
            image="pastorBabalola.png"
            name="Dr. Ranti Babalola"
            position="Assistant Pastor Omega Chapel, HQ"
          />
          <Leaders
            image="pastorJohnson.png"
            name="Johnson Ajayi"
            position="Assistant Pastor Omega Chapel, HQ"
          />
          <Leaders
            name="Samson Joel"
            position="Assistant Pastor Omega Chapel, Ilogbo"
          />
          <Leaders
            image="pastorJames.png"
            name="King James Olusesan"
            position="Assistant Pastor Omega Chapel, Ilogbo"
          />
          <Leaders
            image="pastorDeolu.png"
            name="Adeolu Shobande"
            position="Assistant Pastor Omega Chapel, Ilogbo"
          />
          <Leaders
            image="pastorLeke.png"
            name="Leke Adebanjo"
            position="Assistant Pastor Omega Chapel, Ota"
          />
          <Leaders
            name="Abayomi Oriretan"
            position="Assistant Pastor Omega Chapel, Canada"
          />
          <Leaders
            image="oluronbi.png"
            name="Olumide Oluronbi"
            position="President Mens Fellowship"
          />
          <Leaders
            image="oyebola.png"
            name="Desola Oyebola"
            position="Deaconess, President Womens Fellowship"
          />
          <Leaders
            image="lola.png"
            name="Lola Ajayi"
            position="Childrens Coordinator Omega Chapel, HQ"
          />
          <Leaders
            image="bukolaBabalola.png"
            name="Bukola Babalola"
            position="Childrens Coordinator Omega Chapel, HQ"
          />
          <Leaders
            image="bukolaAdebanjo.png"
            name="Bukola Adebanjo"
            position="Childrens Coordinator Omega Chapel, Ota"
          />
        </div>
      </div>
    </div>
  );
};

export default leadership;
