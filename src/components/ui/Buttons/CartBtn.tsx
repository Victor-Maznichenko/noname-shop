import { ButtonHTMLAttributes } from "react";

const CartBtn = ({ children, className, onClick, disabled }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    // eslint-disable-next-line max-len
    className={`${className ?? ""} inline-block bg-blue-light p-2 text-l text-white transition-colors hover:bg-blue-dark`}
    onClick={onClick}
    disabled={disabled}
    type="button"
  >
    {children}
  </button>
);

export default CartBtn;
