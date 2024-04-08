import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert, TouchableOpacity
} from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import axios from 'axios';

const Addnews = ({navigation, route}) => {
  const {refreshData} = route.params;
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [imageURI, setImageURI] = useState('');

  const onSelectImage = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 500,
        maxHeight: 500,
      });
      if (!response.didCancel && !response.error) {
        const imageUri = response.assets[0].uri;
        setImageURI(imageUri);
      }
    } catch (error) {
      console.error('Lỗi khi chọn ảnh từ thư viện:', error);
    }
  };

  const uploadImageToFirebase = async uri => {
    try {
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const reference = storage().ref(`images/${filename}`);
      await reference.putFile(uri);
      return await reference.getDownloadURL();
    } catch (error) {
      console.error('Lỗi khi tải ảnh lên Firebase:', error);
      return null;
    }
  };

  const handleAddNews = async () => {
    try {
      if (!name || !content || !imageURI) {
        console.error('Vui lòng nhập đủ thông tin');
        return;
      }
      const imageURL = await uploadImageToFirebase(imageURI);
      if (!imageURL) {
        console.error('Không thể tải ảnh lên Firebase');
        return;
      }
      const newsData = {name, content, image: imageURL};
      await axios.post('http://192.168.1.152:3000/addnews', newsData);
      // Sau khi thêm tin tức, clear các trường dữ liệu
      setName('');
      setContent('');
      setImageURI('');
      Alert.alert('Thông báo', 'Thêm tin tức thành công!');
      refreshData();
      navigation.goBack();
    } catch (error) {
      console.error('Lỗi khi thêm tin tức vào MongoDB:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Thêm Tin Tức</Text>
        <TextInput
          placeholder="Nhập tiêu đề"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Nhập nội dung"
          value={content}
          onChangeText={setContent}
          style={[styles.input, {height: 100}]}
          multiline
        />
        <Button title="Chọn ảnh" onPress={onSelectImage} />
        {imageURI ? (
          <Image source={{uri: imageURI}} style={styles.image} />
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <TouchableOpacity onPress={handleAddNews}>
            <Text style={styles.textButton}>Thêm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textButton}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  textButton: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    backgroundColor: 'pink',
    borderRadius: 5,
    margin: 10,
    width: 130,
  },
});

export default Addnews;
