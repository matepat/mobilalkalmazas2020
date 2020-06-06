import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppStyles from './styles.js';
import LoginPage from "./src/pages/Login/LoginPage";
import RegistrationPage from "./src/pages/Registration/RegistrationPage";

const Drawer = createDrawerNavigator();

function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Áttekintés" component={LoginPage} />
              <Drawer.Screen name="Cél beállítása" component={LoginPage} />
              <Drawer.Screen name="Mai teljesítmény" component={LoginPage} />
              <Drawer.Screen name="Beállítások" component={LoginPage} />
              <Drawer.Screen name="Kijelentkezés" component={LoginPage} />
              {/*TODO kivenni a regisztrációt a drawerből és a login page megfelelő gombjára rakni */}
              <Drawer.Screen name="Regisztráció" component={RegistrationPage} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
