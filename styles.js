import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const AppStyles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        maxHeight: '100%',
        minHeight: '100%',
    },
    scroll: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginHorizontal: 30,
        flexDirection: 'column',
        marginBottom: 40,
    },
    textInput: {
        borderColor: '#000000',
        borderWidth: 1,
        fontSize: 14,
        backgroundColor: '#FFF',
        textAlign: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#25CD36',
    },
    noTopMargin:{
        marginTop: 10,
    },
    radio:{
        flex: 1,
        justifyContent: 'space-around',
    },
    datePicker:{
        width: '100%',
    }
});

export default AppStyles;