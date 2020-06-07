import React, { Component } from 'react';
import {View, TextInput, ScrollView, AsyncStorage} from 'react-native';

import AppStyles from "../../../styles";
import SettingsStyle from "./SettingsStyle";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";
import RadioForm from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import RegistrationStyles from "../Registration/RegistrationStyles";
import {cos} from "react-native-reanimated";

class SettingsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email :'',
            firstName :'',
            lastName :'',
            sex : 0,
            height :'',
            birth :'',
            password : '',
            password2: '',
        }
    }

    componentDidMount = async() => {
        await AsyncStorage.getItem("logged_in_user").then((value) => {
            const user = JSON.parse(value);
            this.setState({birth: user.birth});
            this.setState({email : user.email});
            this.setState({firstName : user.firstName});
            this.setState({lastName : user.lastName});
            this.setState({sex : user.sex});
            this.setState({height : user.height});
            this.setState({birth : user.birth});
        });
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Beállítások'} menu={true} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Új jelszó" />
                        <TextInput
                            placeholder={"***********"}
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                            onChangeText={(password) => this.setState({ password: password })}
                            value={this.state.password}
                        />
                    </Container>
                    <Container>
                        <Label text="Új jelszó ismét" />
                        <TextInput
                            placeholder={"***********"}
                            secureTextEntry={true}
                            style={AppStyles.textInput}
                            onChangeText={(password2) => this.setState({ password2: password2 })}
                            value={this.state.password2}
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
                        <RadioForm style={RegistrationStyles.radio}
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
                            maxDate="2015-01-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(birth) => {this.setState({birth: birth})}}
                            customStyles={{ dateIcon:{display: 'none'} }}
                        />
                    </Container>

                    <Container>
                        <Button
                            label="Mentés"
                            onPress={this.update.bind(this)} />
                    </Container>
                </ScrollView>
            </View>
        );
    }

    update = async () => {
        //TODO valamiért nem megy át az ellenőrzésen, pedig mindegyikben van adat
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
                email : this.state.email,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                sex :  this.state.sex,
                height : this.state.height,
                birth : this.state.birth,
                password : this.state.password
            }

            const existingUsers  = await AsyncStorage.getItem("users");
            let users = JSON.parse(existingUsers);
            if( !users ){
                users = [];
            }

            let filteredUsers = users.filter(user => user.email != this.state.email);
            filteredUsers.push(user);

            await AsyncStorage.setItem("logged_in_user", JSON.stringify(user) )
                .then( ()=>{
                    console.log("Logged in user update was successfully");
                } )
                .catch( ()=>{
                    console.log("There was an error to update logged in user");
                } )

            await AsyncStorage.setItem("users", JSON.stringify(users) )
                .then( ()=>{
                    console.log("User was updated successfully");
                } )
                .catch( ()=>{
                    console.log("There was an error update the user");
                } )
        //}
    }
}

export default SettingsPage;
