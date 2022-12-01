import React from "react";

import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";

function LoginScreen(props) {
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default LoginScreen;
