import { ButtonHTMLAttributes } from "react";

import { setProductsLoading } from "@redux/reducers/productsReducer";
import { useAppDispatch } from "@redux/store";

const LoadMoreBtn = ({ className }: ButtonHTMLAttributes<HTMLButtonElement>) => {
   const dispatch = useAppDispatch();
   const handleClick = () => dispatch(setProductsLoading(true));

   return (
      <button
         className={`${className ?? ""} my-4 rounded border border-blue-light bg-blue-dark bg-transparent px-4 py-2 font-semibold text-gray-light transition-all hover:border-transparent hover:bg-blue-light hover:text-white`}
         onClick={handleClick}
         type="button"
      >
         Загрузить еще
      </button>
   );
};

export default LoadMoreBtn;
