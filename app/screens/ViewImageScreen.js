import React from "react";
import { Image } from "react-native";

function ViewImageScreen(props) {
  return <Image source={require("../assets/chair.jpg")} />;
}

export default ViewImageScreen;
