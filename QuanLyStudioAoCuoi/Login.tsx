import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

function Login(props) {
  const [rmb, setrmb] = useState(true);
    const [tk, settk] = useState('');
    const [mk, setmk] = useState('');


  return (
    <View style={{height: '100%'}}>
      <ImageBackground
        source={require('./assets/img/bgr1.jpg')}
        style={{width: '100%', height: 350}}></ImageBackground>

      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          height: '69%',
          position: 'absolute',
          width: '100%',
          marginTop: 260,
        }}>
        <Text
          style={{
            fontSize: 30,
            marginTop: 30,
            textAlign: 'center',
            color: 'black',
          }}>
          Login to continue
        </Text>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            padding: 2,
            borderRadius: 10,
            margin: 10,
            height: 60,
            justifyContent: 'space-around',
            marginTop: 30,
            borderColor: '#7fffd4',
          }}>
          <Icon
            style={{width: 30, marginLeft: 10}}
            name={'mail'}
            size={25}
            color={'black'}></Icon>

          <Text
            style={{
              fontSize: 35,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5,
            }}>
            |
          </Text>
          <TextInput onChangeText={(txt)=>settk(txt)} style={{width: '75%'}} placeholder="Enter your email" />
            <TouchableOpacity>
                <Icon
                    style={{width: 30, marginRight: 5}}
                    name={'close-circle-outline'}
                    size={25}
                    color={'black'}></Icon>
            </TouchableOpacity>

        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth: 1,
            padding: 2,
            borderRadius: 10,
            margin: 10,
            height: 60,
            justifyContent: 'space-around',
            marginTop: 15,
            borderColor: '#7fffd4',
          }}>
          <Icon
            style={{width: 30, marginLeft: 10}}
            name={'lock-closed'}
            size={25}
            color={'black'}></Icon>
          <Text
            style={{
              fontSize: 35,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 5,
            }}>
            |
          </Text>
          <TextInput onChangeText={(txt)=>setmk(txt)} style={{width: '75%'}} placeholder="Enter your password" />
            <TouchableOpacity>
                <Icon
                    style={{width: 30, marginRight: 5}}
                    name={'eye-outline'}
                    size={25}
                    color={'black'}></Icon>
            </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <TouchableOpacity onPress={() => setrmb(!rmb)}>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 2,
                  backgroundColor: rmb ? 'blue' : 'white',
                  height: 20,
                  width: 20,
                  marginLeft: 12,
                  borderColor: 'black',
                  marginTop: 2,
                }}></View>
            </TouchableOpacity>
            <Text style={{marginLeft: 5, fontSize: 16}}>Remember me</Text>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={{marginLeft: 135, fontSize: 16, color: 'red'}}>
                Fogot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            borderRadius: 10,
            marginTop: 40,
            margin: 10,
            height: 60,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              marginTop: 15,
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text style={{fontSize: 16}}>Don't have account?</Text>
          <TouchableOpacity onPress={()=> props.navigation.navigate("Đăng ký")
          }>
            <Text style={{fontSize: 16, marginLeft: 5, color: 'red'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              height: 1,
              width: '40%',
              backgroundColor: 'black',
              marginLeft: 10,
              marginTop: 30,
            }}></View>
          <Text style={{fontSize: 16, marginTop: 20}}>or</Text>
          <View
            style={{
              height: 1,
              width: '40%',
              backgroundColor: 'black',
              marginRight: 10,
              marginTop: 30,
            }}></View>
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 16}}>Login with socials</Text>
            <Icon
              style={{width: 30, marginLeft: 5, marginTop: 1}}
              name={'arrow-forward'}
              size={20}
              color={'black'}></Icon>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
