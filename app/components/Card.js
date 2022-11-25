import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";
import { colors } from "../config/colors";

import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  img: {
    height: 200,
    width: "100%",
    borderRadius: 20,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    marginBottom: 20,
  },
});

export default Card;
