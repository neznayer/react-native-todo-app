import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([
        { id: "1", title: "learn react native" },
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
        const todo = todos.find((item) => item.id === id);
        Alert.alert(
            "Delete item",
            `Are you sure that you want delete ${todo.title} ?`,
            [
                {
                    text: "Cancel",

                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        setTodoId(null);
                        setTodos((prev) =>
                            prev.filter((item) => item.id !== id)
                        );
                    },
                },
            ],
            {
                cancelable: false,
            }
        );
    };
    const updateTodo = (id, title) => {
        setTodos((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    item.title = title;
                }
                return item;
            })
        );
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
            <TodoScreen
                goBack={() => setTodoId(null)}
                todo={selectedTodo}
                onDelete={deleteTodo}
                onSave={updateTodo}
            />
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
