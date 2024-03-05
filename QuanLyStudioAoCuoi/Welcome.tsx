import { StyleSheet, Text, View } from "react-native";
import React, {useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Welcome(props) {
    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Đăng nhập');
        },3000);
    })
    return (
       <View>
           <Text>Welcome</Text>
       </View>
    );
}

export default Welcome;
