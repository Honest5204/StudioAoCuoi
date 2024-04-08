import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/anhBia1.png'),
        require('../../assets/anhBia2.png'),
        require('../../assets/anhBia3.png'),
        require('../../assets/anhBia4.png'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay={true}
          circleLoop={true}
          sliderBoxHeight={200}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          borderRadius={20} // Số này tùy thuộc vào kích thước hình ảnh và thiết kế của bạn
          style={styles.sliderBox}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '90%', // Chiều rộng của phần tử bao quanh SliderBox
    padding: 10, // Padding 10px
  },
  sliderBox: {
    width: '95%',
    height: 200, // Chiều rộng của SliderBox
  },
});
