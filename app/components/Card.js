import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default Card;
