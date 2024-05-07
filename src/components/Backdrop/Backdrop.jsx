import s from "./Backdrop.module.css";
export const Backdrop = ({ children }) => {
  return <div className={s.backdrop}>{children}</div>;
};
