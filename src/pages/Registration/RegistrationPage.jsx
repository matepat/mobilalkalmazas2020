import React, { Component } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';

import AppStyles from "../../../styles";
import RegistrationStyles from "./RegistrationStyles";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class RegistrationPage extends Component {
    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Regisztráció'} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="E-mail" />
                        <TextInput
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Password" />
                        <TextInput
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Vezetéknév" />
                        <TextInput
                            style={AppStyles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Keresztnév" />
                        <TextInput
                            style={AppStyles.textInput}
                        />
                    </Container>

                    {/* TODO Kell date picker a születési dátumhoz,
                     valami check box szerű a nem kiválasztáshoz,
                     magassághoz szám */}

                    <View style={AppStyles.footer}>
                        <Container>
                            <Button
                                label="Regisztráció"
                                styles={{button: AppStyles.primaryButton, label: AppStyles.buttonWhiteText}}
                                onPress={this.registration.bind(this)} />
                        </Container>

                        <Container>
                            <Button
                                label="Vissza"
                                styles={{button: AppStyles.primaryButton, label: AppStyles.buttonWhiteText}}
                                onPress={this.back.bind(this)} />
                        </Container>
                    </View>
                </ScrollView>
            </View>
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