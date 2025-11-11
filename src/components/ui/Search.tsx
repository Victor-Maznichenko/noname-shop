import { ChangeEventHandler } from "react";

import { cn } from "@helpers";

import { Button } from "./Button";
import { Icons } from "./Icons";

interface SearchProps {
  className: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onClear: () => void;
  value: string;
}

export const Search = ({ className, value, onChange, onClear }: SearchProps) => (
  <form
    className={cn(
      `border-1 flex h-7 items-center overflow-hidden rounded border border-transparent bg-white pr-2 text-m
      text-gray-main invalid:border-red`,
      className
    )}
    onSubmit={event => event.preventDefault()}
  >
    <Button className="text-gray-main" variant="filled-sm-white-rounded" aria-label="Search button">
      <Icons.Search />
    </Button>

    <input
      type="search"
      name="search"
      placeholder="Search..."
      value={value}
      minLength={3}
      autoComplete="off"
      maxLength={220}
      onChange={onChange}
      className="w-full pl-1 pr-4"
    />

    <Button variant="unstyled" onClick={onClear}>
      <Icons.Close />
    </Button>
  </form>
);
