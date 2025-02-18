import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  startIcon?: ReactElement;
}
const variantStyles = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e0e7ff] text-[#6560c6]",
};
const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";
export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button className={variantStyles[props.variant] + " " + defaultStyles}>
        <div className="pr-3">{props.startIcon}</div>

        {props.text}
      </button>
    </div>
  );
};
