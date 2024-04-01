import { ReactNode, useState } from "react";

import { ModalContext } from "./context";

interface ModalActions {
  toggleModal: () => void;
}

export let modalActions: ModalActions | null = null;

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  modalActions = {
    toggleModal: () => {
      setModalOpen(!isModalOpen);
    },
  };

  return <ModalContext.Provider value={isModalOpen}>{children}</ModalContext.Provider>;
};
