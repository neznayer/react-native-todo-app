import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from "react-native";
import { THEME } from "../../Theme";
import { AppTextBold } from "./AppTextBold";
export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
    const Wrapper =
        Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper activeOpacity={0.7} onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
});
