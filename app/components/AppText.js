import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
    }),
  },
});

export default AppText;
