import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStyles from './styles.js';
import NewPage from "./src/pages/NewPage";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={AppStyles.container}>
          <Stack.Navigator>
              <Stack.Screen name='NewPage' component={NewPage} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}
