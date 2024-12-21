import { useRouter } from "next/router";
import PageHeader from "../../components/PageHeader/PageHeader";

const ThankYou = () => {
  const router = useRouter();
  const { reference } = router.query;

  return (
    <div className="container mx-auto py-12">
      <PageHeader
        title={
          <div>
            Thank You!!!
            <br />
            <span className="text-[0.875rem] sm:text-[1.25rem] md:text-[1.5rem] font-bold">
              Pius Oladipupo Ministries International
            </span>{" "}
          </div>
        }
        subTitle1="About"
        subTitle2="Partners"
        // image="leadership.jpg"
      />
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Thank You for Your Payment! 🎉
        </h1>
        {reference && (
          <p className="text-lg text-gray-700">
            Your payment reference is:{" "}
            <span className="font-semibold">{reference}</span>
          </p>
        )}
        <p className="text-gray-600 mt-2">
          We appreciate your support. If you have any questions, feel free to
          contact us.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
