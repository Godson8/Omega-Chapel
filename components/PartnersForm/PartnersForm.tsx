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
  phoneNumber: string;
  gender: string;
  email: string;
  homeAddress: string;
  whoReferredYou: string;
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

const PartnersForm = ({ title, detail }: FormTitle) => {
  const databaseRef = collection(database, "Partners");
  const [value, setValue] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const phoneNumberChange = (value: any) => {
    setValue(value), { ...register("phoneNumber") };
  };

  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { isSubmitting } = formState;

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
    reset();
    addDoc(databaseRef, {
      "First Name": data.firstName,
      "Last Name": data.lastName,
      Email: data.email,
      "Phone Number": data.phoneNumber,
      Gender: data.gender,
      "Home Address": data.homeAddress,
      "Who referred you": data.whoReferredYou,
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
    <div className="container mt-16 md:mt-[100px] p-8 rounded-xl">
      <div className="flex flex-col items-center space-y-20">
        <div className="space-y-4">
          <h1 className="text-[32px] font-bold text-center">{title}</h1>
          <p className="text-center">{detail}</p>
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
                autoComplete="nope"
                name="firstName"
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
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email",
                  },
                })}
                autoComplete="nope"
                name="email"
                className="px-4 py-3 bg-[#F2F7FF] text-primary md:w-[300px] focus:border focus:outline-none focus:border-primary rounded-md"
                type="text"
                placeholder="Email Address"
              />
              <PhoneInputWithCountrySelect
                className="space-x-2 text-primary h-full  focus:border focus:outline-none focus:border-primary"
                {...register("phoneNumber", {
                  required: true,
                  minLength: 7,
                })}
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
            <p>What is your Home Address?*</p>
            <input
              {...register("homeAddress", { required: true })}
              autoComplete="nope"
              name="homeAddress"
              className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="What is your Home Address?"
            />
          </div>
          <div className="flex flex-col space-y-[6px]">
            <p>Gender*</p>
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
          <div className="flex flex-col space-y-[6px]">
            <p>Who referred you?*</p>
            <input
              {...register("whoReferredYou", { required: true })}
              autoComplete="nope"
              name="whoReferredYou"
              className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
              type="text"
              placeholder="Full Name of the person that reffered you"
            />
          </div>

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
          Thank you for your interest in partnering with us. We will get in
          touch with you shortly 😊
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

export default PartnersForm;
