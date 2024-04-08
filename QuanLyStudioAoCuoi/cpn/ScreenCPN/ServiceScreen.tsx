import React, {useEffect, useState} from 'react';

import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import CustomItemService from '../CustomCPN/CustomItemService.tsx';

const ServiceScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'http://192.168.1.152:3000/getListService',
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 10,
          borderWidth: 1,
          borderColor: 'red',
          padding: 5,
          backgroundColor: 'beige',
          flexDirection: 'row',
          borderRadius: 3,
          width: '95%',
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: 70, height: 70, marginRight: 10}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{width: '60%', fontSize: 18, color: 'blue'}}
            numberOfLines={3}>
            {item.name}
          </Text>
          <TouchableOpacity onPress={() => handleDetail(item)}>
            <Text style={{fontSize: 15, color: 'brown'}}>Chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const handleDetail = item => {
    navigation.navigate('DetailService', {item});
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ServiceScreen;
