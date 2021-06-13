import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import { EditModal } from "../components/EditModal";
import { AppButton } from "../components/ui/AppButton";
import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
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
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name="edit" size={20} />
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={goBack} color={THEME.GRAY_COLOR}>
                        <AntDesign name="back" size={20} color="#fff" />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        onPress={() => onDelete(todo.id)}
                        color={THEME.DANGER_COLOR}
                    >
                        <FontAwesome name="trash" size={20} color="#fff" />
                    </AppButton>
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
