import ContactShort from "../../components/ContactShort/ContactShort";
import Locations from "../../components/Locations/Locations";
import PageHeader from "../../components/PageHeader/PageHeader";

const locations = () => {
  return (
    <div className="container">
      <PageHeader
        title="Locations"
        subTitle1="Omega"
        subTitle2="Locations"
        image="locations.jpg"
      />

      <Locations />
      <div className="space-y-2 mt-16 md:mt-[100px] flex flex-col items-center">
        <h1 className="text-[32px] font-bold text-center">Contact Us</h1>
        <ContactShort />
      </div>
    </div>
  );
};

export default locations;
