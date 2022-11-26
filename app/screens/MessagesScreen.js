import React from "react";
import { FlatList } from "react-native";

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
  return <FlatList data={data} keyExtractor={(message) => message.id} />;
}

export default MessagesScreen;
