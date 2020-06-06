import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import SettingsStyle from "./SettingsStyle";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";
import RadioForm from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";

class SettingsPage extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Mai teljesítmény'} menu={true} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Új jelszó" />
                        <TextInput
                            placeholder={"***********"}
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Új jelszó ismét" />
                        <TextInput
                            placeholder={"***********"}
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Vezetéknév" />
                        <TextInput
                            placeholder={"Kiss"}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Keresztnév" />
                        <TextInput
                            placeholder={"Béla"}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Nem" />
                        <RadioForm style={AppStyles.radio} formHorizontal={true} radio_props={this.radio_props} initial={0} onPress={(value) => this.state.gender=value}/>
                    </Container>

                    <Container>
                        <Label text="Magasság(cm)" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                        />
                    </Container>

                    <Container>
                        <Label text="Születési dátum"/>
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

export default SettingsPage;
