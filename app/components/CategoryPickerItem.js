import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        ></Icon>
        <AppText style={styles.text}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
