import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const TinTucScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://172.16.0.2:3000/getListNews');
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1, marginBottom: 15}}>
        <View style={{flex: 2, margin: 5}}>
          <Text style={{color: 'black', fontSize: 20}}>{item.name}</Text>
          <Text>{item.content}</Text>
        </View>

        <View style={{flex: 6}}>
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: 300}}
            resizeMode={'stretch'}
          />
        </View>
      </View>
    );
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
export default TinTucScreen;
const styles = StyleSheet.create({});
