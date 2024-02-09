import Icon from "../Icon";

type Props = {
   className?: string;
   rating: number;
};

const Rating = ({ className, rating }: Props) => (
   <div className={`${className ?? ""} inline-flex items-center bg-white p-1`}>
      <Icon className="mr-1 fill-blue-light" name="star" height={16} width={15} />
      <span>{rating}</span>
   </div>
);

export default Rating;
