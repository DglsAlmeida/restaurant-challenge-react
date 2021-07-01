import { ReactNode } from "react";
import { forwardRef, ForwardRefRenderFunction, useState, useImperativeHandle } from "react";
import Modal from "react-modal";

export interface ModalHandles {
  openModal: () => void;
  closeModal: () => void;
}

interface ModalCardProps {
  children: ReactNode;
}

const ModalCard: ForwardRefRenderFunction<ModalHandles, ModalCardProps> = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    }
  })

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        {children}
      </Modal>
  )
}

export default forwardRef(ModalCard);