import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { THEME } from "../Theme";
export const AddTodo = ({ onSubmit }) => {
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
        } else {
            Alert.alert("Input cannot be empty");
        }
    };
    const [value, setValue] = useState("");

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder={"Enter your Todo"}
                autoCorrect={false}
                autoCapitalize="none"
            />
            <Button title="Add!" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
});
