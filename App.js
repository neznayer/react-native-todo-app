import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState("2");
    const [todos, setTodos] = useState([
        { id: "1", title: "learn react native" },
        { id: "2", title: "make an app" },
    ]);
    const addTodo = (title) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                title: title,
            },
        ]);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
            openTodo={setTodoId}
        />
    );
    if (todoId) {
        const selectedTodo = todos.find((item) => item.id === todoId);
        content = (
            <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
        );
    }
    return (
        <View>
            <Navbar title="Todo App" />
            <View style={styles.container}>{content}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
});
