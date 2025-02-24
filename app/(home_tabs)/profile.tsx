import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/colors/colors';
import { BellIcon, BriefcaseBusiness, LockIcon, LogOutIcon, SettingsIcon, UserIcon } from 'lucide-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CustomAlert from '@/components/CustomAlert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const profile = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleConfirm = () => {
    setAlertVisible(false);
    logOut();

    console.log('Confirmed');
  };

  const handleCancel = () => {
    setAlertVisible(false);

    console.log('Cancelled');
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      // Alert.alert("Logged out successfully");
      // router.dismissAll();  // Corrected this to call the function
      router.replace("/Login"); // Used push to navigate to Login
    } catch (error) {
      Alert.alert("An error occurred while logging out.");
    }
  }


  return (
    <ScrollView >
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.main_color} />
      
      {/* Background Color View */}
      <View style={{ width: '100%', height: 300, backgroundColor: Colors.main_color }}></View>
  
      {/* Content Container */}
      <View style={{ width: '100%', marginTop: -225, flex: 1 }}>
        {/* Top Bar with Profile and Bell Icon */}
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 'auto' }}>
          <View style={{ backgroundColor: 'yellow', margin: 4, paddingHorizontal: 4, borderRadius: 8 }}>
            <Text style={{ fontSize: 20 }}>Profile</Text>
          </View>
          <View style={{ height: 20, width: 20, margin: 4 }}>
            <BellIcon size={24} color={'white'} fill={'white'} />
          </View>
        </View>
  
        {/* Profile Image and Name */}
        <View style={{ width: '90%', marginHorizontal: 'auto', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: 'white' }}
            source={require('../../assets/images/profile_photo.jpg')}
          />
          <Text style={[styles.text_white, { fontSize: 22, marginTop: 12, fontFamily: 'OpenSans', fontWeight: 'bold' }]}>
            Robert Joe
          </Text>
          <Text style={[styles.text_white, { fontSize: 16, fontFamily: 'OpenSans' }]}>UI/UX Designer</Text>
        </View>
  
        {/* Stats Container */}
        <View style={{ width: '90%', marginTop: 8, paddingVertical: 24, borderRadius: 8, backgroundColor: 'white', marginHorizontal: 'auto', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text_center, { fontSize: 20 }]}>5</Text>
            <Text style={[styles.text_center, styles.text_gray]}>Monthly Attendance</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text_center, { fontSize: 20 }]}>4</Text>
            <Text style={[styles.text_center, styles.text_gray]}>Monthly Hours</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text_center, { fontSize: 20 }]}>3</Text>
            <Text style={[styles.text_center, styles.text_gray]}>Monthly Late</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text_center, { fontSize: 20 }]}>8</Text>
            <Text style={[styles.text_center, styles.text_gray]}>Remaining Leaves</Text>
          </View>
        </View>
  
        {/* Options Container */}
        <View style={{ width: '90%', marginHorizontal: 'auto', marginTop: 16, backgroundColor: 'white', padding: 16, borderRadius: 8, marginBottom: 16 }}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
              <UserIcon color={Colors.main_color} />
              <Text style={{ fontFamily: 'OpenSans', flex: 1, paddingLeft: 8, fontSize: 18 }}>Personal information</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
              <BriefcaseBusiness color={Colors.main_color} />
              <Text style={{ flex: 1, paddingLeft: 8, fontSize: 18, fontFamily: 'OpenSans' }}>Work information</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
              <LockIcon color={Colors.main_color} />
              <Text style={{ flex: 1, paddingLeft: 8, fontSize: 18, fontFamily: 'OpenSans' }}>Change Password</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
              <SettingsIcon color={Colors.main_color} />
              <Text style={{ flex: 1, paddingLeft: 8, fontSize: 18, fontFamily: 'OpenSans' }}>Settings</Text>
              <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity onPress={() => setAlertVisible(true)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
              <LogOutIcon color="red" />
              <Text style={{ flex: 1, paddingLeft: 8, fontSize: 18, color: 'red', fontFamily: 'OpenSans' }}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
  
        {/* Custom Alert */}
        <CustomAlert
          visible={alertVisible}
          title="Confirm Logout"
          message="Are you sure you want to logout your account?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </View>
    </View>
  </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd'
  },
  text_white: {
    color: 'white'
  },
  text_center: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontFamily: 'OpenSans'
  }
  , text_gray: {
    color: 'gray'
  }
});

export default profile