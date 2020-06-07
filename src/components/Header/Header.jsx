import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import HeaderStyles from './HeaderStyles';

const Header = ({ label, onPress, drawer }) => (
    <View style={[HeaderStyles.container]}>
        <ImageBackground source={require("../../../assets/img/header.png")} style={HeaderStyles.imageBg}>
            <Text style={HeaderStyles.text}>{label}</Text>
            {(drawer == true) &&
                <TouchableOpacity
                    style={HeaderStyles.iconTouch}
                    onPress={onPress}
                    disabled={false}
                >
                    <Image source={require("../../../assets/img/hamburger.png")} style={HeaderStyles.image} />
                </TouchableOpacity>}
        </ImageBackground>
    </View>
);

export default Header;