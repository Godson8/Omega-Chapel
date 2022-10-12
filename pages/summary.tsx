import { useRouter } from "next/router";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  purpose: string;
  currency: string;
  amount: number;
}
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
const summary = () => {
  const Router = useRouter();

  const {
    query: {
      firstName,
      lastName,
      email,
      phoneNumber,
      purpose,
      currency,
      amount,
    },
  } = Router;

  const props = {
    firstName,
    lastName,
    email,
    phoneNumber,
    purpose,
    currency,
    amount,
  };

  function createData(identifier: any, value: any) {
    return { identifier, value };
  }

  const rows = [
    createData("FULL NAME", `${props.firstName} ${props.lastName}`),
    createData("EMAIL", props.email),
    createData("PHONE NUMBER", props.phoneNumber),
    createData("PURPOSE", props.purpose),
    createData("CURRENCY", props.currency),
    createData("AMOUNT", props.amount),
  ];

  const config = {
    public_key: `${process.env.FLUTTERWAVE_KEY}`,
    tx_ref: Date.now().toLocaleString(),
    amount: parseInt(`${props.amount!}`),
    currency: `${props.currency!}`,
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: `${props.email!}`,
      phone_number: `${props.phoneNumber!}`,
      name: `${props.firstName!}`,
    },
    customizations: {
      title: `${props?.purpose}`,
      description: `${props?.purpose} Seed`,
      logo: "/logo.png",
    },
  };
  console.log(config);
  console.log(props);

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="container">
      <div className="max-w-xl mx-auto space-y-4 mt-16 md:mt-[100px]">
        <h1 className="text-primary text-center font-black text-2xl">
          Summary
        </h1>
        <TableContainer>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row, key) => (
                <TableRow
                  key={key}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      backgroundColor: "#4D373F41",
                      fontWeight: "bold",
                      //   color: "white",
                    },
                  }}
                >
                  <TableCell scope="row">{row.identifier}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <button
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}
          className="w-full bg-secondary text-white py-3 font-bold rounded-md hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer"
          type="submit"
        >
          Proceed to Give
        </button>
      </div>
    </div>
  );
};

export default summary;
