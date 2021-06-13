import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { THEME } from "../Theme";
import { AppTextBold } from "./ui/AppTextBold";
export const Navbar = ({ title }) => {
    return (
        <View
            style={{
                ...styles.navbar,
                ...Platform.select({
                    ios: styles.navbarIOS,
                    android: styles.navbarAndroid,
                }),
            }}
        >
            <AppTextBold style={styles.text}> {title}</AppTextBold>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: THEME.MAIN_COLOR,
        paddingBottom: 10,
    },
    text: {
        color: Platform.OS === "ios" ? "black" : "white",
        fontSize: 20,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIOS: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
});
