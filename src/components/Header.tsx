import { useState } from "react";

import Cart from "@/components/Cart";
import Categories from "@/components/ui/Categories";
import Icon from "@/components/ui/Icon";
import Search from "@/components/ui/Search";

const Header = () => {
  const [searchShow, setSearchShow] = useState(false);
  const toggleShow = () => setSearchShow(!searchShow);

  return (
    <header className="sticky left-0 top-0 z-40 bg-gray-light py-[1.125rem]">
      <div className="container mx-auto px-1 sm:px-[15px]">
        <div className="flex items-center justify-between gap-x-2">
          <div className="relative flex w-full items-center gap-x-px overflow-hidden">
            <button className="rounded bg-white p-2 pt-1" onClick={toggleShow} type="button">
              <Icon className="fill-gray-main" name="search" width={17} height={17} />
            </button>
            <Categories />
            <Search
              // eslint-disable-next-line max-len
              className={`${!searchShow ? "pointer-events-none opacity-0" : ""} absolute left-0 top-0 z-10 h-full w-full transition-all`}
              onClear={toggleShow}
            />
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
