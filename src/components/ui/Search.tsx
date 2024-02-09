import useSearchQuery from "@utils/hooks/useSearchQuery";

import CloseBtn from "./Buttons/CloseBtn";
import Icon from "./Icon";

type Props = {
   className: string;
   onClear: () => void;
};

const Search = ({ className, onClear }: Props) => {
   const { value, handleValue, clearValue } = useSearchQuery(onClear);

   return (
      <form
         className={`${className ?? ""} flex items-center rounded bg-white pr-2 text-m text-gray-main outline outline-1 outline-transparent invalid:outline-red`}
      >
         <button className="flex h-7 w-7 items-center justify-center" type="button">
            <Icon className="fill-gray-main" name="search" width={17} height={17} />
         </button>
         <input
            type="search"
            name="search"
            placeholder="Search..."
            value={value}
            minLength={3}
            autoComplete="off"
            maxLength={220}
            onChange={handleValue}
            className="h-7 w-full pl-1 pr-4 outline-none"
         />
         <CloseBtn onClick={clearValue} />
      </form>
   );
};

export default Search;
