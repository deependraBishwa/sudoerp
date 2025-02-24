import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/colors/colors'
import { EvilIcons} from '@expo/vector-icons'

const ForgotPassword = () => {

    const [inputVisible, setInputVisible] = useState(true);

    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.gray,
            alignItems: 'center'}}>
            <View style={{ width: '100%', height: 150, backgroundColor: Colors.main_color }} />
            <View style={{
                width: '90%', height: 100, position: 'absolute',
                alignItems: 'center'
            }}>
                <Image style={{
                    width: 100,
                    height: 100,
                    opacity: 0.2}} source={require("../assets/images/ps_logo.png")} />
                {inputVisible ? (<View style={{
                    position: 'absolute',
                    marginTop: 60,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    width: '100%',
                }}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 16,
                        fontSize: 24,
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold'
                    }}>
                        Reset Password
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 8,
                            color: 'gray',
                            fontFamily: 'OpenSans',
                            fontSize: 18,
                            marginHorizontal: 16,
                        }}
                    >We need your email address so we can send you the password reset code.</Text>

                    <View style={{
                        width: '90%',
                        height: 55,
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 8,
                        marginVertical: 32,
                        marginHorizontal: 'auto',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <EvilIcons style={{
                            width: 32,
                            marginHorizontal: 8,
                            marginVertical: 'auto',
                        }} name='envelope' size={32} />
                        <TextInput
                            placeholder='Work email'
                            style={{
                                flex: 1,
                                fontSize: 18,
                                fontWeight: 'thin',
                            }}></TextInput>
                    </View>

                    <TouchableOpacity
                        onPress={() => { setInputVisible(false) }}
                        style={{
                            backgroundColor: Colors.main_color,
                            padding: 16,
                            width: '90%',
                            marginHorizontal: 'auto',
                            marginBottom: 28,
                            borderRadius: 8,
                        }}>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: 'OpenSans',
                            fontSize: 18,
                            color: 'white'
                        }}>Reset Password</Text>
                    </TouchableOpacity>
                </View>) : (<View style={{
                    position: 'absolute',
                    marginTop: 60,
                    borderRadius: 8,
                    backgroundColor: 'white',
                    width: '100%',
                   
                }}>

                    <View style={{
                        width: '100%',
                        marginVertical: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            width: 150,
                            height: 150,
                            borderRadius: '50%',
                            backgroundColor: Colors.gray,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require("../assets/images/envelope.png")}/>
                        </View>

                    </View>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 8,
                        fontSize: 24,
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold'
                    }}>
                        Check your mail
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 8,
                            color: 'gray',
                            fontFamily: 'OpenSans',
                            fontSize: 18,
                            marginBottom: 32,
                            marginHorizontal: 16,
                        }}
                    >Please, check your email and click on the link to reset your new password</Text>

                </View>)};
            </View>
        </View>
    )
}

export default ForgotPassword