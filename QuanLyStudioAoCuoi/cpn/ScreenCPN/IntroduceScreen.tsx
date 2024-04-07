import React from 'react';

import {ImageBackground, Text, View} from 'react-native';

const IntroduceScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/bgr6.jpg')}
      style={{flex: 1}}
      resizeMode="cover">
      <Text
        style={{fontSize: 30, margin: 10, fontWeight: 'bold', color: 'brown'}}>
        Áo cưới Mailisa – Lưu giữ đường cong tình nồng đôi lứa
      </Text>
      <Text
        style={{fontSize: 19, margin: 10, color: 'black', textAlign: 'left'}}>
        Ảnh viện áo cưới Mailisa chuyên cung cấp dịch vụ chụp hình cưới, chụp
        ảnh ngày cưới, chụp hình kỷ niệm ngày cưới, quay phim phóng sự, quay
        phim sự kiện…..Chặng đường 15 năm xây dựng và phát triển thương hiệu áo
        cưới Mailisa uy tín, chuyên nghiệp, chất lượng. Ảnh viện Áo cưới mailisa
        tự hào là nơi lưu giữ khoảnh khắc thăng hoa của hạnh phúc lứa đôi cho
        các diễn viên ca sỹ nổi tiếng và hơn 400.000 cặp đôi uyên ương khác.
        Trong đó diễn viên Huy Khánh – Anh Thư là minh chứng tiêu biểu nhất.
      </Text>
    </ImageBackground>
  );
};

export default IntroduceScreen;
