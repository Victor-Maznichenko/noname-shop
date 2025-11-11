import { ChangeEvent, useState } from "react";

import { cn } from "@helpers";
import { setCartOpen } from "@redux/reducers/cartReducer";
import { changeCurrentCategory } from "@redux/reducers/categoriesReducer";
import { setSearchTerm } from "@redux/reducers/productsReducer";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button, Icons, Search } from "@components/ui";

import { Categories } from "./Categories";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.cart);
  const searchTerm = useAppSelector(state => state.products.searchTerm);
  const [isSearchHidden, setSearchShow] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 3) dispatch(changeCurrentCategory("all"));
    dispatch(setSearchTerm(event.target.value));
  };

  const toggleSearchShow = () => setSearchShow(prevState => !prevState);
  const toggleOpenCart = () => dispatch(setCartOpen());

  const handleClear = () => {
    dispatch(setSearchTerm(""));
    toggleSearchShow();
  };

  return (
    <header className="sticky left-0 top-0 z-40 bg-gray-light py-[1.125rem]">
      <div className="container mx-auto px-1 sm:px-[15px]">
        <div className="flex items-center justify-between gap-x-2">
          <div className="relative flex w-full items-center gap-x-px overflow-hidden">
            <Button
              className="ml-[1px] text-gray-main"
              variant="filled-sm-white-rounded"
              onClick={toggleSearchShow}
              aria-label="Show search form..."
            >
              <Icons.Search />
            </Button>

            <Categories />

            <Search
              className={cn(
                "absolute left-0 top-0 z-10 h-full w-full transition-all",
                isSearchHidden && "pointer-events-none opacity-0"
              )}
              onChange={handleChange}
              onClear={handleClear}
              value={searchTerm}
            />
          </div>

          <Button
            onClick={toggleOpenCart}
            variant={products.length ? "filled-sm-blue-rounded" : "filled-sm-white-rounded"}
            className="relative flex items-center lowercase"
          >
            <Icons.Cart className={"mr-1 transition-all"} />
            <span>Cart</span>
            <span
              className="absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 rounded-full bg-white
                px-1.5 py-0.5 text-blue-light transition-all empty:opacity-0"
            >
              {products.length || ""}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
