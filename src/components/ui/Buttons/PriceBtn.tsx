import { ButtonHTMLAttributes } from "react";

const PriceBtn = ({ children, className, onClick, disabled }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`${className ?? ""} inline-block bg-blue-light px-[6px] py-[5px] text-s text-white`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

export default PriceBtn;
