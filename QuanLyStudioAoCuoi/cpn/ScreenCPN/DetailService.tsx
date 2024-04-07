import React from 'react';

import {Image, Text, View} from 'react-native';
import * as url from 'url';

const DetailService = ({route}) => {
  const item = route.params.item;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 4,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
          source={{uri: item.image}}
          resizeMode={'stretch'}
        />
      </View>

      <View style={{flex: 5, alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'blue',
            margin: 5,
          }}>
          {item.name}
        </Text>
        <View style={{borderWidth: 0.2, width: '80%', margin: 20}}></View>
        <Text style={{fontSize: 17, margin: 5, color: 'black'}}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};
export default DetailService;
