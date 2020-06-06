import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ButtonStyles from './ButtonStyles';

const Button = ({ label, onPress, style}) => (
    <TouchableOpacity
        style={[ButtonStyles.container, style]}
        onPress={onPress}
        disabled={false}
    >
        <Text style={ButtonStyles.text}>{label}</Text>
    </TouchableOpacity>
);

export default Button;