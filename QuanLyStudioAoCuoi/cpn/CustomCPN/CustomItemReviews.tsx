import React from 'react';

import {
  Button,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const CustomItemReviews = ({item}) => {
  const navigation = useNavigation();
  const handleDetail = item => {
    navigation.navigate('DetailService', {item});
  };
  return (
    <View style={{padding: 10}}>
      <Image
        source={{uri: item.image}}
        style={{alignSelf: 'center', width: 100, height: 100, borderRadius: 50}}
      />
      <Text
        style={{
          textAlign: 'center',
          width: 220,
          padding: 5,
          fontWeight: 'bold',
          color: 'rgb(238,44,130)',
        }}>
        {item.name}
      </Text>
      <Text style={{width: 220}}>
        ---------------------------------------------------
      </Text>
      <Text style={{textAlign: 'center', width: 220, height: 140}}>
        {item.content}
      </Text>
      <TouchableOpacity onPress={() => handleDetail(item)}>
        <Text style={styles.buttonText}>꧁Xem chi tiết꧂</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'hotpink',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'hotpink',
    textAlign: 'center',
    height: 30,
    fontWeight: 'bold',
  },
});

export default CustomItemReviews;
