import { Field, Form, Formik, formik } from "formik";

export const SearchBar = ({ setQuery, setPage }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          setQuery(values.query);
          formik.resetForm();
          setPage(1);
        }}
      >
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};
