import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
} from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

import RegistrationPage from "./RegistrationPage";

export default class LoginPage extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <Container>
                    <Label text="E-mail" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Jleszó" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>

                <View style={styles.footer}>
                    <Container>
                        <Button
                            label="Bejelentkezés"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={this.login.bind(this)} />
                    </Container>

                    <Container>
                        <Button
                            label="Regisztráció"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
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

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonBlackText: {
        fontSize: 20,
        color: '#595856'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
        marginTop: 100
    }
});