import React from 'react';
import { Text } from 'react-native';

import LabelStyles from "./LabelStyles";

const Label = (props) => {
    return (
        <Text style={props.styles && props.styles.textLabel ? props.styles.textLabel : LabelStyles.textLabel} >
            {props.text}
        </Text>
    );
}

export default Label;