import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingsEditScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 1,
  },
  {
    label: "Cameras",
    value: 1,
  },
];

export default function App() {
  return (
    <Screen>
      <AppPicker />
    </Screen>
  );
}

const styles = StyleSheet.create({});
