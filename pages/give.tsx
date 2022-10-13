import { forwardRef, useEffect, useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { database } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import "react-phone-number-input/style.css";
import Button from "../components/Button/Button";
import PageHeader from "../components/PageHeader/PageHeader";
import { AlertTitle } from "@mui/material";
import dateFormat from "dateformat";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { PaystackConsumer } from "react-paystack";
import { PaystackProps } from "react-paystack/dist/types";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import Router from "next/router";
import summary from "./summary";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  purpose: string;
  currency: string;
  amount: number;
}

const Give = () => {
  const databaseRef = collection(database, "Online Giving");
  const [value, setValue] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const phoneNumberChange = (value: any) => {
    setValue(value), { ...register("phoneNumber") };
    console.log(value);
  };

  const { register, getValues, handleSubmit, formState, reset } =
    useForm<FormValues>();

  const addData = () => {
    addDoc(databaseRef, {});
  };

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // reset();

    addDoc(databaseRef, {
      "First Name": data.firstName,
      "Last Name": data.lastName,
      Email: data.email,
      "Phone Number": data.phoneNumber,
      Purpose: data.purpose,
      Currency: data.currency,
      Amount: data.amount,
      date: dateFormat(new Date()),
    });
    Router.push({
      pathname: "/summary",
      query: {
        // getValues("email")
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        purpose: data.purpose,
        currency: data.currency,
        amount: data.amount,
      },
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
      <PageHeader
        title="Give"
        subTitle1="Omega"
        subTitle2="Give"
        image="give.JPG"
      />

      <div className="mt-16 md:mt-[100px] border border-opacity-30 border-solid border-primary rounded-lg px-4 py-8">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="text-2xl text-center font-bold">Give Online</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-auto space-y-8"
          >
            <div className="flex flex-col space-y-[6px]">
              <p>Full Name*</p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 justify-between ">
                <input
                  {...register("firstName", { required: true })}
                  autoComplete="nope"
                  name="firstName"
                  className="px-4 py-3 bg-[#F2F7FF] text-primary md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  {...register("lastName", { required: true })}
                  autoComplete="nope"
                  name="lastName"
                  className="px-4 py-3 bg-[#F2F7FF] text-primary md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-[6px]">
              <p>Contact*</p>
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "",
                    },
                  })}
                  autoComplete="nope"
                  name="email"
                  className="px-4 py-3 bg-[#F2F7FF] text-primary w-full md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                  type="email"
                  placeholder="Email Address"
                />
                <PhoneInputWithCountrySelect
                  className="space-x-2  text-primary h-full focus:border focus:outline-none focus:border-primary"
                  {...register("phoneNumber")}
                  autoComplete="nope"
                  value={value}
                  international
                  defaultCountry="NG"
                  onChange={phoneNumberChange}
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-[6px]">
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <div className="space-y-[6px]">
                  <p>Purpose*</p>

                  <select
                    {...register("purpose", { required: true })}
                    autoComplete="nope"
                    name="purpose"
                    className="px-4 py-3 bg-[#F2F7FF] text-primary w-full md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                  >
                    <option value="TITHE">Tithe</option>
                    <option value="OFFERING">Offering</option>
                    <option value="FIRST FRUIT">First Fruits</option>
                    <option value="PROPHET OFFERING">Prophet Offering</option>
                    <option value="MEDIA SEEDS">Media Seed</option>
                    <option value="OTHERS">Others</option>
                  </select>
                </div>
                <div className="space-y-[6px]">
                  <p>Currency*</p>
                  <select
                    {...register("currency", { required: true })}
                    autoComplete="nope"
                    name="currency"
                    className="px-4 py-3 bg-[#F2F7FF] text-primary w-full md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                  >
                    <option value="NGN">NGN</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <input
                {...register("amount", { required: true, valueAsNumber: true })}
                autoComplete="nope"
                name="amount"
                className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-l-md"
                type="number"
                placeholder="Amount"
              />
              <div className="flex items-center px-2 space-x-3 bg-[#e9ecef] rounded-r-md">
                <FaCcMastercard size={20} />
                <FaCcVisa size={20} />
              </div>
            </div>
            <div className="flex w-full justify-center ">
              <button
                className="w-full bg-secondary text-white py-3 font-bold rounded-md hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
                type="submit"
              >
                Give
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Give;
