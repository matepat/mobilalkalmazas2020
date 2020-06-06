import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
    container: {
        width: "100%",
    },
    text: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
    },
    image:{
        width: 35,
        height: 35,
        position: 'absolute',
        alignSelf: 'center',
        right: 20,
    },
    imageBg: {
        width: null,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
});

export default HeaderStyles;