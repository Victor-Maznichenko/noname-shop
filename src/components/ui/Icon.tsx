import { FC } from "react";

interface IProps {
   name: string;
   width?: number;
   height?: number;
   className?: string;
}

const Icon: FC<IProps> = ({ name, width, height, className }) => (
   <svg className={className ?? ""} style={{ width, height }}>
      <use xlinkHref={`sprite.svg#icon-${name}`} />
   </svg>
);

export default Icon;
