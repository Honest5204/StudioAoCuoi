import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScheduleAConsultation = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    getUserIdFromStorage();
  }, []);

  const getUserIdFromStorage = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId !== null) {
        console.log('Đã lấy _id từ AsyncStorage:', storedUserId);
        getUserInfo(storedUserId);
      }
    } catch (error) {
      console.error('Lỗi khi đọc _id từ AsyncStorage:', error);
    }
  };

  const getUserInfo = async userId => {
    try {
      // Gửi yêu cầu đến backend để lấy thông tin người dùng từ _id
      const response = await axios.get(
        `http://192.168.1.152:3000/getUser/${userId}`,
      );
      const userData = response.data;
      // Cập nhật state với thông tin người dùng đã lấy được
      setUserName(userData.name);
      setUserEmail(userData.email);
    } catch (error) {
      console.error('Lỗi khi lấy thông tin người dùng:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      // Gửi yêu cầu đặt lịch hẹn đến backend với _id, ngày hẹn, số điện thoại và nội dung
      await axios.post('http://192.168.1.152:3000/schedule', {
        userName,
        userEmail,
        date: date,
        phoneNumber,
        content,
      });

      // Hiển thị thông báo khi đặt lịch thành công
      Alert.alert('Thông báo', 'Đặt lịch hẹn thành công!');
    } catch (error) {
      console.error('Lỗi khi đặt lịch hẹn:', error);
      Alert.alert('Lỗi', 'Đã có lỗi xảy ra khi đặt lịch hẹn.');
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{height: 300}}
        resizeMode={'stretch'}
        source={require('../../assets/img/bgr7.png')}></ImageBackground>
      <View
        style={{
          flex: 6,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'white',
          position: 'absolute',
          width: '100%',
          height: '70%',
          marginTop: '64%',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 10,
            color: 'red',
          }}>
          Đặt lịch hẹn
        </Text>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image
            source={require('../../assets/img/icon1.png')}
            style={{width: 30, height: 30, marginTop: 10}}
          />
        </TouchableOpacity>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        {date && (
          <Text style={{fontSize: 18, marginTop: 10, color: 'orange'}}>
            Ngày hẹn: {date.toLocaleString()}
          </Text>
        )}
        <TextInput
          placeholder="Số điện thoại"
          value={phoneNumber}
          style={{
            width: '90%',
            borderWidth: 0.8,
            borderRadius: 10,
            marginTop: 20,
            padding: 10,
          }}
          onChangeText={text => setPhoneNumber(text)}
        />
        <TextInput
          placeholder="Nội dung"
          value={content}
          style={{
            width: '90%',
            borderWidth: 0.8,
            borderRadius: 10,
            marginTop: 20,
            padding: 10,
          }}
          onChangeText={text => setContent(text)}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.btnButton}>
          <Text style={styles.buttonText}>Đặt lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 20,
    margin: 10,
    height: 60,
    width: '90%',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
export default ScheduleAConsultation;
