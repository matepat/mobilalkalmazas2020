import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import LoginStyles from "./LoginStyles";


import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class LoginPage extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Bejelentkezés'} />
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
                        <Button
                            label="Bejelentkezés"
                            onPress={this.login.bind(this)} />
                    </Container>

                    <Container>
                        <Button
                            label="Regisztráció"
                            style={AppStyles.noTopMargin}
                            onPress={this.registration.bind(this)} />
                    </Container>
                </ScrollView>
            </View>
        );
    }

    login(){
        alert('login')
    }

    registration(){
        this.props.navigation.navigate('RegistrationPage');
    }
}

export default LoginPage;
