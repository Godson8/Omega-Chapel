import PageHeader from "../components/PageHeader/PageHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const mission = () => {
  return (
    <div className="container">
      <PageHeader
        title="Our Mission"
        subTitle1="About"
        subTitle2="Mission"
        image="mission.jpg"
      />
      <div className="mt-16 md:mt-[100px]">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl md:text-[40px] font-black">Our Mission</h1>
          <Link href="/our-beliefs">
            <div className="flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#ee4343] font-extrabold">Our Beliefs</p>
              <AiOutlineArrowRight color="#ee4343" size={20} />
            </div>
          </Link>
        </div>
        <p className="mt-10 md:mt-20 text-justify">
          Omega Chapel International Churches is a ministry committed to
          victorious liberation of mankind from all forms of oppression and
          helping folks conform to the image of Christ. In 1989, God
          commissioned His servants, Rev. Pius Oladipupo in a vision to go and
          liberate mankind from all oppression of the wicked. God’s servant had
          fallen into a vision where he saw himself and his wife (Rev. Funke
          Oladipupo) arrived gloriously in a place full of oppressed folks in
          different agonizing postures, where inmates could not get out. Some
          were on melted knees showing they’ve been on the same spot seven years
          or more. As soon as the inmates saw God’s servants, they were all
          loosed from their bondages throwing their hands up with victorious
          shouts. While we wondered what kind of place this was, it dawned on us
          they had been looking for who would break in for their deliverance.
          This was how God showed His servants what they will be doing for the
          rest of their lives. As students, the two were on fire for the Lord in
          their respective university campuses. In 1996, during his court
          attachment, the Lord-in a still small voice-said to His servant, the
          words of Genesis 1:26 ‘…let us make man in our image, after our
          likeness…’This was too big for God’s servant to take in at that time
          but this was later understood to mean what Paul was saying in Eph 4,
          that the five-fold ministry is for the perfecting of the saint …‘till
          we all come to the fullness of the measure of the stature of Christ’.
          The combination of these two encounters formed the basis of our
          approach in ministry. In December 1996, the eve of his departure from
          law school, God’s servant fell into yet another trance where a van was
          driven from Heaven to earth carrying about six new car batteries. On
          one of the batteries was a shining gold inscription ‘pius’. God’s
          servant immediately carried his own ministry power that day. In 1997
          February, the church arm of the ministry started at Ota Ogun state
          (south west Nigeria) in earnest with twelve in attendance with the
          name Glorious liberty Assembly. The same month, the Lord gave another
          vision encounter that led to a midnight one- on- one meeting with a
          very prominent man of God (Pastor Enoch Adeboye) for laying on of
          hands. God’s servant also proceeded to Advance Leadership Training in
          WOFBI where he graduated and was briefly ordained into ministry by Dr.
          David Oyedepo. In 2005, the growing church moved her headquarters to
          Lagos and changed her name to OMEGA CHAPEL INTERNATIONAL CHURCHES. The
          church has continue to change lives and spread even beyond the coast
          of Africa to the UK. In 2013, Rev. Pius and Funke Oladipupo were
          officially separated into their God ordained work under the hands of
          God’s anointed servant and father in the Lord, Rev. Olusola Ayodele
          Areogun of the Dream centre of the Life Oarsis international church.
          Starting from Ota and going forth to touch the globe, God is working
          through His servant not only to liberate and conform folks to Christ’s
          image but to also create platforms for multitudes (sons and daughters
          in the house) for their destinies in doing the same in their
          respective methods and places.
        </p>
      </div>
    </div>
  );
};

export default mission;
