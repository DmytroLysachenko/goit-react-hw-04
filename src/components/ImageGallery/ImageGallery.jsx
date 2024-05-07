import { ImageCard } from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={s.list}>
      {images.map((img) => (
        <ImageCard key={img.id} onClickImage={onClickImage} img={img} />
      ))}
    </ul>
  );
};
