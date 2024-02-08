type Props = {
   children?: React.ReactNode;
   onClick?: () => void;
   disabled?: boolean;
};

const BlueBtn = ({ children, onClick, disabled }: Props) => (
   <button
      className="bg-blue-light p-2 text-l text-white"
      onClick={onClick}
      disabled={disabled}
      type="button"
   >
      {children}
   </button>
);

export default BlueBtn;
