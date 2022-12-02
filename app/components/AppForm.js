import React from "react";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    ></Formik>
  );
}

export default AppForm;
