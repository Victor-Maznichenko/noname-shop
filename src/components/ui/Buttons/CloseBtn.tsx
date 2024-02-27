import { ButtonHTMLAttributes } from "react";

import Icon from "@components/ui/Icon";

const CloseBtn = ({ className, onClick, disabled }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`${className ?? ""}`} onClick={onClick} type="button" disabled={disabled}>
    <Icon className="xl:h2 xl:w2 h-3 w-3 fill-gray-dark" name="close" />
  </button>
);

export default CloseBtn;
