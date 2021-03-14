import React from "react";
import { Text, View } from "react-native";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
