import React, {useEffect, useState} from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = () => {
  const [oldPass, setoldPass] = useState('');
  const [newPass, setnewPass] = useState('');
  const [rnewPass, setrnewPass] = useState('');

  const updatePassword = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const response = await axios.put(
        `http://192.168.1.152:3000/updatePassword/${userId}`,
        {password: newPass},
        {headers: {'Content-Type': 'application/json'}},
      );

      // Kiểm tra xem có lỗi không
      if (!response.data) {
        throw new Error('Có lỗi xảy ra khi cập nhật mật khẩu.');
      }

      Alert.alert('Đổi mật khẩu thành công');
    } catch (error) {
      console.error('Lỗi đổi mật khẩu:', error);
    }
  };

  const getOldPass = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');

      const response = await axios.get(
        `http://192.168.1.152:3000/getId/${userId}`,
      );
      const userData = response.data;
      if (oldPass == userData.password) {
        if (newPass != rnewPass) {
          Alert.alert('Mật khẩu mới nhập lại không chính xác');
        } else {
          updatePassword();
        }
      } else {
        Alert.alert('Mật khẩu cũ không đúng');
      }
    } catch (error) {
      console.error('Lỗi khi lấy thông tin người dùng:', error);
    }
  };

  return (
    <View style={{alignItems: 'center', backgroundColor: 'white'}}>
      <Image
        source={require('../../assets/img/reset-password.png')}
        resizeMode="contain"
        style={{width: 200, height: 200, marginTop: 50, marginBottom: 20}}
      />

      <View style={styles.inputContainer}>
        <Icon
          style={styles.icon}
          name={'lock-closed'}
          size={25}
          color={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter old your password"
          secureTextEntry={true}
          onChangeText={txt => {
            setoldPass(txt);
          }}
        />
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name={'eye-outline'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          style={styles.icon}
          name={'lock-closed'}
          size={25}
          color={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter new your password"
          secureTextEntry={true}
          onChangeText={txt => {
            setnewPass(txt);
          }}
        />
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name={'eye-outline'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          style={styles.icon}
          name={'lock-closed'}
          size={25}
          color={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter re new your password"
          secureTextEntry={true}
          onChangeText={txt => {
            setrnewPass(txt);
          }}
        />
        <TouchableOpacity>
          <Icon
            style={styles.icon}
            name={'eye-outline'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.changeButton}
        onPress={() => getOldPass()}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    margin: 10,
    width: '92%',
    height: 60,
    justifyContent: 'space-around',
    marginTop: 15,
    borderColor: '#7fffd4',
  },
  icon: {
    width: 30,
    marginLeft: 10,
  },
  input: {
    width: '75%',
  },
  changeButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 20,
    margin: 10,
    width: '92%',
    height: 60,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export default ChangePassword;
