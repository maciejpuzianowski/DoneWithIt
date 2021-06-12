import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Maciej"
          subTitle="email@email.com"
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparatorComponent}
        />
      </View>
      <ListItem
        style={styles.container}
        IconComponent={<Icon name="logout" backgroundColor={colors.yellow} />}
        title="Log Out"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
