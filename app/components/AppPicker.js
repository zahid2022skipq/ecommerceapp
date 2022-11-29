import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import AppText from "./AppText";

function AppPicker({ icon, placeholder, ...otherprops }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.mediumGray}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible}></Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginRight: 20,
  },
  inputText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
