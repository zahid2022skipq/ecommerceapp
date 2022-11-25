import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";

function ListingComponentScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {},
  image: {
    width: "100%",
    height: 200,
  },
});

export default ListingComponentScreen;
