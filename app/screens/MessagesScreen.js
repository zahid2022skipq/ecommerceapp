import React from "react";
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import ListItem from "../components/ListItem";

const data = [
  {
    id: "1",
    title: "T1",
    description: "D1",
    image: require("../assets/mal.jpg"),
  },
  {
    id: "2",
    title: "T2",
    description: "D2",
    image: require("../assets/mal.jpg"),
  },
  {
    id: "3",
    title: "T3",
    description: "D3",
    image: require("../assets/mal.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default MessagesScreen;
