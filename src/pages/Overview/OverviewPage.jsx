import React, { Component } from 'react';
import {View, TextInput, ScrollView, AsyncStorage} from 'react-native';

import AppStyles from "../../../styles";


import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class OverviewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            goals: [],
            userEmail: '',
            minDate: '',            //szűrés alsó és felső határa
            maxDate: new Date(),
        }
    }

    componentDidMount = async() => {
        await AsyncStorage.getItem("logged_in_user").then((value) => {
            const user = JSON.parse(value);
            this.setState({userEmail : user.email});
        });

        await AsyncStorage.getItem("products").then((value) => {
            const allProducts = JSON.parse(value);
            this.setState({products : allProducts.filter(product => product.userEmail == this.state.userEmail)}); {/*TODO Ha meg lett változtatva, hogy időpontot is tároljon, szűrjünk jól a napra is*/}
        });

        await AsyncStorage.getItem("goals").then((value) => {
            const allGoals = JSON.parse(value);
            this.setState({goals : allGoals.filter(goal => goal.userEmail == this.state.userEmail)});
        });

        console.log("Filtered products");
        console.log(this.state.products);
        console.log("Filtered goals");
        console.log(this.state.goals);
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Áttekintés'} onPress={() => this.props.navigation.openDrawer()} drawer={true}/>
                {console.log(this.props.navigation)}
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Feltöltés alatt" />
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

export default OverviewPage;
