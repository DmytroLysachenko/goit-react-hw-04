import { Backdrop } from "../Backdrop/Backdrop";
import s from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

export const ImageModal = ({ src, alt, closeModalBtn }) => {
  return (
    <Backdrop>
      <img className={s.img} src={src} alt={alt} height="90%" />
      <button
        id="close-btn"
        className={s.btn}
        type="button"
        onClick={closeModalBtn}
      >
        <IoMdClose className={s.svg} color="white" />
      </button>
    </Backdrop>
  );
};
