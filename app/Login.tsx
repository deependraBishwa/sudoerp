import {
    View, Text, StyleSheet,
    Image, TextInput,
    StatusBar,
    TouchableOpacity,
    Alert
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/colors/colors';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';
import { routeToScreen } from 'expo-router/build/useScreens';
import { Constants } from '@/constants/Constants';


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {

        // const getdata =async () =>{
        //     let token =  await getUserData("token");

        //     console.log("get data " , token);
        // }

        // getdata();

    }, []);


    const saveUserData = async (key: string, token: string) => {
        try {

            // Save the stringified JSON to AsyncStorage
            await AsyncStorage.setItem(key, token);

            console.log('User data saved successfully');
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };


    const requestLogin = async () => {

        try {
            if (email == '' || password == '') {
                Alert.alert("Error", "please fill up all the fields");
                return;
            }
            const response = await axios.post(`${Constants.BASE_URL}api/login`, {
                email: email,
                password: password,
            });

            if (response.status == 200) {
                console.log(JSON.stringify(response.data.data.token));

                AsyncStorage.removeItem("token");
                saveUserData("token", JSON.stringify(response.data.data.token));
                //    router.dismissAll
                router.replace('/(home_tabs)')

            }

        } catch (error) {
            Alert.alert('error', "something went wrong");
            throw error;
        }
    }

    return (
        <View
            style={styles.container}>
            <StatusBar
                barStyle={'light-content'} />
            <View style={{
                width: '100%',
                height: 300,
                backgroundColor: Colors.main_color,
                alignItems: 'center'
            }}>
                <Image

                    style={{
                        width: 100,
                        height: 100,
                        marginTop: 60

                    }}
                    source={require("../assets/images/ps_logo.png")} />
            </View>

            <View style={{
                backgroundColor: "white",
                position: 'absolute',
                top: 150,
                alignItems: 'center',
                borderRadius: 8,
                boxShadow: 'green',
                shadowColor: 'black',
                margin: 16,
                paddingTop: 16,
                width: '90%'
            }}>

                <Text style={
                    styles.welcomback
                }>Welcome Back </Text>
                <Text style={styles.signingtoyouracc}>sign in to your account</Text>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        color={Colors.main_color}
                        name='person-outline'
                        size={20} />
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        style={styles.inputField}
                        placeholder='Your email/username' />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        color={Colors.main_color}
                        name='lock-outline'
                        size={20} />
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.inputField}
                        placeholder='Your password' />
                </View>

                <TouchableOpacity 
                onPress={() => router.push("/ForgotPassword")}
                style={{
                    width: "100%",
                    padding: 22,
                }}>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={requestLogin}
                    style={{
                        width: "90%",
                        backgroundColor: Colors.main_color,
                        padding: 16,
                        justifyContent: 'center',
                        borderRadius: 6,
                        marginBottom: 24

                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontFamily: 'OpenSans'
                    }} >Login</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{
                width: '100%',
                position: 'absolute',
                bottom: 16,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <View>
                    <Text style={{
                        fontSize: 17,
                    }}>Dont have an account?</Text>
                </View>
                <TouchableOpacity onPress={() => router.push('/singup')}>
                    <Text style={{
                        color: Colors.main_color,
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>Signup Now</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray,
        alignItems: 'center',

    }, welcomback: {
        marginTop: 8,
        fontSize: 24,
        fontFamily: 'OpenSans',
        fontWeight: 'condensedBold',
        textAlign: 'center'
    }, signingtoyouracc: {
        color: 'gray',
        fontFamily: 'OpenSans',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 8,
    }, inputContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        borderColor: '#f3f6f9',
        borderWidth: 1,
        width: '90%',
        marginTop: 16,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f3f6f9'
    }, inputField: {
        width: '100%',
        fontFamily: 'OpenSans',
        fontSize: 18,
        padding: 12
    }, forgotPass: {
        marginTop: 16,
        width: '100%',
        color: Colors.main_color,
        textAlign: 'right'

    }
});

export default Login