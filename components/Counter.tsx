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
export default function App() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };




  return (
    <View style={styles.container}>

      <Text style={styles.text}>hello react native </Text>
      <StatusBar style="auto" />
      <View style={styles.todoParent}>
        <View style={styles.todoItemContainer}>
          <Button onPress={decrementCount} title="dec" />
          <Text style={styles.text}>{count}</Text>
          <Button
            onPress={() => {
              setCount(count + 1);
            }}
            title="inc"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",   width: "80%",
  },
  text: {
    color: "#ffffff",
    fontSize: 30,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    color: "#ffffff",
    fontSize: 18,

    paddingHorizontal: 10,
  },
  todoParent: {
    alignContent: "space-between",
    width: "80%",
  },
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  todoItem: {
    fontSize: 16,
  },
  todoButtonsContainer: {
    flexDirection: "row",
  },
  todoItem: {
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 5,
    color: "#ffffff",
  },
});
