import Button from "../Button/Button";

const Newsletter = () => {
  return (
    <div className="container mt-16 md:mt-[100px] space-y-20">
      <div className="space-y-4">
        <h1 className="text-[32px] font-bold text-center">
          Subscribe to our Newsletter
        </h1>
        <p className="text-center">Get notified of our upcoming programs</p>
      </div>
      <div>
        <form className="w-full md:space-x-[24px] flex flex-col items-center space-y-4 md:space-y-0 md:flex-row justify-center">
          <input
            placeholder="Email address"
            className="text-sm px-[18px] py-3 bg-[#F2F7FF] text-primary w-full max-w-[377px] focus:border focus:outline-none focus:border-primary rounded-md"
          />
          <Button title="Submit" filled />
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
