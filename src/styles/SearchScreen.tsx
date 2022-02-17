import { StyleSheet } from 'react-native';

export let styles = StyleSheet.create({
    showItmCls: {
        flex: 1,
        flexDirection: 'row',
        width: "92%",
        height: 120,
        alignItems: 'center',
        marginVertical: 3,
        elevation: 4,
        shadowColor: "grey",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
    },
    imageView: {
        margin: 10
    },
    txtDtlCls: {
        margin: 4
    },
    searchIptCls: {
        width: "80%",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginLeft: 0
    }
})