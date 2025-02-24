import { Colors } from '@/constants/Colors';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native'
import mColors from '../colors/colors'
import {useEffect}  from "react"
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      

      const getToken = async () => {
        let token = await getUserData('token');
        if(token != null){
          router.dismissTo('/(home_tabs)')
        }else{
          router.dismissTo("/Login")
        }
      }

      getToken();

      // router.dismissTo('/Login'); // Navigate to "Home" screen after 2 seconds
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [router]);


  const getUserData = async (key:string) => {
    try {
      // Retrieve the stringified JSON from AsyncStorage
      const token = await AsyncStorage.getItem(key);
  
      if (token !== null) {
        // Convert the string back into an object using JSON.parse()
        
        console.log('User data retrieved:', token);
        return token;
      } else {
        console.log('No user data found');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  return (
    
      <View style={styles.container}>
        <Image style={{
          width: 100,
          height:100,

        }} source={require('../assets/images/ps_logo.png')}/>
      </View>
   

  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: mColors.main_color
  }
});
export default index