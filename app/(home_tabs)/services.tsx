import {
  View, Text, FlatList, StyleSheet, Image, StatusBar,
  TouchableOpacity, TouchableNativeFeedback, Alert
} from 'react-native'
import React from 'react'
import Colors from '@/colors/colors';
import { MaterialIcons } from '@expo/vector-icons';
import ServiceItem from '../interfaces/ServiceItem';
import { useRouter } from 'expo-router';


const DATA: ServiceItem[] = [
  { label: "Leaves", icon: require("../../assets/icons/leaves.png"), id: "1" },
  { label: "Attendance", icon: require("../../assets/icons/attendance.png"), id: "2" },
  { label: "Report", icon: require("../../assets/icons/report.png"), id: "3" },
  { label: "Payroll", icon: require("../../assets/icons/payroll.png"), id: "4" },
  { label: "Calender", icon: require("../../assets/icons/calender.png"), id: "5" },
  { label: "Projects", icon: require("../../assets/icons/projects.png"), id: "6" },
  { label: "Overtime", icon: require("../../assets/icons/overtime.png"), id: "7" },
  { label: "Field Visit", icon: require("../../assets/icons/field_visit.png"), id: "8" },
  { label: "Items", icon: require("../../assets/icons/items.png"), id: "9" },
  { label: "Help", icon: require("../../assets/icons/help.png"), id: "10" },
  { label: "Help", icon: require("../../assets/icons/announcement.png"), id: "11" },
];

const Services = () => {


  const router = useRouter();

  const handleClick = (item: ServiceItem) => {

    if (item.id == "1") {
      router.push("/Screens/LeaveScreen")
    } else if (item.id == "2") {
      router.push("/Screens/AttendanceScreen")
    }else if(item.id == "3"){
      router.push("/Screens/ReportScreen")
    }
    
    else {
      Alert.alert("other");
    }

  }

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <FlatList
          style={{

            backgroundColor: Colors.screen_background
          }}
          data={DATA}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleClick(item)}
              activeOpacity={0.5}
              style={styles.card}>
              <View style={{
                width: 75,
                height: 75,
                borderRadius: "50%",
                backgroundColor: Colors.very_light_main_color,
                justifyContent: 'center', alignItems: 'center'
              }}>
                <Image
                  resizeMode='contain'
                  source={item.icon} style={{
                    width: 24, height: 24, tintColor: Colors.main_color
                  }} />
              </View>
              <Text>{item.label}</Text>

            </TouchableOpacity>

          )}
        />
      </View>
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen_background,
    paddingHorizontal: 8,
  },
  card: {
    width: '45%',
    height: 150,
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Services