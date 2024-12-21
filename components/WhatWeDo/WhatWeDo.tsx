import SectionCard from "../SectionCard/SectionCard";

const WhatWeDo = () => {
  const sections = [
    // {
    //   title: "Salvation of Souls",
    //   images: [
    //     "/partners/salvation-of-souls-1.jpg",
    //     "/partners/salvation-of-souls-2.jpg",
    //     "/partners/salvation-of-souls-3.jpg",
    //   ],
    //   altText: "Salvation of Souls Images",
    // },
    {
      title: "Charity and Family Support Sunday",
      images: [
        // "/partners/charity-and-family-support/1.jpg",
        "/partners/charity-and-family-support/2.jpg",
        "/partners/charity-and-family-support/3.jpg",
        "/partners/charity-and-family-support/4.jpg",
        "/partners/charity-and-family-support/5.jpg",
        "/partners/charity-and-family-support/6.jpg",
        // "/partners/charity-and-family-support/7.jpg",
        // "/partners/charity-and-family-support/8.jpg",
      ],
      altText: "Charity and Family Support Images",
    },
    {
      title: "Womens Outreach",
      images: [
        "/partners/womens-outreach/1.jpg",
        // "/partners/womens-outreach/2.jpg",
        // "/partners/womens-outreach/3.jpg",
        // "/partners/womens-outreach/4.jpg",
        "/partners/womens-outreach/5.jpg",
        "/partners/womens-outreach/6.jpg",
        // "/partners/womens-outreach/7.jpg",
        // "/partners/womens-outreach/8.jpg",
        "/partners/womens-outreach/15.jpg",
        "/partners/womens-outreach/16.jpg",
        "/partners/womens-outreach/17.jpg",
        "/partners/womens-outreach/18.jpg",
      ],
      altText: "Medical Outreach Images",
    },
    {
      title: "Community Impact by Primary Education",
      images: [
        "/partners/children-outreach/1.jpg",
        // "/partners/children-outreach/2.jpg",
        "/partners/children-outreach/3.jpg",
        // "/partners/children-outreach/4.jpg",
        "/partners/children-outreach/5.jpg",
        // "/partners/children-outreach/6.jpg",
        "/partners/children-outreach/7.jpg",
        "/partners/children-outreach/8.jpg",
        "/partners/children-outreach/25.jpg",
        "/partners/children-outreach/27.jpg",
      ],
      altText: "Community Impact Images",
    },
    {
      title: "UK Church Plant",
      images: [
        // "/partners/uk-church-plant/1.jpg",
        "/partners/uk-church-plant/2.jpg",
        "/partners/uk-church-plant/3.jpg",
        "/partners/uk-church-plant/4.jpg",
        "/partners/uk-church-plant/5.jpg",
        "/partners/uk-church-plant/6.jpg",
        "/partners/uk-church-plant/7.jpg",
        // "/partners/uk-church-plant/8.jpg",
      ],
      altText: "Community Impact Images",
    },
    {
      title: "Youth Ministry",
      images: [
        "/partners/youth-ministry/1.jpg",
        "/partners/youth-ministry/2.jpg",
        "/partners/youth-ministry/3.jpg",
        "/partners/youth-ministry/4.jpg",
        "/partners/youth-ministry/5.jpg",
        "/partners/youth-ministry/6.jpg",
        "/partners/youth-ministry/7.jpg",
        "/partners/youth-ministry/8.jpg",
      ],
      altText: "Community Impact Images",
    },
    {
      title: "Music Outreach",
      images: [
        "/partners/music-outreach/1.jpg",
        "/partners/music-outreach/2.jpg",
        "/partners/music-outreach/3.jpg",
        "/partners/music-outreach/4.jpg",
        "/partners/music-outreach/5.jpg",
        "/partners/music-outreach/6.jpg",
        "/partners/music-outreach/7.jpg",
        "/partners/music-outreach/8.jpg",
      ],
      altText: "Music Outreach Images",
    },
    {
      title: "Campus Outreach",
      images: [
        "/partners/campus-outreach/1.jpg",
        "/partners/campus-outreach/2.jpg",
        "/partners/campus-outreach/3.jpg",
        "/partners/campus-outreach/4.jpg",
        "/partners/campus-outreach/5.jpg",
        "/partners/campus-outreach/6.jpg",
        "/partners/campus-outreach/7.jpg",
        "/partners/campus-outreach/8.jpg",
      ],
      altText: "Campus Outreach Images",
    },
  ];

  return (
    <div className="space-y-16">
      <h1 className="md:text-3xl text-2xl font-bold font-primary mb-8">
        What we do (in pictures)
      </h1>
      <div className="grid gap-8">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            images={section.images}
            altText={section.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
