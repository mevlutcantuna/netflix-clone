import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

interface Props {
  path: number;
  isOpenModal: boolean;
  closeModal: () => void;
}

const TrailerModal: React.FC<Props> = ({ isOpenModal, closeModal, path }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {path}
    </Modal>
  );
};

export default TrailerModal;
