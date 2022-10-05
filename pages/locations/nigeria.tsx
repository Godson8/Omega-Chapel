import Link from "next/link";
import { IoCallSharp, IoMail } from "react-icons/io5";
import ContactShort from "../../components/ContactShort/ContactShort";
import PageHeader from "../../components/PageHeader/PageHeader";

const nigeria = () => {
  return (
    <div className="container">
      <PageHeader
        title="Nigeria"
        subTitle1="Locations"
        subTitle2="Nigeria"
        image="nigeria.jpg"
      />
      <div className="mt-16 md:mt-[100px]">
        <div className="w-full justify-between space-y-2">
          <h1 className="text-[32px] font-bold text-center">Our Locations</h1>
          <div className="bg-[#E6EBF3] p-4 md:p-16 rounded-xl flex flex-col md:flex-row md:items-center md:justify-around space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <h1 className="text-2xl font-bold">Lagos</h1>
              <p className="">3b, Boundary road, Akowonjo, Lagos, Nigeria</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Ota</h1>
              <p className="">3b, Boundary road, Akowonjo, Lagos, Nigeria</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Ilogbo</h1>
              <p className="">3b, Boundary road, Akowonjo, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-16 md:mt-[100px] flex flex-col items-center">
        <h1 className="text-[32px] font-bold text-center">Contact Us</h1>
        <ContactShort />
      </div>
    </div>
  );
};

export default nigeria;
