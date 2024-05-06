import { Field, Form, Formik } from "formik";

export const SearchBar = ({ handleSetQuery }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          handleSetQuery(values.query);
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
