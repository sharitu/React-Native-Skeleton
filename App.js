import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './navigation/tabs';
import HomeScreen from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClosetScreen from "./screens/Closet";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CategoryItems' component={ClosetScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;