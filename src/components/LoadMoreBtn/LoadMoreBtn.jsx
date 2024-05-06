import s from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ setPage }) => {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={() => {
        setPage((prev) => prev++);
      }}
    >
      Load more...
    </button>
  );
};
