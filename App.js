import { StyleSheet, Text, View } from "react-native";
import MessagesScreen from "./app/screens/MessagesScreen";

// <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
// <Card
//   title="Red Jacket for sell"
//   subTitle="$100"
//   image={require("./app/assets/jacket.jpg")}
// />
// </View>

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({});
