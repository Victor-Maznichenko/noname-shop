import Icon from "./ui/Icon";

const Footer = () => (
   <footer className=" bg-gray-light py-6">
      <div className="container mx-auto flex items-center justify-between px-[15px]">
         <p>nonameshop©2024</p>
         <Icon name="star" className="mr-2 fill-gray-dark" width={14} height={14} />
         <div className="flex items-center">
            <Icon name="company-logo" className="mr-2 fill-gray-dark" width={24} height={10} />
            made in red collar
         </div>
      </div>
   </footer>
);

export default Footer;
