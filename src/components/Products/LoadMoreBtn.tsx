import { ButtonHTMLAttributes } from "react";

const LoadMoreBtn = ({ className }: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    // eslint-disable-next-line max-len
    className={`${className ?? ""} my-4 rounded border border-blue-light bg-blue-dark bg-transparent px-4 py-2 font-semibold text-gray-light transition-all hover:border-transparent hover:bg-blue-light hover:text-white`}
    type="button"
  >
    Загрузить еще
  </button>
);

export default LoadMoreBtn;
