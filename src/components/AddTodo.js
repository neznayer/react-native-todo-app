import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Keyboard } from "react-native";
import { THEME } from "../Theme";
import { Ionicons } from "@expo/vector-icons";

export const AddTodo = ({ onSubmit }) => {
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
            Keyboard.dismiss();
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
            {/* <Button title="Add!" onPress={pressHandler} /> */}
            <Ionicons.Button onPress={pressHandler} name="add-circle">
                Add
            </Ionicons.Button>
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
        width: "60%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
    },
});
