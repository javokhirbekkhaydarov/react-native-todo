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

export default function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState("");
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
const removeTodo = (index) => {
  const updatedTodos = [...todos];
  updatedTodos.splice(index, 1);
  setTodos(updatedTodos);
};
  const updateTodo = (index, updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodo;
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello react native </Text>
      <StatusBar style="auto" />
      <View   style={styles.todoParent}>
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


      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Enter Todo"
      />
      <Button onPress={addTodo} title="Add Todo" />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        style={styles.todoParent}
        renderItem={({ item, index }) => (
          <View style={styles.todoItemContainer}>
            <Text style={styles.todoItem}>
              {index + 1}. {item}
            </Text>
            <View style={styles.todoButtonsContainer}>
             <Button onPress={() => removeTodo(index)} title="🗑️" />
              {/* <Button onPress={() => updateTodo(index, editedTodo)} title="🖋️" /> */}
            </View>
          </View>
        )}
      />
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
