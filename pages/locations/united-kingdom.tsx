import Link from "next/link";
import React from "react";
import { IoCallSharp, IoMail } from "react-icons/io5";
import PageHeader from "../../components/PageHeader/PageHeader";

const uk = () => {
  return (
    <div className="container">
      <PageHeader
        title="United Kingdom"
        subTitle1="Locations"
        subTitle2="United Kingdom"
        image="uk.jpg"
      />
      <div className="mt-16 md:mt-[100px]">
        <div className="w-full justify-between space-y-2">
          <h1 className="text-[32px] font-bold text-center">Our Locations</h1>
          <div className="bg-[#E6EBF3] p-4 md:p-16 rounded-xl flex flex-col md:flex-row md:items-center md:justify-around space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <h1 className="text-2xl font-bold text-center">Manchester, UK</h1>
              <p className="text-center">
                32, Ivy Street, off Moston lane, Manchester M40 9LN.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2 mt-16 md:mt-[100px] flex flex-col items-center">
        <h1 className="text-[32px] font-bold text-center">Contact Us</h1>
        <div className="flex flex-col items-center md:flex-row md:space-x-32 space-y-4 md:space-y-0">
          <Link href="/">
            <div className="flex space-x-2 items-center cursor-pointer">
              <IoCallSharp size={25} color="#3C64B1" />
              <p className="text-2xl font-extralight">+44 7588 474607</p>
            </div>
          </Link>
          <Link href="/">
            <div className="flex space-x-2 items-center cursor-pointer">
              <IoMail size={25} color="#3C64B1" />
              <p className="text-2xl font-extralight">hello@omegachapel.org</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default uk;
