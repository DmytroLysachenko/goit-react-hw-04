import s from "./Backdrop.module.css";
export const Backdrop = ({ children }) => {
  return (
    <div id="backdrop" className={s.backdrop}>
      {children}
    </div>
  );
};
