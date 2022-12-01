import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";

function AppFormField({ name }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCorrect={false}
        // autoCapitalize="none"
        // icon="email"
        // keyboardType="email-address"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        // placeholder="Email"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
