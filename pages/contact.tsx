import Head from "next/head";
import ContactShort from "../components/ContactShort/ContactShort";
import JoinUs from "../components/JoinUs/JoinUs";
import PageHeader from "../components/PageHeader/PageHeader";

const contact = () => {
  return (
    <div className="container">
      <Head>
        <title>Omega Chapel - Contact Us -</title>
        <meta name="description" content="Omega Chapel - Contact Us -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageHeader title="Contact" subTitle1="Locations" subTitle2="Contact" />
      <div className="mt-16 md:mt-[100px]">
        <JoinUs title="Contact Us" />
      </div>
      <div className=" flex flex-col items-center mt-16 md:mt-[100px] ">
        <ContactShort />
      </div>
    </div>
  );
};

export default contact;
