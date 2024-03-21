import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text, TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";

const TinTucScreen = () => {
    const [data, setData] = useState([]);

    const  fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.8:3000/tintuc');
            const newData = await response.json();
            setData(newData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const navigation = useNavigation();

    const renderItem = ({item}) => {
        return (
            <View style={{width: '100%', height: 320, paddingLeft: 10, paddingRight: 10}}>
                <TouchableOpacity>
                    <Image style={{width: '100%', height: 250, borderRadius: 10}} source={{uri: item.anh}}/>
                    <Text style={{fontSize: 20, fontStyle: 'italic', padding: 10, textAlign: 'center'}}>
                        {item.tieuDe}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <Image
                    style={{width: '100%', height: 200}}
                    source={require('./img/headerTinTuc.jpg')}></Image>
                <Text style={{fontSize: 30, fontWeight: 'bold', padding: 10, color:'blue'}}>
                    Tin Tức
                </Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
};
export default TinTucScreen;
const styles = StyleSheet.create({});

