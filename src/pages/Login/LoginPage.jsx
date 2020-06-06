import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import LoginStyles from "./LoginStyles";


import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';

class LoginPage extends Component {
    render() {
        return (
            <ScrollView style={AppStyles.scroll}>
                <Container>
                    <Label text="E-mail" />
                    <TextInput
                        style={AppStyles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Jleszó" />
                    <TextInput
                        secureTextEntry={true}
                        style={AppStyles.textInput}
                    />
                </Container>

                <View style={AppStyles.footer}>
                    <Container>
                        <Button
                            label="Bejelentkezés"
                            styles={{button: AppStyles.primaryButton, label: AppStyles.buttonWhiteText}}
                            onPress={this.login.bind(this)} />
                    </Container>

                    <Container>
                        <Button
                            label="Regisztráció"
                            styles={{button: AppStyles.primaryButton, label: AppStyles.buttonWhiteText}}
                            onPress={this.registration.bind(this)} />
                    </Container>
                </View>
            </ScrollView>
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
