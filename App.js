import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Jacket"
        subTitle="$1919"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}
