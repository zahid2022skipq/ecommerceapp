import React, { useState } from "react";

import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.conatianer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
            />
            <AppTextInput
              autoCorrect={false}
              autoCapitalize="none"
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <AppButton title="Login" handleBtn={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  conatianer: {
    padding: 20,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
