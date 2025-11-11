import { Icons } from "@components/ui";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 left-0 z-20 bg-gray-light py-6">
      <div className="container mx-auto flex items-center justify-between px-1 sm:px-[15px]">
        <p>nonameshop©{currentYear}</p>
        <Icons.Star size={14} />
        <div className="flex items-center">
          <Icons.CompanyLogo className="mr-2" />
          Made for Red Collar
        </div>
      </div>
    </footer>
  );
};
