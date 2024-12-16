import css from '../SearchBar/SearchBar.module.css';
import { Field, Form, Formik } from 'formik';
import clsx from 'clsx';

const SearchBar = ({ search, loading, searchQuery }) => {

  const handleSubmit = (values, actions) => {
    search(values.query);
    actions.resetForm();
  };
  return (
    <header>
      <Formik
        initialValues={{ query: searchQuery || '' }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.searchForm}>
            <Field className={css.input} disabled={loading} name="query" type="text" placeholder="Search movies..." />
            <button
              className={clsx(css.btn, {
                [css.disabled]: loading || isSubmitting,
              })}
              type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};
export default SearchBar;