import React, { Component } from 'react';
import { View, TextInput, ScrollView, AsyncStorage } from 'react-native';
import AppStyles from "../../../styles";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import RadioForm from "react-native-simple-radio-button";

class NewProductPage extends Component {

    product_types = [
        {label: 'Étel', value: 0},
        {label: 'Ital', value: 1},
    ];

    intake = [
        {label: 'Reggeli', value: 0},
        {label: 'Ebéd', value: 1},
        {label: 'Vacsora', value: 2},
    ];

    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            amount: '',
            amountType: '',     // kg/liter/doboz...
            productType: 0,    // étel/ital
            dateOfEating: '',
            calorie: '',
            fat: '',
            protein: '',
            carb: '',
            userEmail: '',
        }
    }

    componentDidMount = async() => {
        await AsyncStorage.getItem("logged_in_user").then((value) => {
            const user = JSON.parse(value);
            this.setState({userEmail : user.email});
        });
        console.log("called boi");
    }


    render() {
        return (
            <View style={AppStyles.container}>
                <Header label={'Kérem töltse ki adatait'} onPress={() => this.props.navigation.openDrawer()} drawer={true}/>
                <ScrollView style={AppStyles.scroll}>
                    <Container>
                        <Label text="Termék neve" />
                        <TextInput
                            placeholder={"Kakashere pörkölt"}
                            style={AppStyles.textInput}
                            onChangeText={(productName) => this.setState({ productName: productName })}
                            value={this.state.productName}
                        />
                    </Container>
                    <Container>
                        <Label text="Mennyiség" />
                        <TextInput
                            placeholder={"2"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(amount) => this.setState({ amount: amount })}
                            value={this.state.amount}
                        />
                    </Container>
                    <Container>
                        <Label text="Mennyiség típus" />
                        <TextInput
                            placeholder={"Tányér"}
                            style={AppStyles.textInput}
                            onChangeText={(amountType) => this.setState({ amountType: amountType })}
                            value={this.state.amountType}
                        />
                    </Container>
                    <Container>
                        <Label text="Termék típus" />
                        <RadioForm style={AppStyles.radio}
                                   formHorizontal={true}
                                   radio_props={this.product_types}
                                   initial={0} onPress={(value) => this.state.productType = value}/>
                    </Container>

                    <Container>
                        <Label text="Étkezés ideje" />
                        <RadioForm style={AppStyles.radio}
                                   formHorizontal={true}
                                   radio_props={this.intake}
                                   initial={0} onPress={(value) => this.state.dateOfEating = value}/>
                    </Container>

                    {/*TODO Órát is kéne menteni -> DailyViewPageben és OverviewPageben lévő TODO*/}

                    <Container>
                        <Label text="Kalória" />
                        <TextInput
                            placeholder={"500"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(calorie) => this.setState({ calorie: calorie })}
                            value={this.state.calorie}
                        />
                    </Container>
                    <Container>
                        <Label text="Zsír" />
                        <TextInput
                            placeholder={"20"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(fat) => this.setState({ fat: fat })}
                            value={this.state.fat}
                        />
                    </Container>
                    <Container>
                        <Label text="Fehérje" />
                        <TextInput
                            placeholder={"2"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(protein) => this.setState({ protein: protein })}
                            value={this.state.protein}
                        />
                    </Container>
                    <Container>
                        <Label text="Szénhidrát" />
                        <TextInput
                            placeholder={"2"}
                            style={AppStyles.textInput}
                            keyboardType = 'numeric'
                            onChangeText={(carb) => this.setState({ carb: carb })}
                            value={this.state.carb}
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

    save = async() =>{
        if(
            this.state.productName &&
            this.state.amount &&
            this.state.amountType &&
            this.state.productType &&
            this.state.dateOfEating != null
        ) {

            const product = {
                productName:  this.state.productName,
                amount:  this.state.amount,
                amountType:  this.state.amountType,
                productType:  this.state.productType,
                dateOfEating:  this.state.dateOfEating,
                calorie:  this.state.calorie,
                fat:  this.state.fat,
                protein:  this.state.protein,
                carb:  this.state.carb,
                userEmail:  this.state.userEmail,
                saveDate: new Date().getTime()
            }

            const existingProducts  = await AsyncStorage.getItem("products");
            let products = JSON.parse(existingProducts);
            if( !products ){
                products = [];
            }
            products.push(product);

            await AsyncStorage.setItem("products", JSON.stringify(products) )
                .then( ()=>{
                    console.log("Products was saved successfully");
                } )
                .catch( ()=>{
                    console.log("There was an error saving products");
                } )
        }
    }
}

export default NewProductPage;