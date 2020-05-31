import React from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';

import Button from '../components/Button';

import NewPageStyles from './NewPage.styles';

const TestPage = ({ navigation }) => (
    <KeyboardAvoidingView
        behavior={ Platform.OS == 'ios' ? 'padding' : 'height' }
        style={ NewPageStyles.container }
    >
        <View style={ NewPageStyles.buttonGroup }>
            <Button style={ NewPageStyles.btn } label='Első gomb' onPress={ () => alert('Első gomb') } />
        </View>
    </KeyboardAvoidingView>
);
export default TestPage;