import React, { useState } from "react";

import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
      />
      <AppTextInput
        autoCorrect={false}
        autoCapitalize="none"
        icon="lock"
        textContentType="password"
        placeholder="Password"
        secureTextEntry
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
