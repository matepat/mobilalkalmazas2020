import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column',
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF',
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856',
    },
    primaryButton: {
        backgroundColor: '#34A853',
    },
    footer: {
        marginTop: 100,
    },
});

export default AppStyles;