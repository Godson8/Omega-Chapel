import { forwardRef } from "react";

interface Props {
  title: string;
  filled?: boolean;
  outline?: boolean;
  href?: string;
}

const Button = forwardRef(({ filled, outline, title, href }: Props) => {
  return (
    <a
      href={href}
      className={`${filled && "bg-secondary text-white"} ${
        outline &&
        "border border-solid border-secondary bg-transparent text-secondary"
      } text-sm px-[18px] py-3 font-bold w-fit rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer`}
    >
      {title}
    </a>
  );
});

export default Button;
