import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "../Button/Button";
import { FaCreditCard, FaPaypal, FaMoneyBillAlt } from "react-icons/fa"; // Import icons
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

interface PaymentFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  amount: number;
}

const PartnersGive = () => {
  const { register, handleSubmit, control, watch, formState, setValue } =
    useForm<PaymentFormValues>();
  const { isSubmitting } = formState;

  const [currency, setCurrency] = useState("NGN");
  const router = useRouter();

  const email = watch("email");
  const amount = watch("amount");
  const fullName = watch("fullName");
  const phoneNumber = watch("phoneNumber");

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  const paystackConfig = {
    email,
    fullName,
    phoneNumber,
    amount: amount * 100, // Convert to kobo or smallest unit
    currency,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY!,
    onSuccess: (reference: any) => {
      console.log("Payment successful:", reference);
      router.push(`/thank-you?reference=${reference.reference}`); // Pass reference in URL
    },
  };

  const [value, setValueTab] = useState("1");
  const [value2, setValue2Tab] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValueTab(newValue);
  };
  const handleChange2 = (event: React.SyntheticEvent, newValue: string) => {
    setValue2Tab(newValue);
  };

  // Function to handle input for amount and ensure it doesn't go below 1
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseFloat(e.target.value);
    if (value < 1) {
      value = 0; // Prevent values below 0
    }
    setValue("amount", value); // Update the amount field in the form
  };

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20 space-y-12 py-12 rounded-xl px-2 w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">Give Now</h1>
          <p className="max-w-md text-center">
            Choose a payment method that works best for you. We support payments
            in Naira and more.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <TabContext value={value}>
            <div className="space-y-8 flex-row self-center">
              <TabList
                onChange={handleChange}
                aria-label="POMI Payment Methods"
              >
                <Tab
                  icon={<FaCreditCard size={24} />} // Increase icon size
                  label="Pay with Card"
                  value="1"
                  className="flex items-center space-x-2" // Align text and icon
                />
                <Tab
                  icon={<FaMoneyBillAlt size={24} />} // Increase icon size
                  label="Others"
                  value="2"
                  className="flex items-center space-x-2" // Align text and icon
                />
              </TabList>
              <TabPanel value="1">
                <div className="flex flex-col items-start space-y-7 w-full">
                  <div className="flex justify-center mt-8">
                    <div className="bg-white p-8 rounded-md w-full max-w-3xl">
                      <h2 className="text-lg font-bold mb-4">Quick Payment</h2>
                      <form
                        onSubmit={handleSubmit(() => {})}
                        className="space-y-4"
                      >
                        {/* Full Name */}
                        <div className="flex flex-col space-y-[6px]">
                          <label>Full Name*</label>
                          <input
                            {...register("fullName", { required: true })}
                            className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* Phone Number (International) */}
                        <div className="flex flex-col space-y-[6px]">
                          <label>Phone Number*</label>
                          <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <PhoneInput
                                {...field}
                                className="space-x-2 text-primary h-full focus:border focus:outline-none focus:border-primary"
                                placeholder="Enter phone number"
                                international
                                defaultCountry="NG"
                              />
                            )}
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col space-y-[6px]">
                          <label>Email*</label>
                          <input
                            {...register("email", { required: true })}
                            className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
                            type="email"
                            placeholder="Enter your email"
                          />
                        </div>

                        {/* Amount */}
                        <div className="flex flex-col space-y-[6px]">
                          <label>
                            Amount*{" "}
                            <span className="text-xs">(min 100NGN)</span>
                          </label>
                          <input
                            {...register("amount", {
                              required: true,
                              min: 100,
                            })}
                            className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={handleAmountChange} // Handle amount change
                          />
                        </div>

                        {/* Currency Selection */}
                        <div className="flex flex-col space-y-[6px]">
                          <label>Currency*</label>
                          <select
                            value={currency}
                            onChange={handleCurrencyChange}
                            className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
                          >
                            <option value="NGN">Nigerian Naira (NGN)</option>
                          </select>
                        </div>

                        {/* Payment Button */}
                        <div className="flex justify-end space-x-4">
                          <PaystackButton
                            {...paystackConfig}
                            className="bg-secondary text-white px-4 py-2 rounded-md"
                            disabled={
                              isSubmitting ||
                              !email ||
                              !amount ||
                              !currency ||
                              !fullName ||
                              amount < 100 ||
                              !phoneNumber
                            }
                          >
                            {isSubmitting ? (
                              <Oval
                                height={15}
                                width={15}
                                color="#fff"
                                wrapperStyle={{}}
                                visible={true}
                                ariaLabel="oval-loading"
                              />
                            ) : (
                              "Pay Now"
                            )}
                          </PaystackButton>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="mt-8 space-y-4">
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleAccordionChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography className="font-bold">
                        USD Account (USD)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="space-y-2 text-primary">
                        <p>
                          <span className="font-bold">Bank: </span>Wells Fargo
                        </p>
                        <p>
                          <span className="font-bold">Account Number: </span>
                          2640492076
                        </p>
                        <p>
                          <span className="font-bold">
                            Direct Deposit & Electronic Payments:{" "}
                          </span>
                          021200025
                        </p>
                        <p>
                          <span className="font-bold">
                            Domestic Wire Transfers:{" "}
                          </span>
                          121000248
                        </p>
                        <p>
                          <span className="font-bold">
                            International Wire Trasfers:{" "}
                          </span>
                          WFBIUS6S
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleAccordionChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography className="font-bold">
                        Naira Account (NGN)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="space-y-2 text-primary">
                        <p>
                          <span className="font-bold">Bank: </span>GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number: </span>
                          0942033954
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleAccordionChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <Typography className="font-bold">
                        Nigerian Dollar Account (USD)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="space-y-2 text-primary">
                        <p>
                          <span className="font-bold">Bank: </span>GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number: </span>
                          3000149147
                        </p>
                        <p>
                          <span className="font-bold">Swift Code: </span>
                          GTBINGLA
                        </p>
                        <p>
                          <span className="font-bold">Sort Code:</span>{" "}
                          058152890
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleAccordionChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4-content"
                      id="panel4-header"
                    >
                      <Typography className="font-bold">
                        Pound Account (GBP)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p>
                          <span className="font-bold">Bank:</span> GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number:</span>{" "}
                          3000149714
                        </p>
                        <p>
                          <span className="font-bold">Swift Code:</span>{" "}
                          GTBINGLA
                        </p>
                        <p>
                          <span className="font-bold">Sort Code:</span>{" "}
                          058152890
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleAccordionChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5-content"
                      id="panel5-header"
                    >
                      <Typography className="font-bold">
                        Euro Account (EUR)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p>
                          <span className="font-bold">Bank:</span> GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number:</span>{" "}
                          3000149453
                        </p>
                        <p>
                          <span className="font-bold">Swift Code:</span>{" "}
                          GTBINGLA
                        </p>
                        <p>
                          <span className="font-bold">Sort Code:</span>{" "}
                          058152890
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold mt-16">Give to Rev. Pius</h1>
          <p className="max-w-md text-center">Give with ease!</p>
        </div>
        <div className="flex flex-col items-start">
          <TabContext value={value2}>
            <div className="space-y-8 flex-row self-center">
              <TabList onChange={handleChange2} aria-label="Payment Methods">
                <Tab
                  icon={<FaCreditCard size={24} />} // Increase icon size
                  label="Paypal"
                  value="1"
                  className="flex items-center space-x-2" // Align text and icon
                />
                <Tab
                  icon={<FaMoneyBillAlt size={24} />} // Increase icon size
                  label="Others"
                  value="2"
                  className="flex items-center space-x-2" // Align text and icon
                />
              </TabList>

              <TabPanel value="1">
                <div className="flex flex-col items-center space-y-7">
                  <p className="text-center">
                    Use PayPal to make secure payments in your preferred
                    currency.
                  </p>
                  <Link href={"https://www.paypal.me/Piusolad"} passHref>
                    <Button title="Proceed with PayPal" outline />
                  </Link>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="mt-8 space-y-4">
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleAccordionChange("panel4")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5-content"
                      id="panel5-header"
                    >
                      <Typography className="font-bold">
                        Naira Account
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        <p>
                          <span className="font-bold">Bank:</span> GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number:</span>{" "}
                          0016431859
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleAccordionChange("panel5")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <Typography className="font-bold">
                        Dollar Account (USD)
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="space-y-2 text-primary">
                        <p>
                          <span className="font-bold">Bank: </span>GTBank
                        </p>
                        <p>
                          <span className="font-bold">Account Number: </span>
                          0016431866
                        </p>
                        <p>
                          <span className="font-bold">Swift Code: </span>
                          GTBINGLA
                        </p>
                        <p>
                          <span className="font-bold">Sort Code:</span>{" "}
                          021000089
                        </p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
    </div>
  );
};

export default PartnersGive;
