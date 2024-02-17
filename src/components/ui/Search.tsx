import useSearch from "@utils/hooks/useSearch";

import CloseBtn from "./Buttons/CloseBtn";
import Icon from "./Icon";

type Props = {
   className: string;
   onClear: () => void;
};

const Search = ({ className, onClear }: Props) => {
   const { value, handleValue, clearValue } = useSearch(onClear);

   return (
      <form
         className={`${className ?? ""} border-1 flex h-7 items-center rounded border border-transparent bg-white pr-2 text-m text-gray-main invalid:border-red`}
         onSubmit={(event) => event.preventDefault()}
      >
         <button className="flex h-full w-7 items-center justify-center" name="searchBtn" type="button">
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
            className="w-full pl-1 pr-4"
         />
         <CloseBtn onClick={clearValue} />
      </form>
   );
};

export default Search;
