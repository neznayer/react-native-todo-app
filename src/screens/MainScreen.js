import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { THEME } from "../Theme";
export const MainScreen = ({ addTodo, todos, deleteTodo, openTodo }) => {
    const [deviceWidth, setDeviceWidth] = useState(
        Dimensions.get("window").width - THEME.paddingHorizontal * 2
    );
    //when orientation changes , there is no re-render, so width wont change

    // event listener on change of rientation, but with react its better to use inside useEffect

    useEffect(() => {
        const update = () => {
            setDeviceWidth(
                Dimensions.get("window").width - THEME.paddingHorizontal * 2
            );
        };
        Dimensions.addEventListener("change", update);

        return () => {
            Dimensions.removeEventListener("change", update);
        };
    }); // without [] useEffect runs only on initialization

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Todo todo={item} onDelete={deleteTodo} onOpen={openTodo} />
                )}
            />
        </View>
    );
    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image
                    style={styles.image}
                    source={require("../../assets/no-items.png")}
                />
            </View>
        );
    }
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});
