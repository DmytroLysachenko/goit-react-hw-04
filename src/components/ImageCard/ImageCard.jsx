import s from "./ImageCard.module.css";

export const ImageCard = ({ img, onClickImage }) => {
  return (
    <li className={s.item}>
      <img
        onClick={() => {
          onClickImage(img.urls.regular, img.description);
        }}
        className={s.img}
        src={img.urls.small}
        alt={img.description}
        width="100%"
        height="100%"
      />
    </li>
  );
};
