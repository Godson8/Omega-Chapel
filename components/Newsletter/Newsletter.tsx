import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { forwardRef, useState } from "react";
import dateFormat from "dateformat";
import { Oval } from "react-loader-spinner";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
}
const Newsletter = () => {
  const databaseRef = collection(database, "Newsletter");
  const [value, setValue] = useState<any>("");
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const { register, getValues, handleSubmit, formState, reset } =
    useForm<FormValues>();
  const { isSubmitting } = formState;

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
      FirstName: data.firstName,
      LastName: data.lastName,
      PhoneNumber: data.phoneNumber,
      Email: data.email,

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
    <div className="container mt-16 md:mt-[100px] space-y-20">
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-center">Get notified of our upcoming programs</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center space-y-4 justify-center  max-w-[450px] mx-auto"
        >
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row w-full justify-between">
            <input
              {...register("firstName", { required: true })}
              placeholder="First Name"
              className="text-sm px-[18px] py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary rounded-md"
            />
            <input
              {...register("lastName", { required: true })}
              placeholder="Last Name"
              className="text-sm px-[18px] py-3 bg-[#F2F7FF] text-primary focus:border focus:outline-none focus:border-primary rounded-md"
            />
          </div>
          <input
            {...register("phoneNumber", { required: true, minLength: 7 })}
            placeholder="Phone Number"
            type="number"
            className="text-sm px-[18px] py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
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
            className="text-sm px-[18px] py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
          />
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
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <AlertTitle>Success</AlertTitle>
          Thank you for signing up to our Newsletter. We will be in touch with
          you as soon as possible 😊
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

export default Newsletter;
