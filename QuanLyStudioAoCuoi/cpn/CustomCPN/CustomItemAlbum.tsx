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
const CustomItemAlbum = ({item}) => {
  const navigation = useNavigation();
  const handleDetail = item => {
    navigation.navigate('DetailService', {item});
  };
  return (
    <View style={{padding: 10}}>
      {/*<Image source={{ uri: item.image }} style={styles.image} />*/}
      <Image
        source={{uri: item.image}}
        style={{marginBottom: 10, width: 220, height: 120, borderRadius: 15}}
      />
      <TouchableOpacity onPress={() => handleDetail(item)}>
        <Text style={styles.buttonText}>{item.name}</Text>
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
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'hotpink',
    textAlign: 'center',
    height: 30,
    width: 220,
    fontWeight: 'bold',
  },
});
export default CustomItemAlbum;
