import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button/Button";
import Leaders from "../../components/Leaders/Leaders";
import PageHeader from "../../components/PageHeader/PageHeader";
import { MdPlayArrow } from "react-icons/md";

const founders = () => {
  return (
    <div className="container">
      <PageHeader
        title="Our Founders"
        subTitle1="Leadership"
        subTitle2="Founders"
        // image="leadership.jpg"
      />
      <div className="hidden md:block">
        <div className="flex items-center justify-center space-x-6 w-full mt-16 md:mt-[100px]">
          <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
            <Image
              src="/founders/7.jpg"
              layout="fill"
              className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
              alt="founders"
            />
          </div>
          <div className="space-y-6">
            <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
              <Image
                src="/founders/8.jpg"
                layout="fill"
                className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
                alt="founders"
              />
            </div>
            <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
              <Image
                src="/founders/6.jpg"
                layout="fill"
                className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
                alt="founders"
              />
            </div>
          </div>
          <div className="relative h-[600px] w-[200px] rounded-lg overflow-hidden">
            <Image
              src="/founders/4.jpg"
              layout="fill"
              className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
              alt="founders"
            />
          </div>
          <div className="space-y-6">
            <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
              <Image
                src="/founders/9.jpg"
                layout="fill"
                className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
                alt="founders"
              />
            </div>
            <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
              <Image
                src="/founders/11.jpg"
                layout="fill"
                className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
                alt="founders"
              />
            </div>
          </div>
          <div className="relative h-[200px] w-[200px] rounded-lg overflow-hidden">
            <Image
              src="/founders/2.jpg"
              layout="fill"
              className="object-cover hover:scale-105 transition-transform duration-200 ease-in-out"
              alt="founders"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mt-16 md:mt-[100px]">
        <div className="p-8 bg-[#f8fafc] rounded-xl">
          <h1 className="text-2xl font-black">About Us</h1>
          <p>
            Hello, we’re PIUS AND FUNKE OLADIPUPO. Since 1997, we’ve been
            passionately preaching and teaching folks all over the world how to
            be saved, and live victoriously by conforming to the image of Christ
            We presently have four church-ministry branches in two continents:
            Africa and the united kingdom. Although through the internet
            technology, our activities and messages are accessible worldwide.
            Our God-given mandate is to liberate the captives and help them
            conform to the image of Christ through preaching and teaching of the
            uncompromised WORD of God for a life of victory. This is being
            accomplished through a variety of channels, including our CHURCH
            NETWORK, ITINERARY MINISTRY, TARGETTED PROGRAMMES, CONVENTIONS,
            ‘DAYS OF GLORY’ VICTORY MEETINGS; PUBLISHED BOOKS, WEBSITE, AND
            SOCIAL MEDIA CHANNELS, to name a few. With new innovations in
            technology, we have more work to do now than ever. We are determined
            to let the world know Jesus SAVES and IN HIM, we can live a life of
            VICTORY!
          </p>
        </div>
        <div className="bg-[#f5f5f5] p-8 rounded-xl">
          <h1 className="text-2xl font-black">What We Teach</h1>
          <p>
            We are called to preach the good news of salvation to all and teach
            Christians, just like you, how to overcome life’s obstacles and to
            live in victory by applying principles found in the Bible. The
            wisdom of God’s WORD can help you with ANY situation in which you
            may find yourself. Generally, our teachings fall within one of these
            categories: salvation, conforming to the image of Christ and victory
            in life. You can find out more about our teachings here on our
            website as you follow the link.
          </p>
        </div>
        <div className="bg-[#c9f0fa] p-8 rounded-xl">
          <h1 className="text-2xl font-black">Our Testimony</h1>
          <p>
            In a vision from God, I saw myself and Funke appeared with a
            glorious countenance in the midst of many oppressed folks in a
            dungeon. The inmates assumed and maintained the posture they landed
            with when thrown in. a woman’s knees was melting on the ground
            already having maintained that posture for seven years in the
            horrific vision. There was agony and hopelessness everywhere until
            we broke in. As soon as the oppressed inmates sighted us, there
            where shouts of victory and freedom everywhere. They have been
            looking for someone to break in for their freedom and we did. When I
            came out of the vision, the Lord said ‘this is what you shall be
            doing for the rest of your life.’ This is one out of numerous
            encounters we’ve had with the Lord. Once after we completed our
            respective university education and attended basic bible schools, we
            began our mission with those God had posted to us at that time. Our
            operations started with prayers and the birth of a church work in
            the city of Ota (South west Nigeria) and with the name ‘GLORIOUS
            LIBERTY ASSEMBLY.’ The name was later changed to OMEGA CHAPEL INTL
            CHURCHES as we moved to the more cosmopolitan metropolis of Lagos
            (Southwest Nigeria) in the year 2005. Since then, hundreds or
            perhaps thousands have heard the Gospel and learned how to apply The
            WORD to their lives, living like Jesus, living in victory. The power
            of the Gospel we preach and teach has changed so many lives with
            bible-based testimonies to show for it. Salvation, Holy Ghost
            baptism, healing, prosperity, direction, victory, peace has been
            served by the power of the Gospel we preach. Families have been
            blessed as our churches keep growing in the fear of God and in the
            comfort of the Holy Spirit. Today, we continue to spread further and
            farther and it’s all because of God’s grace and the dedication of
            our leaders, members and Partners. Because of their contributions,
            the good news of the gospel is going out all over the world, the
            poor is being helped and lives are being forever changed! If you’d
            like to join us in our mission, consider partnering with us.
          </p>
        </div>
        <div className="bg-[#ffecec] p-8 rounded-xl">
          <h1 className="text-2xl font-black">Our Family</h1>
          <p>
            We’ve been married for over 25 years, and we have been blessed with
            two children who actively support the work of the ministry.
          </p>
        </div>
      </div>
      <div className="mt-16 md:mt-[100px] flex flex-col items-center space-y-4">
        <h1 className="text-xl font-bold">Connect with us</h1>
        <p className=" max-w-md text-center">
          Whether you need prayer, Christian teaching materials or Partner
          Service assistance, feel free to contact the office nearest you or you
          may use one of the links online.
        </p>
        <p>You can also follow us on social media:</p>
        <ul>
          <Link href="https://www.facebook.com/pius.o.oladipupo">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Pius Oladipupo Facebook page</p>
            </li>
          </Link>
          <Link href="https://www.facebook.com/funke.oladipupo.12">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Funke Oladipupo Facebook page</p>
            </li>
          </Link>
          <Link href="https://www.facebook.com/Omega-Chapel-106683021365817">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Omega Chapel Facebook page</p>
            </li>
          </Link>
          <Link href="https://www.instagram.com/omega.chapel/">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Omega Chapel Instagram page</p>
            </li>
          </Link>
          <Link href="https://www.youtube.com/@omegachapel">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Omega Chapel Youtube page</p>
            </li>
          </Link>
          <Link href="https://www.facebook.com/OmegaBelieversGotTalent">
            <li className="flex space-x-2 items-center cursor-pointer hover:text-secondary">
              <MdPlayArrow size={20} />
              <p>Omega Chapel Youths Facebook page</p>
            </li>
          </Link>
        </ul>
        <p>
          Thank you for stopping by to learn more about us and the ministry. We
          pray this Website blesses you!
        </p>
        <p>Keep living like Jesus, keep winning like Jesus!!!</p>
        <p>Jesus Is LORD!!!</p>
        <p className="font-bold">PIUS AND FUNKE OLADIPUPO</p>
      </div>
    </div>
  );
};

export default founders;
