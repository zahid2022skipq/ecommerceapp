import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../config/colors";

import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
  },
  img: {
    height: 200,
    width: "100%",
    borderRadius: 20,
  },
});

export default Card;
