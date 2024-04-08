import React, {useEffect, useState} from 'react';

import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import axios from 'axios';
const ListUser = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const featchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.152:3000/getListUsers');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    featchData();
  }, []);
  const onRefresh = async () => {
    setRefreshing(true);
    // Thực hiện các thao tác cần thiết để làm mới dữ liệu
    await fetchData();
    setRefreshing(false);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>ID: {item._id}</Text>
        <Text style={styles.text}>Tên: {item.name}</Text>
        <Text style={styles.text}>Email: {item.email}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
export default ListUser;
