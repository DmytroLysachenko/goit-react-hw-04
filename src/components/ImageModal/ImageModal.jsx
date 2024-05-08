import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

export const ImageModal = ({ src, desc, closeModal, modalIsOpen }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      "justify-content": "center",
      backgroundColor: "rgb(40,40,40)",
      border: "solid 1px white",
      padding: "30px",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="My Modal"
      style={customStyles}
    >
      <img className={s.img} src={src} alt={desc} />

      <button
        id="close-btn"
        className={s.btn}
        type="button"
        onClick={closeModal}
      >
        <IoMdClose className={s.svg} color="white" />
      </button>
    </Modal>
  );
};
