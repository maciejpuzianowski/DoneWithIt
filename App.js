import React, { useState } from "react";
import { View } from "react-native";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState();

  return <LoginScreen />;
}
