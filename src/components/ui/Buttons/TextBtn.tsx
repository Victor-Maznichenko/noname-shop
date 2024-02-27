import { ButtonHTMLAttributes } from "react";

const TextBtn = ({
  className,
  type,
  disabled,
  onClick,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`${className ?? ""} inline text-xs text-blue-light hover:text-blue-dark`}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default TextBtn;
