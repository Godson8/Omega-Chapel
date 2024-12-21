import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/router";
import { Oval } from "react-loader-spinner";

interface PaymentFormValues {
  fullName: string;
  phoneNumber: string;
  email: string;
  amount: number;
}

interface ModalFormProps {
  onClose: () => void;
}

const PartnersGive = ({ onClose }: ModalFormProps) => {
  const { register, handleSubmit, control, watch, formState } =
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
    onClose: () => {
      alert("Payment window closed.");
    },
  };

  return (
    <div className="modal-container flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Quick Payment</h2>
        <form onSubmit={handleSubmit(() => {})} className="space-y-4">
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
            <label>Amount*</label>
            <input
              {...register("amount", { required: true, min: 1 })}
              className="px-4 py-3 bg-[#F2F7FF] text-primary w-full focus:border focus:outline-none focus:border-primary rounded-md"
              type="number"
              placeholder="Enter amount"
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
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <PaystackButton
              {...paystackConfig}
              className="bg-secondary text-white px-4 py-2 rounded-md"
              disabled={
                isSubmitting ||
                !email ||
                !amount ||
                !currency ||
                !fullName ||
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
  );
};

export default PartnersGive;
