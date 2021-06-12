import React from "react";
import { View, Image } from "react-native";

function ListingDetailsScreen({ image, title, subTitle }) {
  return (
    <View>
      <Image></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View></View>
    </View>
  );
}

export default ListingDetailsScreen;
