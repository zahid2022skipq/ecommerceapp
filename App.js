import { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

// <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
// <Card
//   title="Red Jacket for sell"
//   subTitle="$100"
//   image={require("./app/assets/jacket.jpg")}
// />
// </View>

export default function App() {
  const [category, setCategory] = useState();
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Cameras", value: 2 },
    { label: "Clothing", value: 3 },
  ];
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        data={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
