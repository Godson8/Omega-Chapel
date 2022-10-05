import PageHeader from "../components/PageHeader/PageHeader";
import { AiOutlineArrowRight } from "react-icons/ai";

const beliefs = () => {
  return (
    <div className="container">
      <PageHeader
        title="Our Beliefs"
        subTitle1="About"
        subTitle2="Beliefs"
        image="beliefs.jpg"
      />
      <div className="mt-16 md:mt-[100px]">
        <div className="flex w-full justify-between">
          <h1 className="text-2xl md:text-[40px] font-black">Our Beliefs</h1>
          <div className="flex items-center space-x-2">
            <p className=" text-[#ee4343] font-extrabold">Our Mission</p>
            <AiOutlineArrowRight color="#ee4343" size={20} />
          </div>
        </div>
        <p className="mt-10 md:mt-20 text-justify">
          Omega Chapel International Churches preaches Christ, His birth, His
          baptism, His works, His teachings, His crucifixion, His millennial
          reign, His White Throne Judgment, and the New Heavens and the New
          Earth, when He shall put all enemies under His feet and shall reign
          eternally, and the Church shall abide with Him forever.
          <br />
          <br />
          We believe in:
          <br />
          <strong>1.</strong> The Divine inspiration and authority of the Holy
          Bible.
          <br />
          <strong>2.</strong> The Trinity of the Persons in one Godhead.
          <br />
          <strong>3.</strong> The Virgin Birth, Sinless Life, Atoning Death,
          Triumphant Resurrection, Ascension and Abiding Intercession of the
          Lord Jesus Christ, His Second Coming and Millennial Reign upon the
          earth.
          <br />
          <strong>4.</strong> Justification and Sanctification of the believer
          through the Redemptive work of Christ.
          <br />
          <strong>5.</strong> The sacrament of Baptism by immersion and of the
          Lord’s Supper (Holy Communion) with emphasis on the mystery and power
          of the Blood and Body (flesh) of Jesus at the communion table.
          <br />
          <strong> 6.</strong> Baptism of the Holy Spirit with the evidence of
          speaking in tongues and signs following Believers.
          <br />
          <strong>7.</strong> The Nine Gifts of the Holy Spirit for the
          spiritual and physical benefits of the body of Christ (the Universal
          Church) as well as the Nine-fold Fruit of the Spirit.
          <br />
          <strong>8.</strong> Strong Church government under the leadership of
          the Local Pastor with the other four fold ministries contributing to
          prepare the members of the Church for the work of the Ministry
          (Service), for the building up of the Church towards the attainment of
          unity in the faith and in the knowledge of Jesus Christ, the Son of
          God and for the maturity of the Church to the full measure of the
          fullness of Christ.
          <br />
          <strong>9.</strong> The possibility of falling from grace.
          <br />
          <strong>10.</strong> The obligatory nature of the tithes and
          offerings.
          <br />
          <br />
          OUR CORE VALUES
          <br />
          <strong> 1. L</strong> LOVE
          <br />
          <strong>2. I</strong> INTEGRITY
          <br />
          <strong>3. F</strong> FAITH
          <br />
          <strong>4. E</strong> EXCELLENCE
          <br />
          <strong>5. H</strong> HUMILITY
          <br />
          <strong>6. H</strong> HOLINESS
          <br />
          <strong>7. S</strong> SACRIFICE
          <br />
          <br />
          <strong>OUR ANTHEM</strong>
          <br /> We are the members of Omega
          <br />
          Our banners floating in the skies
          <br />
          We are victorious by our savior
          <br />
          And today, we live like Jesus Christ
          <br />
          Onwards, Always Forward we are marching
          <br />
          Christ our Saviour keeps us safe indeed
          <br />
          Oh Lord God we are with thee
          <br />
          Blessed is the Lord our king!
          <br />
        </p>
      </div>
    </div>
  );
};

export default beliefs;
