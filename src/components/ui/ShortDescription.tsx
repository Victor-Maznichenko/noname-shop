import { cn, truncateText } from "@helpers";

import { Button } from "@components/ui";

interface ShortDescriptionProps {
  className?: string;
  description: string;
  limitTruncate: number;
  onShowMore: () => void;
}

export const ShortDescription = ({
  className,
  description,
  limitTruncate,
  onShowMore,
}: ShortDescriptionProps) => {
  const isTruncate = description.length > limitTruncate;

  return (
    <div className={cn("text-xs", className)}>
      <p className="text-gray-main">
        {isTruncate ? (
          <>
            {truncateText(description, 90)}
            <span> ... </span>
            <Button variant="text" onClick={onShowMore}>
              Read more
            </Button>
          </>
        ) : (
          description
        )}
      </p>
    </div>
  );
};
