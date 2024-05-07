import s from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" className={s.btn} onClick={onClick}>
      Load more...
    </button>
  );
};
