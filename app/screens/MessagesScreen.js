import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

import Screen from "../components/Screen";

const initialData = [
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
  const [data, setData] = useState(initialData);

  const handleDelete = (item) => {
    const newData = data.filter((d) => item.id !== d.id);
    setData(newData);
  };
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
            onPress={() => console.log(item.description)}
            renderRightActions={() => (
              <ListItemDeleteAction handleDelete={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
