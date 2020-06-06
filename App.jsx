import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginPage from "./src/pages/Login/LoginPage";
import RegistrationPage from "./src/pages/Registration/RegistrationPage";
import DailyViewPage from "./src/pages/DailyView/DailyViewPage";
import SettingsPage from "./src/pages/Settings/SettingsPage";

const Drawer = createDrawerNavigator();

function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Áttekintés" component={DailyViewPage} />
              <Drawer.Screen name="Cél beállítása" component={LoginPage} />
              <Drawer.Screen name="Mai teljesítmény" component={LoginPage} />
              <Drawer.Screen name="Beállítások" component={SettingsPage} />
              <Drawer.Screen name="Kijelentkezés" component={LoginPage} />
              {/*TODO kivenni a regisztrációt a drawerből és a login page megfelelő gombjára rakni */}
              <Drawer.Screen name="Regisztráció" component={RegistrationPage} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
