import React from "react";

import { View, StyleSheet, Text, Image } from "react-native";

function Card({ title, subTitle, image }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Card;
