import React, { Component } from 'react';
import {View, TextInput, ScrollView, AsyncStorage} from 'react-native';

import AppStyles from "../../../styles";
import SetGoalStyle from "./SetGoalStyle";

import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";
import DatePicker from "react-native-datepicker";

class SetGoalPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actualWeight: '',
            actualDate: new Date(),
            goalWeight: '',
            goalDate: '',
            userEmail: '',
        }
    }

    componentDidMount = async() => {
        await AsyncStorage.getItem("logged_in_user").then((value) => {
            const user = JSON.parse(value);
            this.setState({userEmail : user.email});
        });
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Mai teljesítmény'} menu={true} />
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Jelenlegi súly" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(actualWeight) => this.setState({ actualWeight: actualWeight })}
                            value={this.state.actualWeight}
                        />
                    </Container>

                    <Container>
                        <Label text="Mérési dátum"/>
                        <DatePicker
                            style={AppStyles.datePicker}
                            date={this.state.actualDate}
                            mode="date"
                            placeholder={this.state.actualDate}
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2015-01-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(actualDate) => {this.setState({actualDate: actualDate})}}
                            customStyles={{ dateIcon:{display: 'none'} }}
                        />
                    </Container>

                    <Container>
                        <Label text="Cél súly" />
                        <TextInput
                            placeholder={"184"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(goalWeight) => this.setState({ goalWeight: goalWeight })}
                            value={this.state.goalWeight}
                        />
                    </Container>

                    <Container>
                        <Label text="Cél dátum"/>
                        <DatePicker
                            style={AppStyles.datePicker}
                            date={this.state.goalDate}
                            mode="date"
                            placeholder={this.state.goalDate}
                            format="YYYY-MM-DD"
                            minDate="1900-01-01"
                            maxDate="2077-01-01"
                            confirmBtnText="Ok"
                            cancelBtnText="Mégse"
                            onDateChange={(goalDate) => {this.setState({goalDate: goalDate})}}
                            customStyles={{ dateIcon:{display: 'none'} }}
                        />
                    </Container>

                    <Container>
                        <Button
                            label="Mentés"
                            onPress={this.save.bind(this)} />
                    </Container>
                </ScrollView>
            </View>
        );
    }

    save = async() => {
        const goal = {
            actualWeight: this.state.actualWeight,
            actualDate: this.state.actualDate,
            goalWeight: this.state.goalWeight,
            goalDate: this.state.goalDate,
            userEmail: this.state.userEmail,
            saveDate: new Date().getTime()
        }

        const existingGoals  = await AsyncStorage.getItem("goals");
        let goals = JSON.parse(existingGoals);
        if( !goals ){
            goals = [];
        }
        goals.push(goal);

        await AsyncStorage.setItem("goals", JSON.stringify(goals) )
            .then( ()=>{
                console.log("Goals was saved successfully");
            } )
            .catch( ()=>{
                console.log("There was an error saving goals");
            } )
    }
}

export default SetGoalPage;
