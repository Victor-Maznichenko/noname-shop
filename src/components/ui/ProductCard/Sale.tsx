interface SaleProps {
  className?: string;
  discountPercentage: number;
}

const Sale = ({ className, discountPercentage }: SaleProps) => (
  <div className={`${className ?? ""} inline-block rounded bg-white p-1`}>
    <span className="mr-1 text-blue-light">{discountPercentage}%</span>
    off sale
  </div>
);

export default Sale;
