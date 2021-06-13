import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, StyleSheet, TextInput, View, Alert } from "react-native";
import { THEME } from "../Theme";
import { AppButton } from "./ui/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert(
                "Error",
                `Minimum length on the title is 3 symbols, and now it set to ${
                    title.trim().length
                }`
            );
        } else {
            onSave(title);
        }
    };
    return (
        <Modal visible={visible} animationType={"slide"} transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="Enter todo"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
                        Cancel
                    </AppButton>

                    <AppButton onPress={saveHandler}> Save</AppButton>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    wrap: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%",
    },
    buttons: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
