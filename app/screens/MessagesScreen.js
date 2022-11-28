import React from "react";
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";

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
    <Screen>
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
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
