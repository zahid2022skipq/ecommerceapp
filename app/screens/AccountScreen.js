import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title="John Doe"
        subTitle="johndoe@gmail.com"
        image={require("../assets/mal.jpg")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default AccountScreen;
