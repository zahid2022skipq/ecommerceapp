import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="John Doe"
          subTitle="johndoe@gmail.com"
          image={require("../assets/mal.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;
