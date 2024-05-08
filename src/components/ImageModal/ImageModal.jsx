import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

export const ImageModal = ({ src, alt, closeModal }) => {
  return (
    <>
      <img className={s.img} src={src} alt={alt} height="80%" width="auto" />
      <button
        id="close-btn"
        className={s.btn}
        type="button"
        onClick={closeModal}
      >
        <IoMdClose className={s.svg} color="white" />
      </button>
    </>
  );
};
