import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsEditScreen from "./app/screens/ListingsEditScreen";
// <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
// <Card
//   title="Red Jacket for sell"
//   subTitle="$100"
//   image={require("./app/assets/jacket.jpg")}
// />
// </View>

export default function App() {
  return (
    <Screen>
      <ListingsEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
