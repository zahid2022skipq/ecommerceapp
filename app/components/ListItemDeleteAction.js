import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
function ListItemDeleteAction(props) {
  return (
    <View>
      <MaterialCommunityIcons
        name="trash-can"
        size={30}
        color={colors.primary}
      />
    </View>
  );
}

export default ListItemDeleteAction;
