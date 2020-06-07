import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView,AsyncStorage  } from 'react-native';
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
            birth: "2000-01-01",
            email :'',
            firstName :'',
            lastName :'',
            sex : 0,
            height :'',
            password : ''
        }
    }

    today = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Regisztráció'} drawer={false}/>
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="E-mail" />
                        <TextInput
                            placeholder={"teszt@gmail.com"}
                            style={AppStyles.textInput}
                            onChangeText={(email) => this.setState({ email: email })}
                            value={this.state.email}
                        />
                    </Container>
                    <Container>
                        <Label text="Jelszó" />
                        <TextInput
                            placeholder={"***********"}
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                            onChangeText={(password) => this.setState({ password: password })}
                            value={this.state.password}
                        />
                    </Container>
                    <Container>
                        <Label text="Vezetéknév" />
                        <TextInput
                            placeholder={"Kiss"}
                            style={AppStyles.textInput}
                            onChangeText={(lastName) => this.setState({ lastName: lastName })}
                            value={this.state.lastName}
                        />
                    </Container>
                    <Container>
                        <Label text="Keresztnév" />
                        <TextInput
                            placeholder={"Béla"}
                            style={AppStyles.textInput}
                            onChangeText={(firstName) => this.setState({ firstName: firstName })}
                            value={this.state.firstName}
                        />
                    </Container>

                    <Container>
                        <Label text="Nem" />
                        <RadioForm style={AppStyles.radio}
                                   formHorizontal={true}
                                   radio_props={this.radio_props}
                                   initial={0} onPress={(value) => this.state.sex = value}/>
                    </Container>

                    <Container>
                        <Label text="Magasság(cm)" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(height) => this.setState({ height: height })}
                            value={this.state.height}
                        />
                    </Container>

                    <Container>
                        <Label text="Születési dátum"/>
                        <DatePicker
                            style={AppStyles.datePicker}
                            date={this.state.birth}
                            mode="date"
                            placeholder={this.state.birth}
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate={this.today}
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(birth) => {this.setState({birth: birth})}}
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

    registration = async () => {
        /*if(
            this.state.email &&
            this.state.password &&
            this.state.lastName &&
            this.state.firstName &&
            this.state.sex &&
            this.state.birth &&
            this.state.height != null
        ) {*/
            const user = {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                sex: this.state.sex,
                height: this.state.height,
                birth: this.state.birth,
                password: this.state.password
            }

            const existingUsers = await AsyncStorage.getItem("users");
            let users = JSON.parse(existingUsers);
            if (!users) {
                users = [];
            }

            if (users.filter(user => user.email == this.state.email) == null) {
                users.push(user);
                await AsyncStorage.setItem("users", JSON.stringify(users))
                    .then(() => {
                        console.log("User was saved successfully");
                        alert('Sikeres regisztráció');
                        this.props.navigation.navigate('Bejelentkezés');
                    })
                    .catch(() => {
                        console.log("There was an error saving the user");
                    })
            } else {
                console.log("There is a registered user with this email");
                alert('Van már felhasználó ezzel az e-mail címmel vagy hiányzó adatok');
            }
       // }
    }
}

export default RegistrationPage;