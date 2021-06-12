import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { THEME } from "../Theme";

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
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
                        onPress={() => console.log("toRemove")}
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
});
