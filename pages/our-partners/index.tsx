import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tabs from "../../components/Tabs/Tabs";

const partners = () => {
  return (
    <div className="container">
      <PageHeader
        title="Omega Liberation Partners"
        subTitle1="About"
        subTitle2="Partners"
        // image="leadership.jpg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-16 md:mt-[100px]">
        <div className="p-8 bg-[#f8fafc] rounded-xl">
          <h1 className="text-2xl font-black">Purpose: (why we exist)</h1>
          <p>To help raise finances and support for our ministry operations.</p>
        </div>
        <div className="bg-[#f5f5f5] p-8 rounded-xl">
          <h1 className="text-2xl font-black">Vision: (What we see)</h1>
          <p>
            A thousand loyal (well to do) financial partners marching with us to
            spread the gospel and fulfil our mission.
          </p>
        </div>
        <div className="bg-[#c9f0fa] p-8 rounded-xl md:col-span-2">
          <h1 className="text-2xl font-black">
            Mission: (how we raise partners)
          </h1>
          <p>
            Throughout existing partners and members, we hope to raise A
            thousand partners in five years. By a target of 10 members par
            executive member, we hope to raise 100 partners in the first one
            year. Each member is to source for ten members each.
          </p>
        </div>
      </div>
      <div className="mt-14 space-y-10">
        <h1 className="md:text-6xl text-4xl font-bold font-primary">
          Meet our Executive board
        </h1>
        <Tabs />
      </div>
    </div>
  );
};

export default partners;
