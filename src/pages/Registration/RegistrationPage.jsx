import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';

import RegistrationStyles from "./RegistrationStyles";

import Container from '../../components/Container';
import Button from '../../components/Button';
import Label from '../../components/Label';

class RegistrationPage extends Component {
    render() {
        return (
            <ScrollView style={RegistrationStyles.scroll}>
                <Container>
                    <Label text="E-mail" />
                    <TextInput
                        style={RegistrationStyles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={RegistrationStyles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Vezetéknév" />
                    <TextInput
                        style={RegistrationStyles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Keresztnév" />
                    <TextInput
                        style={RegistrationStyles.textInput}
                    />
                </Container>

                {/* TODO Kell date picker a születési dátumhoz,
                 valami check box szerű a nem kiválasztáshoz,
                 magassághoz szám */}

                <View style={RegistrationStyles.footer}>
                    <Container>
                        <Button
                            label="Regisztráció"
                            styles={{button: RegistrationStyles.primaryButton, label: RegistrationStyles.buttonWhiteText}}
                            onPress={this.registration.bind(this)} />
                    </Container>

                    <Container>
                        <Button
                            label="Vissza"
                            styles={{button: RegistrationStyles.primaryButton, label: RegistrationStyles.buttonWhiteText}}
                            onPress={this.back.bind(this)} />
                    </Container>
                </View>
            </ScrollView>
        );
    }

    back(){
        alert('back');
    }

    registration(){
        alert('reg');
    }
}

export default RegistrationPage;