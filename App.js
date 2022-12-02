import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <MessagesScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
