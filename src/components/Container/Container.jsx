import React from 'react';
import { View } from 'react-native';

import ContainerStyles from '../Container/ContainerStyles';

const Container = (props) => {
    return (
        <View style={ContainerStyles.labelContainer}>
            { props.children }
        </View>
    );
}

export default Container;