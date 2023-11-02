import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import DirectionLayout from "./layouts/DirectionLayout";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
export default function App() {



  return (
    <View style={styles.container}>

  <Counter />

<TodoApp />
      <DirectionLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

});
