import PageHeader from "../components/PageHeader/PageHeader";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { database } from "../firebaseConfig";
import Newsletter from "../components/Newsletter/Newsletter";
import dateFormat from "dateformat";
import Link from "next/link";

const getServerSideProps = async () => {
  //    const qw =  await getDocs(programRef);
  //    const res = await qw.json();
  //    return {
  //     props: {
  //       res,
  //     },
  //   };
};

const programRef = collection(database, "Upcoming programs");
const schedule = () => {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    getUpcomingPrograms();
  }, []);

  const getUpcomingPrograms = async () => {
    await getDocs(programRef).then((res) => {
      setPrograms(
        res.docs.map((data) => {
          return {
            id: data.id,
            ...data.data(),
            date: data.data().Date.toDate(),
          };
        })
      );
    });
  };
  console.log(programs);
  return (
    <div className="container">
      <PageHeader
        title="Our Schedule"
        subTitle1="About"
        subTitle2="Schedule"
        image="schedule.jpg"
      />
      <div className="mt-16 md:mt-[100px] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20">
        <div className="bg-[#E6EBF3] md:w-4/5 py-4 px-4 md:px-8 rounded-xl space-y-4">
          <h1 className="text-2xl font-bold">Upcoming Programs</h1>
          <div className="space-y-2">
            {programs.length === 0 ? (
              <div>
                <p>
                  No Upcoming Programs. <br /> Subscribe to our newsletter for
                  future updates
                </p>
              </div>
            ) : (
              programs.map((program) => (
                <div className="space-y-2">
                  <h1 className="font-bold">{program.Program}</h1>
                  <p>
                    {dateFormat(
                      program.Date.toDate(),
                      "dddd, mmmm dS, yyyy, h:MM:ss TT"
                    )}
                  </p>
                  {/* <p>{program.Date.toDate()}</p> */}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-tertiary w-full py-4 px-4 md:px-8 rounded-xl space-y-4">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <div className="space-y-2">
            <h1 className="font-bold">Sunday - (In Person)</h1>
            <p>1st Service - 7:30am WAT</p>
            <p>2nd Service - 9:00am WAT</p>
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <h1 className="font-bold">Wednesday - (Online Only)</h1>
              <div>
                <Link href="https://bit.ly/OmegaChapelStream">
                  <p className="underline font-bold">Zoom</p>
                </Link>
              </div>
            </div>
            <p>6:00pm WAT </p>
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default schedule;
