import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "tomato",
          height: 50,
          width: 50,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "#42CBAC",
          height: 50,
          width: 50,
        }}
      ></View>
      <Image
        source={require("./assets/chair.jpg")}
        style={{ height: "75%", width: "80%" }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
});
