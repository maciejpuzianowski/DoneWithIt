import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  useEffect(() => {
    loadLisitngs();
  }, []);
  const {
    data: listings,
    error,
    loading,
    request: loadLisitngs,
  } = useApi(listingsApi.getListings);

  return (
    <Screen style={styles.container}>
      {error && (
        <>
          <AppText>Couldn`t retrieve the listings.</AppText>
          <AppButton
            title="Retry"
            color={colors.secondary}
            onPress={loadLisitngs}
          />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
  },
});
export default ListingsScreen;
