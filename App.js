import { StyleSheet, Text, View } from "react-native";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import MessagesScreen from "./app/screens/MessagesScreen";

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
      <ListItem title="My Name" subTitle="Subtitle" />
    </Screen>
  );
}

const styles = StyleSheet.create({});
