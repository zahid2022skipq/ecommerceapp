import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    ></Formik>
  );
}

export default AppForm;
