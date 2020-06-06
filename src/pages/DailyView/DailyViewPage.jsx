import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import DailyViewStyle from "./DailyViewStyle";


import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class DailyViewPage extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Mai teljesítmény'} menu={true} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Feltöltés alatt" />
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

export default DailyViewPage;
