import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer"
import React from "react";
import Tela1 from "./src/screens/Tela1";
import Tela2 from "./src/screens/Tela2";
import Tela3 from "./src/screens/Tela3";
import Splash from "./src/Splash";

export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name='Splash' component={Splash} options={{headerShown:false,}} />
      <Stack.Screen name='Tela1' component={Tela1} />
      <Stack.Screen name='Tela2' component={Tela2} />
      <Stack.Screen name='Tela3' component={Tela3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

