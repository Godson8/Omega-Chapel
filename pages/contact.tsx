import Link from "next/link";
import { IoCallSharp, IoMail } from "react-icons/io5";
import ContactShort from "../components/ContactShort/ContactShort";
import JoinUs from "../components/JoinUs/JoinUs";
import PageHeader from "../components/PageHeader/PageHeader";

const contact = () => {
  return (
    <div className="container">
      <PageHeader
        title="Contact"
        subTitle1="Locations"
        subTitle2="Contact"
        // image="nigeria.jpg"
      />
      <div className="mt-16 md:mt-[100px]">
        <JoinUs title="Contact Us" />
      </div>
      <div className=" flex flex-col items-center mt-16 md:mt-[100px] ">
        {/* <h1 className="text-[32px] font-bold text-center">Contact Us</h1> */}
        <ContactShort />
      </div>
      //{" "}
    </div>
  );
};

export default contact;
