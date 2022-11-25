import React from "react";
import { Image, View, StyleSheet } from "react-native";

import { colors } from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingComponentScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sell</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <ListItem image={require("../assets/male.jpg")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 20,
  },
});

export default ListingComponentScreen;
