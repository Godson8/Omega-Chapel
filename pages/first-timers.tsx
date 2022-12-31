import Head from "next/head";
import PageHeader from "../components/PageHeader/PageHeader";
import { useForm } from "react-hook-form";
import { database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import { useState } from "react";
import dateFormat from "dateformat";
import { Oval } from "react-loader-spinner";
import * as React from "react";
import { Alert } from "@mui/lab";
// import { Dayjs } from "dayjs";
// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { TimePicker } from "@mui/x-date-pickers";
// import { useEffect } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  email: string;
  invitedBy: string;
  maritalStatus: string;
  gender: string;
  birthDay: number;
  birthMonth: string;
  ageGroup: string;
  firstTime: string;
  //   visitation: boolean;
  //   dayOfVisitation: string;
  //   timeOfVisitation: string;
  //   typeOfVisitation: string;
  communicationTool: string;
}

const FirstTimers = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const ageGroups = [
    "0 - 7",
    "8 - 12",
    "13 - 19",
    "20 - 29",
    "30 - 39",
    "40 - 49",
    "50 - 59",
    "60+",
  ];
  const days = 31;
  const getDays = (days: number) => {
    let day = [];
    for (let i = 1; i <= days; i++) {
      day.push(<option value={i} label={`${i}`} />);
    }
    return day;
  };
  const databaseRef = collection(database, "First Timers");
  const [value, setValue] = useState<any>("");
  const [timeValue, setTimeValue] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const {
    register,
    // unregister,
    // watch,
    // getValues,
    handleSubmit,
    formState,
    reset,
  } = useForm<FormValues>();
  const { isSubmitting } = formState;

  //   const watchShowVisitation = watch("visitation");

  //   useEffect(() => {
  //     if (watchShowVisitation === true) {
  //       register("dayOfVisitation");
  //       register("timeOfVisitation");
  //     } else {
  //       unregister("dayOfVisitation");
  //       unregister("timeOfVisitation");
  //     }
  //   }, [register, unregister, watchShowVisitation]);

  const addData = () => {
    addDoc(databaseRef, {});
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (data: any) => {
    // console.log(data);
    reset();
    addDoc(databaseRef, {
      "First Name": data.firstName,
      "Last Name": data.lastName,
      Address: data.address,
      //   Date: data.date,
      "Phone Number": data.phoneNumber,
      Email: data.email,
      "Invited by": data.invitedBy,
      Gender: data.gender,
      "Marital Status": data.maritalStatus,
      "Birth Day": data.birthDay,
      "Birth Month": data.birthMonth,
      "Age Group": data.ageGroup,
      "First Time": data.firstTime,
      //   Visitation: data.visitation,
      "Communication Tool": data.communicationTool,
      date: dateFormat(new Date()),
    })
      .then(() => {
        setOpen(true);
      })
      .catch(() => {
        setErrorOpen(true);
      });
  };

  return (
    <div className="container">
      <Head>
        <title>Omega Chapel - First Timers Card -</title>
        <meta name="description" content="Omega Chapel - First Timers Card -" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <PageHeader title="Welcome" subTitle1="Omega" subTitle2="First Timers" />
      <div className="mt-16 md:mt-[100px] flex flex-col items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 w-auto"
        >
          <h1 className="text-2xl font-bold text-center mb-8">
            First Timer's Welcome Card
          </h1>
          {/* First and Last Name */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <input
              {...register("firstName", { required: true })}
              autoComplete="nope"
              name="firstName"
              className="px-4 py-3 bg-[#F2F7FF] w-full md:w-[300px] text-primary focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="First Name"
            />
            <input
              {...register("lastName", { required: true })}
              autoComplete="nope"
              name="lastName"
              className="px-4 py-3 bg-[#F2F7FF] w-full md:w-[300px] text-primary focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="Last Name"
            />
          </div>
          {/* Address */}
          <div className="w-full">
            <input
              {...register("address", { required: true })}
              autoComplete="nope"
              name="address"
              className="px-4 py-3 bg-[#F2F7FF] w-full text-primary focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="Address"
            />
          </div>
          {/* Telephone & Email */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <input
              {...register("phoneNumber", {
                required: true,
                minLength: 7,
              })}
              autoComplete="nope"
              name="phoneNumber"
              className="px-4 py-3 bg-[#F2F7FF] w-full text-primary focus:border focus:outline-none focus:border-primary rounded-md"
              type="number"
              placeholder="Phone Number"
            />
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Email address"
              className="px-4 py-3 bg-[#F2F7FF] w-full text-primary focus:border focus:outline-none focus:border-primary rounded-md"
            />
          </div>
          {/* Invitee */}
          <div>
            <input
              {...register("invitedBy", { required: true })}
              autoComplete="nope"
              name="invitedBy"
              className="px-4 py-3 bg-[#F2F7FF] w-full text-primary focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="Who Invited You?"
            />
          </div>
          {/* Gender and Marital Status */}
          <div className="flex space-x-10">
            <div className="flex flex-col space-y-1">
              <p>Gender</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <input
                    {...register("gender", { required: true })}
                    className="px-4 py-3 bg-[#F2F7FF] text-primary  "
                    type="radio"
                    id="male"
                    name="gender"
                    value="Male"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    {...register("gender", { required: true })}
                    className="px-4 py-3 bg-[#F2F7FF] text-primary"
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <p>Marital Status</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <input
                    {...register("maritalStatus", { required: true })}
                    className="px-4 py-3 bg-[#F2F7FF] text-primary  "
                    type="radio"
                    id="Single"
                    name="maritalStatus"
                    value="Single"
                  />
                  <label htmlFor="Single">Single</label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    {...register("maritalStatus", { required: true })}
                    className="px-4 py-3 bg-[#F2F7FF] text-primary"
                    type="radio"
                    id="Married"
                    name="maritalStatus"
                    value="Married"
                  />
                  <label htmlFor="Married">Married</label>
                </div>
              </div>
            </div>
          </div>
          {/* BirthDate and Age Group */}
          <div className="flex space-x-3">
            <div className="flex space-x-3">
              <div className="flex flex-col space-y-1">
                <label htmlFor="Birth Day" className="">
                  Birth Day
                </label>
                <select
                  {...register("birthDay", { required: true })}
                  autoComplete="nope"
                  name="Birth Day"
                  className="px-4 py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary resize-none rounded-md"
                >
                  {getDays(days)}
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="Birth Day" className="">
                  Birth Month
                </label>
                <select
                  {...register("birthMonth", { required: true })}
                  autoComplete="nope"
                  name="Birth Month"
                  className="px-4 py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary resize-none rounded-md"
                >
                  {months.map((month) => (
                    <option value={month} label={month} key={month} />
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="Age Group" className="">
                Age Group
              </label>
              <select
                {...register("ageGroup", { required: true })}
                autoComplete="nope"
                name="Age Group"
                className="px-4 py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary resize-none rounded-md"
              >
                {ageGroups.map((ageGroup) => (
                  <option value={ageGroup} label={ageGroup} key={ageGroup} />
                ))}
              </select>
            </div>
          </div>
          {/* First Time? */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="FirstTimer" className="">
              First Time Visitor?
            </label>
            <select
              {...register("firstTime", { required: true })}
              autoComplete="nope"
              name="First time visitor?"
              id="communicationTool"
              className="px-4 py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary resize-none rounded-md"
            >
              <option value="First time visitor" label="First time visitor" />
              <option value="Returning visitor" label="Returning visitor" />
              <option value="New to Area" label="New to Area" />
              <option value="Visiting Area" label="Visiting Area" />
            </select>
          </div>
          {/* Visitation */}
          {/* <div>
            <input
              type="checkbox"
              placeholder="Would you like a visit?"
              {...register("visitation", {})}
              name="visitation"
              className="mx-3"
            />
            {watchShowVisitation === true ? (
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    {...register("dayOfVisitation", {})}
                    // label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TimePicker
                    {...register("timeOfVisitation", {})}
                    // label="Basic example"
                    value={timeValue}
                    onChange={(newValue) => {
                      setTimeValue(newValue);
                    }}
                    renderInput={(params2) => <TextField {...params2} />}
                  />
                </LocalizationProvider>
              </div>
            ) : null}
          </div> */}
          {/* Communication Tool */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="communicationTool" className="">
              Communication Tool
            </label>
            <select
              {...register("communicationTool", { required: true })}
              autoComplete="nope"
              name="Communication Tool"
              id="communicationTool"
              className="px-4 py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary resize-none rounded-md"
            >
              <option value="Telephone Call" label="Telephone Call" />
              <option value="SMS / Whatsapp" label="SMS / Whatsapp" />
            </select>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center w-full">
            <button
              className="bg-secondary text-white text-sm px-[18px] py-3 font-bold w-fit rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out flex items-center space-x-1 disabled:bg-tertiary disabled:text-secondary"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Oval
                  height={15}
                  width={15}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={10}
                  strokeWidthSecondary={8}
                />
              )}
              <p>{isSubmitting ? "Submitting" : "Submit"}</p>
            </button>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Success</AlertTitle>
          Thank you. Our welcome team will get in touch with you as soon as
          possible 😊
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          <AlertTitle>Error</AlertTitle>
          Sorry, please try again.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FirstTimers;
