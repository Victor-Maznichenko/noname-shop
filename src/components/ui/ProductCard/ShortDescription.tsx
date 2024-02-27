import { truncateText } from "@helpers";

import TextBtn from "@components/ui/Buttons/TextBtn";

interface ShortDescriptionProps {
  className?: string;
  description: string;
  limitTruncate: number;
  toggleModalActive: () => void;
}

const ShortDescription = ({
  className,
  description,
  limitTruncate,
  toggleModalActive,
}: ShortDescriptionProps) => {
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
