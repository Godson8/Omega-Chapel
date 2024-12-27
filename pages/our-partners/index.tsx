import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import Tabs from "../../components/Tabs/Tabs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import PartnersForm from "../../components/PartnersForm/PartnersForm";
import { useEffect, useRef, useState } from "react";
// import PartnersGive from "../../components/PartnersGive/PartnersGive";
// import { PartnersModal } from "../../components/PartnersGive/PartnersModal";

const PartnersGive = dynamic(
  () =>
    import("../../components/PartnersGive/PartnersGive").then(
      (mod) => mod.default
    ),
  { ssr: false }
);

// Dynamically import PartnersGive to ensure it's rendered only on the client side
// const PartnersGive = dynamic(() => import("../../components/PartnersGive/PartnersGive"), { ssr: false });

const Partners = () => {
  const giveSectionRef = useRef<HTMLDivElement | null>(null); // Ref for "Give" section

  // Function to scroll to the "Give" section
  const scrollToGiveSection = () => {
    if (giveSectionRef.current) {
      giveSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="container space-y-11">
      <PageHeader
        title={
          <div>
            POMI Liberty Partners
            <br />
            <span className="text-[0.875rem] sm:text-[1.25rem] md:text-[1.5rem] font-bold">
              Pius Oladipupo Ministries International
            </span>
            <div>
              <button
                onClick={scrollToGiveSection}
                className="bg-secondary text-white text-xs md:text-sm px-2 py-1 rounded-lg hover:bg-blue-600"
              >
                Give Now
              </button>
            </div>
          </div>
        }
        // subTitle1="About"
        // subTitle2="Partners"
        // image="leadership.jpg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-[100px]">
        <div className="relative w-full  h-[360px] md:h-[505px] rounded-lg overflow-hidden bg-[#ffecec]">
          <Image
            src="/founders/14.jpg"
            layout="fill"
            className="object-cover object-top hover:scale-105 transition-transform duration-200 ease-in-out"
            alt="founders"
          />
        </div>
        <div className="flex flex-col justify-center space-y-2">
          <h1 className="text-2xl md:text-[32px] font-bold">
            Who are Pius and Funke Oladipupo?
          </h1>
          <p className="text-justify">
            Since the nineties, Pius and Funke began preaching and teaching the
            word of God, which has led to the transformation of many lives with
            signs and wonders following. Their ministry has reached the poor and
            broken, the rich and professionals, the unschooled and campuses,
            Community and children ministry: beginning from Africa to United
            Kingdom and now The Americas. They are committed to more
            aggressively reaching the lost globally until Jesus returns.
          </p>
          {/* <h1 className="font-bold">Founders & General Overseers</h1> */}
          <div className="flex w-full">
            <Link href="/our-leadership/our-founders" passHref>
              <Button title="Learn More" outline />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-16 md:mt-[100px]">
        <div className="p-8 bg-[#f8fafc] rounded-xl md:col-span-2">
          <h1 className="text-2xl font-black">Purpose: (why we exist)</h1>
          <p>To help raise finances and support for our ministry operations.</p>
        </div>
        <div className="bg-[#f5f5f5] p-8 rounded-xl md:col-span-2">
          <h1 className="text-2xl font-black">
            Who are POMI Liberty Partners?
          </h1>
          <p>
            We are global Mothers, we are daughters, we are sons, we are
            children, we are fathers, we are friends, we are family, and we are
            spouses in the kingdom, ready to join hands with Pius and Funke to
            realise the God given vision of the ‘liberation of the creature from
            the bondage of corruption into the glorious liberty of the children
            of God.’ Simply put: to save and to disciple souls to live like
            Jesus.’
          </p>
          {/* Insert Image Here */}
          <div className="relative w-full h-[360px] md:h-[505px] rounded-lg overflow-hidden md:mt-6">
            <Image
              src="/partners/who-we-are.jpg"
              layout="fill"
              className="object-contain object-center hover:scale-105 transition-transform duration-200 ease-in-out"
              alt="partners"
            />
          </div>
        </div>
        <div className="bg-[#c9f0fa] p-8 rounded-xl md:col-span-2">
          <h1 className="text-2xl font-black">Our Purpose: (why we exist)</h1>
          <p>
            We exist to support the liberation vision and mission God gave His
            servants Pius and Funke Oladipupo. Our purpose is to become a
            financial structure to help raise and keep the flow of finances and
            support for POMI operations.
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-8 rounded-xl md:col-span-2 ">
          <h1 className="text-2xl font-black">Our Pursuit: (Why We Give)</h1>
          <ol className="space-y-6 list-decimal list-inside">
            <li>
              We know that the gospel can only spread through great finances:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Cry yet, saying, Thus saith the LORD of hosts; My cities
                through prosperity shall yet be spread abroad; and the LORD
                shall yet comfort Zion, and shall yet choose Jerusalem.” —
                Zechariah 1:17
              </span>
            </li>
            <li>
              Only those who love God are expected to help the spread:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Because that for his name&apos;s sake they went forth, taking
                nothing of the Gentiles. We therefore ought to receive such,
                that we might be fellowhelpers to the truth.” — 3 John 1:7-8
              </span>
            </li>
            <li>
              We saw partnership giving in Jesus&apos; ministry:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “And it came to pass afterward, that he went throughout every
                city and village, preaching and shewing the glad tidings of the
                kingdom of God: and the twelve were with him, And certain women,
                which had been healed of evil spirits and infirmities, Mary
                called Magdalene, out of whom went seven devils, And Joanna the
                wife of Chuza Herod&apos;s steward, and Susanna, and many
                others, which ministered unto him of their substance.” — Luke
                8:1-3
              </span>
            </li>
            <li>
              The word encourages us to support ministers:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Blessed are ye that sow beside all waters, that send forth
                thither the feet of the ox and the ass.” — Isaiah 32:20 “Cast
                thy bread upon the waters: for thou shalt find it after many
                days. Give a portion to seven, and also to eight; for thou
                knowest not what evil shall be upon the earth.” — Ecclesiastes
                11:1-2
              </span>
            </li>
            <li>
              Giving is part of kingdom service:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Or he that exhorteth, on exhortation: he that giveth, let him
                do it with simplicity; he that ruleth, with diligence; he that
                sheweth mercy, with cheerfulness.” — Romans 12:8
              </span>
            </li>
          </ol>
        </div>

        <div className="bg-[#c9f0fa] p-8 rounded-xl md:col-span-2 ">
          <h1 className="text-2xl font-black">Our Reward: (What We Gain)</h1>
          <ol className="space-y-6 list-decimal list-inside">
            <li>
              We lay our treasures in heaven:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “But lay up for yourselves treasures in heaven, where neither
                moth nor rust doth corrupt, and where thieves do not break
                through nor steal: For where your treasure is, there will your
                heart be also.” — Matthew 6:20-21
              </span>
            </li>
            <li>
              We gain more souls for the kingdom and a great reward on earth:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “And Jesus answered and said, Verily I say unto you, There is no
                man that hath left house, or brethren, or sisters, or father, or
                mother, or wife, or children, or lands, for my sake, and the
                gospel&apos;s, But he shall receive an hundredfold now in this
                time, houses, and brethren, and sisters, and mothers, and
                children, and lands, with persecutions; and in the world to come
                eternal life.” — Mark 10:29-30
              </span>
            </li>
            <li>
              Daily effectual prayers for all partners by Pius and Funke:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “And by their prayer for you, which long after you for the
                exceeding grace of God in you. Thanks be unto God for his
                unspeakable gift.” — 2 Corinthians 9:14-15
              </span>
            </li>
            <li>
              Partakers of their grace:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Even as it is meet for me to think this of you all, because I
                have you in my heart; inasmuch as both in my bonds, and in the
                defence and confirmation of the gospel, ye all are partakers of
                my grace.” — Philippians 1:7 “He that receiveth a prophet in the
                name of a prophet shall receive a prophet&apos;s reward; and he
                that receiveth a righteous man in the name of a righteous man
                shall receive a righteous man&apos;s reward.” — Matthew 10:41
              </span>
            </li>
            <li>
              Monthly global impartation service and blessings for partners:
              <span className="block pl-4 border-l-4 border-[#83d4e8]">
                “Gather my saints together unto me; those that have made a
                covenant with me by sacrifice. And the heavens shall declare his
                righteousness: for God is judge himself. Selah.” — Psalms 50:5-6
              </span>
            </li>
          </ol>
        </div>
      </div>
      {/* Executive board */}
      {/* <div className="mt-14 space-y-10">
        <h1 className="md:text-6xl text-4xl font-bold font-primary">
          Meet our Executive board
        </h1>
        {/* <Tabs /> 
      </div> */}
      {/* <div>
        <h1 className="md:text-3xl text-2xl font-bold font-primary">
          What we do (in pictures)
        </h1>
        <div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Salvation of Souls
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Charity and family support Sunday
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Medical outreach
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Community impact by primary education
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Music outreach
            </h1>
          </div>
          <div>
            <h1 className="md:text-3xl text-2xl font-primary">
              Campus outreach
            </h1>
          </div>
        </div>
      </div> */}
      <WhatWeDo />
      <PartnersForm
        title="Want to be a Partner?"
        detail="Please fill the form below. We would love to say hello."
      />
      <div className="  p-8 rounded-xl md:col-span-2">
        <h1 className="text-2xl font-black">
          Join Hands in the Vision of Transformation
        </h1>
        <p>
          We believe that the mission of liberation, as entrusted to Pius and
          Funke Oladipupo, requires collective effort and sustained support. Our
          community—global partners, families, and friends—are the backbone of
          this work. By giving, you become a key part of spreading hope,
          empowering lives, and extending the reach of the gospel. Together, we
          are shaping a future where lives are transformed, and the Kingdom of
          God is glorified. Your partnership helps us continue this impactful
          mission.
        </p>
        {/* <div className="flex justify-center mt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Give Now
          </button>
        </div> */}
        <div ref={giveSectionRef}>
          <PartnersGive />
        </div>
      </div>
    </div>
  );
};

export default Partners;
