import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Red Jacket",
    price: "100$",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in good condition",
    price: "1000$",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default ListingsScreen;
