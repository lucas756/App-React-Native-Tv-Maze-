import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
// import constants from 'expo-constants

export default function SupSrnKomFnc({ children, needScroll = false })
{
    return (
        <SafeAreaView style={StyShtVap.SefVyuCss}>
            <KeyboardAvoidingView
                style={StyShtVap.KeyBodCss}
                behavior="height"
                keyboardVerticalOffset={Platform.select({
                    ios: 78,
                    android: 0
                })} >
                {needScroll ?
                    <ScrollView style={StyShtVap.SolVyuCss}
                        contentContainerStyle={StyShtVap.SrnVyuCss}>
                        {children}
                    </ScrollView>
                    : children
                }
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const StyShtVap = StyleSheet.create({
    SefVyuCss: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        // paddingTop: constants.statusBarHeight,
		// paddingTop:con.statusBarHeight
    },
    SolVyuCss: {
        flex: 1,
        width: '100%'
    },
    SrnVyuCss: {
        flexGrow: 1,
        alignItems: 'center',
    },
    KeyBodCss: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },
});