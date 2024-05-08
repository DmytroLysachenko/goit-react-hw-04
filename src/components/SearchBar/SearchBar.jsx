import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import { MdOutlineImageSearch } from "react-icons/md";

export const SearchBar = ({ handleSetQuery }) => {
  return (
    <header className={s.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          handleSetQuery(values.query.trim());
        }}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            <MdOutlineImageSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
};
