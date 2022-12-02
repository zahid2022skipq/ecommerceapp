import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingsEditScreen";

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
