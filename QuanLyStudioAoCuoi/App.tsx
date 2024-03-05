import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from "./Welcome.tsx";
import Login from "./Login.tsx";
import SignUp from "./SignUp.tsx";


function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "Đăng nhập">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
                <Stack.Screen name="Đăng nhập" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Đăng ký" component={SignUp} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
