import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { colors } from "../config/colors";
import AppText from "./AppText";

function ListItem({ title, subTitle, image }) {
  return (
    <TouchableHighlight
      underlayColor={colors.light}
      onPress={() => console.log(title + " pressed")}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: { color: colors.mediumGray },
  title: { fontWeight: 600 },
});
export default ListItem;
