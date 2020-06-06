import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';


import AppStyles from "../../../styles";
import RegistrationStyles from "./RegistrationStyles";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class RegistrationPage extends Component {

    radio_props = [
        {label: 'Férfi', value: 0},
        {label: 'Nő', value: 1}
    ];

    constructor(props) {
        super(props);
        this.state = {
            gender: 0,
            date: "2000-01-01",
        }
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Kérem töltse ki adatait'} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="E-mail" />
                        <TextInput
                            placeholder={"teszt@gmail.com"}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Jelszó" />
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
                        <RadioForm style={RegistrationStyles.radio} formHorizontal={true} radio_props={this.radio_props} initial={0} onPress={(value) => this.state.gender=value}/>
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
                            style={RegistrationStyles.datePicker}
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
                            label="Regisztráció"
                            onPress={this.registration.bind(this)} />
                    </Container>
                </ScrollView>
            </View>
        );
    }

    registration(){
        alert('reg');
    }
}

export default RegistrationPage;