import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
        shadowColor: '#2980b9',
        shadowOpacity: 0.2,
        shadowOffset: { height: 1, width: 0 },
        shadowRadius: 2,
    },
    text:{
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    }
});

export default ButtonStyles;