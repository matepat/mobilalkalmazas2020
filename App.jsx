import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStyles from './styles.js';
import NewPage from "./src/pages/NewPage";
import TestPage from "./src/pages/TestPage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer style={AppStyles.container}>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Áttekintés" component={NewPage} />
              <Drawer.Screen name="Cél beállítása" component={TestPage} />
              <Drawer.Screen name="Mai teljesítmény" component={NewPage} />
              <Drawer.Screen name="Beállítások" component={NewPage} />
              <Drawer.Screen name="Kijelentkezés" component={NewPage} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}
