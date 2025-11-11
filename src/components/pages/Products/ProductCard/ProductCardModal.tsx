import { cn } from "@helpers";

import { Badge, Button, Icons } from "@components/ui";

interface ProductCardModalProps {
  modalActive: boolean;
  toggleModalActive: () => void;
  product: Product;
}

export const ProductCardModal = ({ modalActive, toggleModalActive, product }: ProductCardModalProps) => (
  <div
    className={cn(
      "absolute left-0 top-0 z-10 h-full w-full bg-gray-light transition-all duration-300",
      !modalActive && "pointer-events-none opacity-0"
    )}
  >
    <Badge className="mb-2">
      <Icons.Star className="text-blue-light" />
      <span>{product.rating}</span>
    </Badge>

    <h4 className="mb-2">{product.title}</h4>

    <p className="text-xs text-gray-main">{product.description}</p>

    <Button variant="text" onClick={toggleModalActive}>
      Hide description
    </Button>
  </div>
);
