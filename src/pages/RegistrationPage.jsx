import React, { Component, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

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

export default class RegistrationPage extends Component {


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
                    <Label text="Password" />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Vezetéknév" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>
                <Container>
                    <Label text="Keresztnév" />
                    <TextInput
                        style={styles.textInput}
                    />
                </Container>

                {/* TODO Kell date picker a születési dátumhoz,
                 valami check box szerű a nem kiválasztáshoz,
                 magassághoz szám */}

                <View style={styles.footer}>
                    <Container>
                        <Button
                            label="Regisztráció"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={this.registration.bind(this)} />
                    </Container>

                    <Container>
                        <Button
                            label="Vissza"
                            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                            onPress={this.back.bind(this)} />
                    </Container>
                </View>
            </ScrollView>
        );
    }

    back(){
        alert('back')
    }

    registration(){
        alert('reg')
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