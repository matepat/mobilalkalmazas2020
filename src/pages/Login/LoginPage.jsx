import React, { Component } from 'react';
import { View, TextInput, ScrollView,AsyncStorage } from 'react-native';

import AppStyles from "../../../styles";
import LoginStyles from "./LoginStyles";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email :'',
            password : ''
        };
    }

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

    async login(){
        const existingUsers  = await AsyncStorage.getItem("users");
        const users = JSON.parse(existingUsers);
        const user = users.filter(user => user.email == this.state.email && user.password == this.state.password)[0];

        if(user != null){
            await AsyncStorage.setItem("logged_in_user", JSON.stringify(user) )
                .then( ()=>{
                    console.log("Login was successfully");
                    alert('Sikeres bejelentkezés');
                    this.props.navigation.navigate('Áttekintés');
                } )
                .catch( ()=>{
                    console.log("There was an error to login");
                } )
        } else {
            console.log("Invalid email/password");
            alert('Sikertelen bejelentkezés');
        }
    }

    registration(){
        this.props.navigation.navigate('Regisztráció');
    }
}

export default LoginPage;