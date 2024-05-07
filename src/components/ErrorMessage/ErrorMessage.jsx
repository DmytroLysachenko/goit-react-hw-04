import s from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div className={s.error}>
      Seems like something went wrong, please try again later!
    </div>
  );
};
