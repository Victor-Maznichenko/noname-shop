import ReactDOM from "react-dom";

import ModalCart from "./ModalCart";

const portal = document.getElementById("portal");

const ModalCartWrapper = () => {
  if (!portal) return null;

  return ReactDOM.createPortal(<ModalCart />, portal);
};

export default ModalCartWrapper;
