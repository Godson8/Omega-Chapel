import { forwardRef, useState } from "react";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import "react-phone-number-input/style.css";
import { Oval } from "react-loader-spinner";
import Button from "../Button/Button";
import { AlertTitle } from "@mui/material";
import dateFormat from "dateformat";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  firstTime: string;
  message: string;
}

interface FormTitle {
  title: string;
  detail?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

const JoinUs = ({ title, detail }: FormTitle) => {
  const databaseRef = collection(database, "Join us this Sunday");
  const [value, setValue] = useState<string | undefined>("");
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { isSubmitting } = formState;

  const phoneNumberChange = (value: string | undefined) => {
    setValue(value);
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

  const onSubmit = async (data: FormValues) => {
    try {
      await addDoc(databaseRef, {
        "First Name": data.firstName,
        "Last Name": data.lastName,
        Email: data.email,
        "Phone Number": value, // Use the updated phone value
        Gender: data.gender,
        "First Timer": data.firstTime,
        Message: data.message,
        date: dateFormat(new Date()),
      });
      setOpen(true);

      // Reset the form and custom phone input
      reset();
      setValue(""); // Clear phone number
    } catch (error) {
      setErrorOpen(true);
    }
  };

  return (
    <div className="container mt-16 md:mt-[100px]">
      <div className="flex flex-col items-center space-y-20">
        <div className="space-y-4">
          <h1 className="text-[32px] font-bold text-center">{title}</h1>
          <p className="max-w-52 text-center">{detail}</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-auto space-y-8"
        >
          <div className="flex flex-col space-y-[6px]">
            <p>Full Name*</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 justify-between">
              <input
                {...register("firstName", { required: true })}
                className="px-4 py-3 bg-[#F2F7FF] text-primary md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                type="text"
                placeholder="First Name"
              />
              <input
                {...register("lastName", { required: true })}
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
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="px-4 py-3 bg-[#F2F7FF] text-primary w-full md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                type="text"
                placeholder="Email Address"
              />
              <PhoneInputWithCountrySelect
                className="space-x-2 text-primary h-full focus:border focus:outline-none focus:border-primary"
                value={value}
                international
                defaultCountry="NG"
                onChange={phoneNumberChange}
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-[6px]">
            <p>Gender*</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  id="male"
                  value="Male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  {...register("gender", { required: true })}
                  type="radio"
                  id="female"
                  value="Female"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-[6px]">
            <p>Have you ever attended Omega Chapel?*</p>
            <select
              {...register("firstTime", { required: true })}
              className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="flex flex-col space-y-[6px]">
            <p>Leave us a Message*</p>
            <textarea
              {...register("message", { required: true })}
              className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
              rows={8}
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              className="bg-secondary text-white px-[18px] py-3 font-bold rounded-xl hover:scale-105 transition-transform disabled:bg-tertiary disabled:text-secondary"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Oval height={15} width={15} color="#4fa94d" strokeWidth={10} />
              )}
              <p>{isSubmitting ? "Submitting" : "Submit"}</p>
            </button>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          <AlertTitle>Success</AlertTitle>
          Thank you. Our welcome team will get in touch with you as soon as
          possible 😊
        </Alert>
      </Snackbar>
      <Snackbar open={errorOpen} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          <AlertTitle>Error</AlertTitle>
          Sorry, please try again.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default JoinUs;
