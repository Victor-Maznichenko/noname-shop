import Icon from "./Icon";

type Props = {
   onClick?: () => void;
   className?: string;
};

const CloseBtn = ({ onClick, className }: Props) => (
   <button className={`${className ?? ""}`} onClick={onClick} type="button">
      <Icon className="xl:h2 xl:w2 h-3 w-3 fill-gray-dark" name="close" />
   </button>
);

export default CloseBtn;
