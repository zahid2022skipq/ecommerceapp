import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import { Button } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background.jpg")}
        style={{ height: "100%", width: "100%" }}
      />

      <Image
        source={require("./assets/logo-red.png")}
        style={{ height: 100, width: 100, position: "absolute", top: 75 }}
      />
      <Text style={{ position: "absolute", top: 175 }}>
        Sell what ypu don't need
      </Text>
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
