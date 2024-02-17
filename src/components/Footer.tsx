import Icon from "@components/ui/Icon";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className=" sticky bottom-0 left-0 z-20 bg-gray-light py-6">
         <div className="container mx-auto flex items-center justify-between px-1 sm:px-[15px]">
            <p>nonameshop©{currentYear}</p>
            <Icon name="star" className="mr-2 fill-gray-dark" width={14} height={14} />
            <div className="flex items-center">
               <Icon name="company-logo" className="mr-2 fill-gray-dark" width={24} height={10} />
               made in red collar
            </div>
         </div>
      </footer>
   );
};

export default Footer;
