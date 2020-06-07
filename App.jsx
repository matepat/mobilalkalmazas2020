import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginPage from "./src/pages/Login/LoginPage";
import RegistrationPage from "./src/pages/Registration/RegistrationPage";
import DailyViewPage from "./src/pages/DailyView/DailyViewPage";
import SettingsPage from "./src/pages/Settings/SettingsPage";
import SetGoalPage from "./src/pages/SetGoal/SetGoalPage";
import NewProductPage from "./src/pages/NewProduct/NewProductPage";
import OverviewPage from "./src/pages/Overview/OverviewPage";

const Drawer = createDrawerNavigator();

function App() {
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Áttekintés" component={OverviewPage} />
              <Drawer.Screen name="Cél beállítása" component={SetGoalPage} />
              <Drawer.Screen name="Mai teljesítmény" component={DailyViewPage} />
              <Drawer.Screen name="Beállítások" component={SettingsPage} />
              <Drawer.Screen name="Kijelentkezés" component={LoginPage} />
              {/*TODO kivenni a regisztrációt és az új terméket a drawerből és a login page megfelelő gombjára rakni */}
              <Drawer.Screen name="Regisztráció" component={RegistrationPage} />
              <Drawer.Screen name="Új termék" component={NewProductPage} />
          </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;
