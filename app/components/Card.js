import React from "react";
import { Image, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Card;
