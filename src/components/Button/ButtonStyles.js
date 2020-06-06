import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25CD36',
        shadowColor: '#1AE12E',
        shadowOpacity: 0.2,
        shadowOffset: { height: 1, width: 0 },
        shadowRadius: 2,
        height: 65,
        width: '60%',
        alignSelf: 'center',
        marginTop: 60,
    },
    text:{
        fontSize: 18,
        color: '#FFFFFF',
    }
});

export default ButtonStyles;