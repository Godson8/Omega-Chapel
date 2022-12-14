import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Button from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

const Locations = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const maps = [
    {
      id: 1,
      continent: "Africa",
      countries: "Nigeria",
      image: "africa.svg",
      link: "nigeria",
    },
    {
      id: 2,
      continent: "Europe",
      countries: "United Kingdom",
      image: "europe.svg",
      link: "united-kingdom",
    },
    {
      id: 3,
      continent: "North America",
      countries: "Canada",
      image: "northAmerica.svg",
      link: "canada",
    },
  ];

  return (
    <div className="container  mt-16 md:mt-[100px] ">
      <div className="bg-[#f5f5f5] space-y-12 py-12 rounded-xl px-2">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-[32px] font-bold">Our Locations</h1>
          <p className="max-w-md text-center">
            Omega Chapel presently has presence in 3 continents: Africa, United
            Kingdom and North America. We hope to spread more to cover the earth
            as the waters cover the sea.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <TabContext value={value}>
            <div className="space-y-8">
              <TabList onChange={handleChange} aria-label="Locations">
                {maps.map((map) => (
                  <Tab label={map.continent} value={`${map.id}`} key={map.id} />
                ))}
              </TabList>
              {maps.map((map) => (
                <TabPanel value={`${map.id}`} key={map.id}>
                  <div className="flex flex-col items-center space-y-7">
                    <div className="relative w-64 h-[130px] md:w-[572px] md:h-[298px]">
                      <Image
                        src={`/${map.image}`}
                        layout="fill"
                        alt={map.image}
                      />
                    </div>{" "}
                    <Link href={`/locations/${map.link}`} passHref>
                      <Button title={map.countries} outline />
                    </Link>
                  </div>
                </TabPanel>
              ))}
            </div>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default Locations;
