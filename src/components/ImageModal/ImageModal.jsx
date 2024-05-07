import { Backdrop } from "../Backdrop/Backdrop";

export const ImageModal = ({ src, alt }) => {
  return (
    <Backdrop>
      <img src={src} alt={alt} width="60%" />
    </Backdrop>
  );
};
