import React from 'react';

import {Image, Text, View} from 'react-native';

const DetailService = ({route}) => {
  const item = route.params.item;
  return (
    <View style={{padding: 10}}>
      <Text
        style={{
          padding: 5,
          fontWeight: 'bold',
          color: 'rgb(238,44,130)',
          fontSize: 30,
        }}>
        Câu chuyện Mailisa
      </Text>
      <Text style={{fontWeight: 'bold', padding: 10}}>
        Chặng đường 15 năm xây dựng và phát triển thương hiệu Mailisa uy tín,
        chuyên nghiệp, chất lượng, gần gũi trong lòng khách hàng là minh chứng
        rõ ràng nhất cho tâm huyết và thành quả của người sáng lập cùng toàn thể
        cán bộ nhân viên công ty.
      </Text>
      <Image
        source={{uri: item.image}}
        style={{
          alignSelf: 'center',
          padding: 10,
          width: 320,
          height: 420,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          padding: 5,
          fontWeight: 'bold',
          color: 'rgb(238,44,130)',
        }}>
        {item.name}
      </Text>
      <Text style={{}}>
        ------------------------------------------------------------------------------------------------------
      </Text>
      <Text style={{fontWeight: 'bold'}}>{item.content}</Text>
    </View>
  );
};
export default DetailService;
