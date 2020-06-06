import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import SetGoalStyle from "./SetGoalStyle";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";
import DatePicker from "react-native-datepicker";

class SetGoalPage extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Mai teljesítmény'} menu={true} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Jelenlegi súly" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                        />
                    </Container>

                    <Container>
                        <Label text="Mérési dátum"/>
                        <DatePicker
                            style={AppStyles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder={this.state.date}
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2015-01-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(date) => {this.setState({date: date})}}
                            customStyles={{ dateIcon:{display: 'none'} }}
                        />
                    </Container>

                    <Container>
                        <Label text="Cél súly" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                        />
                    </Container>

                    <Container>
                        <Label text="Cél dátum"/>
                        <DatePicker
                            style={AppStyles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder={this.state.date}
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2015-01-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(date) => {this.setState({date: date})}}
                            customStyles={{ dateIcon:{display: 'none'} }}
                        />
                    </Container>

                    <Container>
                        <Button
                            label="Mentés"
                            onPress={this.registration.bind(this)} />
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

export default SetGoalPage;
