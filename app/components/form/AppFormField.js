import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, width } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        style={{ width: "90%" }}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
