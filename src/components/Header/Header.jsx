import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import HeaderStyles from './HeaderStyles';

const Header = ({ label, menu }) => (
    <View style={[HeaderStyles.container]}>
        <ImageBackground source={require("../../../assets/img/header.png")} style={HeaderStyles.imageBg}>
            <Text style={HeaderStyles.text}>{label}</Text>
            {menu && <Image source={require("../../../assets/img/hamburger.png")} style={HeaderStyles.image} ></Image>}
        </ImageBackground>
    </View>
);

export default Header;