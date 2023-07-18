import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './bookSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../index.css';

const CreateBookForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    author: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newBook = {
      id: Date.now().toString(),
      ...values,
    };

    dispatch(addBook(newBook));
    console.log('Record saved:', newBook);
    resetForm();
  };

  return (
    <div>
      <h2>Create Book Record</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <Field type="text" id="title" name="title" className="form-control" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <Field type="text" id="author" name="author" className="form-control" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <button type="submit" className="btn btn-primary">Save</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateBookForm;
