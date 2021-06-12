import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.js";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={35}
      ></MaterialCommunityIcons>
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={35}
      ></MaterialCommunityIcons>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    color: colors.white,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    color: colors.white,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});

export default ViewImageScreen;
