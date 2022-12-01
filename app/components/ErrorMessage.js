import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error }) {
  if (!error) return null;

  return <AppText>{error}</AppText>;
}

const styles = StyleSheet.create({});

export default ErrorMessage;
