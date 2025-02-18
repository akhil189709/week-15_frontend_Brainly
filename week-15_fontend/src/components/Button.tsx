import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  startIcon?: ReactElement;
  onClick?: () => void;
}
const variantStyles = {
  primary: "bg-[#5046e4] text-white",
  secondary: "bg-[#e0e7ff] text-[#6560c6]",
};
const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center cursor-pointer";

export const Button = ({ text, variant, startIcon, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={variantStyles[variant] + " " + defaultStyles}
      >
        <div className="pr-1">{startIcon}</div>

        {text}
      </button>
    </div>
  );
};
