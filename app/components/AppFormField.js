import React from "react";

function AppFormField({ name }) {
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
      <ErrorMessage error={errors.email} visible={touched.email} />
    </>
  );
}

export default AppFormField;
