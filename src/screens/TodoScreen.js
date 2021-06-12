import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../Theme";

export const TodoScreen = ({ goBack, todo, onDelete }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Edit" />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title="Back"
                        onPress={goBack}
                        color={THEME.GRAY_COLOR}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        onPress={() => onDelete(todo.id)}
                        color={THEME.DANGER_COLOR}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "40%",
    },
    title: {
        fontSize: 26,
    },
    card: {
        padding: 20,
    },
});
