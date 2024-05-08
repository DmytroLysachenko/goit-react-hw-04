import s from "./ImageCard.module.css";

export const ImageCard = ({ img, onClickImage }) => {
  return (
    <li onClick={() => onClickImage(img.urls.regular)} className={s.item}>
      <img
        className={s.img}
        src={img.urls.small}
        alt={img.description}
        width="100%"
        height="100%"
      />
    </li>
  );
};

/*  */
