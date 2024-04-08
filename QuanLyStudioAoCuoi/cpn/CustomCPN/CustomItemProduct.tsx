import React from 'react';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const CustomItemProduct = ({item}) => {
  const navigation = useNavigation();
  const handleDetail = item => {
    navigation.navigate('DetailService', {item});
  };
  return (
    <View style={{alignItems: 'center', padding: 15}}>
      {/*<Image source={{ uri: item.image }} style={styles.image} />*/}
      <Image
        source={{uri: item.image}}
        style={{width: 220, height: 320, borderRadius: 15}}
      />
      <Text style={{fontWeight: 'bold', color: 'rgb(238,44,130)', padding: 2}}>
        Mã số : {item.id}
      </Text>
      <Text style={{fontWeight: 'bold', color: 'rgb(238,44,130)'}}>
        {' '}
        {item.name}
      </Text>
      <Text style={{fontWeight: 'bold', color: 'rgb(238,44,130)'}}>
        Giá bán : {item.giaban} VND
      </Text>
      <Text style={{fontWeight: 'bold', color: 'rgb(238,44,130)'}}>
        Giá Thuê : {item.giathue} VND
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDetail(item)}>
        <Text style={styles.buttonText}> Xem chi tiết</Text>
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
    color: 'white',
    textAlign: 'center',
    height: 30,
    fontWeight: 'bold',
  },
});

export default CustomItemProduct;
