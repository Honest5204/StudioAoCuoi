import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useEffect} from "react";
import Icon from 'react-native-vector-icons/Ionicons';

function SignUp(props) {
    return (
        <View>
            <ImageBackground
                source={require('./assets/img/bgr3.jpg')}
                style={{width: '100%', height: 350}}
            >

            </ImageBackground>
            <View style={{position: 'absolute', height: 570, width: '100%',backgroundColor: 'white',borderRadius:20,marginTop:250}} >
                <Text style={{marginTop:20,fontSize:30,color:'black',textAlign:'center'}}>Sign Up</Text>
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
                        name={'people'}
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
                    <TextInput  style={{width: '75%'}} placeholder="Enter your name" />
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
                    <TextInput  style={{width: '75%'}} placeholder="Enter your account" />
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
                    <TextInput  style={{width: '75%'}} placeholder="Enter your password" />
                    <TouchableOpacity>
                        <Icon
                            style={{width: 30, marginRight: 5}}
                            name={'eye-outline'}
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
                    <TextInput  style={{width: '75%'}} placeholder="Enter re your password" />
                    <TouchableOpacity>
                        <Icon
                            style={{width: 30, marginRight: 5}}
                            name={'eye-outline'}
                            size={25}
                            color={'black'}></Icon>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: 'orange',
                        borderRadius: 10,
                        marginTop: 20,
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
                        Register
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row',alignItems:'center', marginTop: 20,justifyContent:'center'}}>
                <Text style={{textAlign: 'center'}}>
                    Already have an account?
                </Text>

                <TouchableOpacity onPress={()=> props.navigation.navigate('Đăng nhập')}>
                    <Text style={{marginLeft:5,color:'red',fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
                </View>
                

            </View>
        </View>

    );
}

export default SignUp;
