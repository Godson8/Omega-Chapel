import Image from "next/image";
import React from "react";

const BlogNavBar = () => {
  return (
    <nav className="shadow-nav bg-white sticky top-0  z-[99999] w-full">
      <div className="container z-30 bg-white">
        <div className="w-full flex justify-center items-center h-[67px]">
          <div className="h-14 w-14 rounded-full bg-[#E7EEE4] absolute left-2/4 transform -translate-x-14"></div>
          <div className="relative cursor-pointer flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" height={28} width={28} />
            <h1 className="text-xl font-bold">BLOG</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BlogNavBar;
