import Icon from "./Icon";

type Props = {
   value?: number;
   incrementValue?: () => void;
   decrementValue?: () => void;
};

const Counter = ({ value = 0, incrementValue, decrementValue }: Props) => (
   <div className="text inline-flex items-center rounded bg-gray-light text-xs leading-none">
      <button className="px-2 py-3" onClick={decrementValue} type="button">
         <Icon width={10} height={2} name="minus" />
      </button>
      <span className="w-6 text-center">{value}</span>
      <button className="px-2 py-3" onClick={incrementValue} type="button">
         <Icon width={10} height={10} name="plus" />
      </button>
   </div>
);

export default Counter;
