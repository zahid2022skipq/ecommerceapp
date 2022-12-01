import React, { useState } from "react";

import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.conatianer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />

      <AppButton
        title="Login"
        handleBtn={() => console.log("Email ", email, " Pass ", password)}
      />
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
