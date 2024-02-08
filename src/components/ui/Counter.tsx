import { useState } from "react";

import Icon from "./Icon";

type Props = {
   num?: number;
   maxNum?: number;
   minValue?: number;
};

const Counter = ({ num = 0, maxNum = 999, minValue = 1 }: Props) => {
   const [value, setValue] = useState(num);
   const incrementValue = () => {
      if (value < maxNum) setValue(value + 1);
   };
   const decrementValue = () => {
      if (value > minValue) setValue(value - 1);
   };

   return (
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
};

export default Counter;
