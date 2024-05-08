import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

export const ImageModal = ({ src, img, closeModal }) => {
  return (
    <>
      <img className={s.img} src={src} alt={img.desc} />
      <button
        id="close-btn"
        className={s.btn}
        type="button"
        onClick={closeModal}
      >
        <IoMdClose className={s.svg} color="black" />
      </button>
    </>
  );
};
