import React, {useEffect, useState} from 'react';

import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from 'axios';
const Booking = () => {
  const [data, setData] = useState([]);
  const featchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.152:3000/getSchedule');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    featchData();
  }, []);
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ID: {item._id}</Text>
        <Text style={styles.text}>Ngày hẹn: {item.date}</Text>
        <Text style={styles.text}>Sđt: {item.phoneNumber}</Text>
        <Text style={styles.text}>Nội dung: {item.content}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Booking;
