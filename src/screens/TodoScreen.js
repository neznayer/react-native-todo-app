import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../Theme";

export const TodoScreen = ({ goBack, todo, onDelete, onSave }) => {
    const [modal, setModal] = useState(false); //visibility of modal window

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    };
    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Edit" onPress={() => setModal(true)} />
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
        marginTop: 20,
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
