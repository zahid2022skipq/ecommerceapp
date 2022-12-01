import React from "react";

import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput />
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
