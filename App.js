import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "tomato",
          height: 50,
          width: "100%",
          top: 750,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#42CBAC",
          height: 50,
          width: "100%",
          top: 800,
        }}
      ></View>
      <Image
        source={require("./assets/logo-red.png")}
        style={{ height: 100, width: 100, position: "absolute", top: 75 }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
