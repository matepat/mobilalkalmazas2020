import React, { Component } from 'react';
import {View, ScrollView, AsyncStorage} from 'react-native';

import AppStyles from "../../../styles";
import DailyViewStyle from "./DailyViewStyle";

import Container from '../../components/Container/Container';
import Label from '../../components/Label/Label';
import Header from "../../components/Header/Header";

class DailyViewPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            userEmail: '',
        }
    }

    componentDidMount = async() => {
        await AsyncStorage.getItem("logged_in_user").then((value) => {
            const user = JSON.parse(value);
            this.setState({userEmail : user.email});
        });

        await AsyncStorage.getItem("products").then((value) => {
            const allProducts = JSON.parse(value);
            this.setState({products : allProducts.filter(product => product.userEmail == this.state.userEmail)}); {/*TODO Ha meg lett változtatva, hogy időpontot is tároljon, szűrjünk jól a mai napra is*/}
        });
        console.log("Filtered products");
        console.log(this.state.products);
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Mai teljesítmény'} onPress={() => this.props.navigation.openDrawer()} drawer={true}/>
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Feltöltés alatt" />
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

export default DailyViewPage;
