import { Button } from "./Button";
import { Icons } from "./Icons";

interface CounterProps {
  value?: number;
  incrementValue?: () => void;
  decrementValue?: () => void;
}

export const Counter = ({ value = 0, incrementValue, decrementValue }: CounterProps) => (
  <div className="text inline-flex items-center rounded bg-gray-light text-xs leading-none">
    <Button className="px-2 py-3" onClick={decrementValue} variant="unstyled">
      <Icons.Minus />
    </Button>
    <span className="w-6 text-center">{value}</span>
    <Button className="px-2 py-3" onClick={incrementValue} variant="unstyled">
      <Icons.Plus />
    </Button>
  </div>
);
