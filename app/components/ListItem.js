import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import { colors } from "../config/colors";
import AppText from "./AppText";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  IconComponent,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: { color: colors.mediumGray },
  title: { fontWeight: 600 },
});
export default ListItem;
