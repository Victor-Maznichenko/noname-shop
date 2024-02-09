import { truncateText } from "@helpers";

import TextBtn from "../Buttons/TextBtn";

type Props = {
   className?: string;
   description: string;
   limitTruncate: number;
   toggleModalActive: () => void;
};

const ShortDescription = ({ className, description, limitTruncate, toggleModalActive }: Props) => {
   const isTruncate = description.length > limitTruncate;

   return (
      <div className={`${className ?? ""} text-xs`}>
         <p className="text-gray-main">
            {isTruncate ? (
               <>
                  {truncateText(description, 90)}
                  <span> ... </span>
                  <TextBtn onClick={toggleModalActive}>Read more</TextBtn>
               </>
            ) : (
               description
            )}
         </p>
      </div>
   );
};

export default ShortDescription;