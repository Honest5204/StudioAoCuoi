// LogOut.tsx
import React from 'react';
import {View, Button, Alert, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogOut = ({navigation}) => {
  const handleLogOut = async () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          onPress: async () => {
            await AsyncStorage.removeItem('isLoggedIn');
            await AsyncStorage.removeItem('userId');
            navigation.navigate('Đăng nhập');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          width: 300,
          height: 200,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: 'beige',
        }}>
        <Text style={{fontSize: 20, margin: 5, color: 'red'}}>
          Click để đăng xuất tài khoản
        </Text>
        <TouchableOpacity onPress={handleLogOut}>
          <Image
            style={{width: 70, height: 70, marginTop: 20}}
            source={require('../../assets/img/logout.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogOut;
