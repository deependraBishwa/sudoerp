import { View, Text, StyleSheet, Button, Alert, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { ScrollView } from 'react-native'
import Colors from '@/colors/colors'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BellIcon, Calendar, Clock, LogInIcon, PiIcon, TimerOffIcon } from 'lucide-react-native'

const index = () => {

  const logOut = () => {
    AsyncStorage.removeItem("token");
    Alert.alert("logged out successfully")
    router.dismissAll
    router.dismissTo("/Login")
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.innerContainer}>

        <StatusBar barStyle={"light-content"} />

        <View style={styles.upperContainer}>
          <View style={styles.containWrapper}>
            <View style={{
              width: '100%',
              justifyContent: 'space-between',
              height: 60,
              flexDirection: 'row'
            }}>
              <View style={{
                flexDirection: 'row'
              }}>
                <Image style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  backgroundColor: 'white',

                }}
                  source={require('../../assets/images/react_logo_2x.png')} />
                <View style={{ flexDirection: 'column', marginLeft: 16 }}>
                  <Text style={styles.username}>Robert Joe</Text>
                  <Text style={styles.userDesignation}>UI/UX Designer</Text>
                </View>
              </View>
              <View style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 30,
              }}>
                <BellIcon
                  color={Colors.main_color} fill={Colors.main_color} size={20} />
              </View>
            </View>
            <View style={{
              backgroundColor: 'white',
              marginTop: 32,
              width: '100%',
              borderRadius: 12,
              paddingBottom: 32
            }}>
              <View style={{
                marginTop: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',

              }}>
                <View style={{
                  marginHorizontal: 16,
                  marginTop: 8,
                  alignItems: 'center',
                  flexDirection: 'row'
                }}>
                  <Calendar color={Colors.main_color} />
                  <Text style={{
                    marginLeft: 4,
                    fontSize: 18,
                    color: Colors.main_color
                  }}>10 sep 2023</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <Clock color={Colors.main_color} />
                  <Text style={{
                    marginHorizontal: 16,
                    fontSize: 18,
                    color: Colors.main_color
                  }}>02:45 PM</Text>
                </View>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 8,
                marginTop: 24,
                alignItems: 'center'
              }}>
                <View style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.lignt_gray,
                  borderRadius: 10,
                }}>
                  <Text>00</Text>
                </View>
                <View style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.lignt_gray,
                  borderRadius: 10,
                }}>
                  <Text>00</Text>
                </View>
                <View style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.lignt_gray,
                  borderRadius: 10,
                }}>
                  <Text>00</Text>
                </View>
                <View style={{
                  height: 50,
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                  <Text>HRS</Text>
                </View>
              </View>
              <Text
                style={{ color: 'gray', textAlign: 'center', margin: 16, fontSize: 16 }}
              >General 10:00 AM to 06:00</Text>
              <View style={{ width: '100%', alignItems: 'center', marginVertical: 16 }}>

                <TouchableOpacity style={{
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  backgroundColor: Colors.main_color,
                  width: '40%'

                }}>
                  <LogInIcon color={'white'} size={30} />
                  <Text style={{ textAlign: 'center', marginLeft: 4, fontSize: 18, color: 'white' }}>Check In</Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.middleContainer}>
              <Text
                style={{
                  marginTop: 12,
                  marginLeft: 16,
                  fontSize: 18
                }}>Today working hour</Text>
              <View
                style={{
                  gap: 2,
                  marginTop: 12,
                  flexDirection: 'row',
                }}>
                <View style={styles.workingHoursIcon}>
                  <View>
                    <MaterialCommunityIcons name='clock-check-outline' size={20} />                    </View>
                </View>
                <View style={styles.workingHoursIcon}></View>
                <View style={styles.workingHoursIcon}></View>
                <View style={styles.workingHoursIcon}></View>
              </View>
            </View>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray
  }, innerContainer: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex'
  }, middleContainer: {
    width: '100%',
    height: 100,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: 'white'
  },

  workingHoursIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red',
    height: 30,
  },

  username: {
    color: 'white',
    fontSize: 20,
    flex: 1
  }
  , upperContainer: {
    height: 300,
    width: '100%',
    backgroundColor: Colors.main_color
  }, profile: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    paddingTop: 10,
    left: 16,
    overflow: 'hidden',
    borderRadius: 25,
  }, containWrapper: {
    width: "90%",
    height: 100,
    top: 60,
    marginHorizontal: 'auto'
  }, userDesignation: {
    flex: 1,
    color: 'white'
  },
})

export default index