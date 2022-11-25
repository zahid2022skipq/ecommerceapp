import React from "react";
import { Image } from "react-native";
import { View, StyleSheet } from "react-native-web";

function Card({ title, subTitle, image }) {
  return (
    <View>
      <Image source={require(image)} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Card;
