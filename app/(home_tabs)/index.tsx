import { View, Text, StyleSheet, Button, Alert, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import { ScrollView } from 'react-native'
import Colors from '@/colors/colors'
import {  MaterialCommunityIcons } from '@expo/vector-icons'
import { BellIcon, BriefcaseBusinessIcon, Calendar, Clock, CoffeeIcon, Feather, LogInIcon, PiIcon, TimerOffIcon } from 'lucide-react-native'
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox'

const index = () => {

    const logOut = async () => {
        try {
            await AsyncStorage.removeItem("token");
            Alert.alert("Logged out successfully");
            router.dismissAll();  // Corrected this to call the function
            router.push("/Login"); // Used push to navigate to Login
        } catch (error) {
            Alert.alert("An error occurred while logging out.");
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <StatusBar barStyle={"light-content"} />

                <View style={styles.upperContainer}>

                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: "90%",
                        marginHorizontal: 'auto',
                        marginTop: 75,


                    }}>
                    <View style={styles.header}>
                        <View style={styles.profileInfo}>
                            <Image style={styles.profileImage} source={require('../../assets/images/profile_photo.jpg')} />
                            <View style={styles.usernameContainer}>
                                <Text style={styles.username}>Robert Joe</Text>
                                <Text style={styles.userDesignation}>UI/UX Designer</Text>
                            </View>
                        </View>
                        <TouchableOpacity 
                        onPress={() => {
                            router.push("/Notifications")
                        }}
                        style={styles.notificationIcon}>
                            <BellIcon color={Colors.main_color} fill={Colors.main_color} size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.dateTimeContainer}>
                            <View style={styles.dateContainer}>
                                <Calendar color={Colors.main_color} />
                                <Text style={styles.dateText}>10 sep 2023</Text>
                            </View>
                            <View style={styles.timeContainer}>
                                <Clock color={Colors.main_color} />
                                <Text style={styles.timeText}>02:45 PM</Text>
                            </View>
                        </View>
                        <View style={styles.timeSummaryContainer}>
                            <View style={styles.timeBox}><Text>00</Text></View>
                            <View style={styles.timeBox}><Text>00</Text></View>
                            <View style={styles.timeBox}><Text>00</Text></View>
                            <View style={styles.timeBox}><Text>HRS</Text></View>
                        </View>
                        <Text style={styles.generalTime}>General 10:00 AM to 06:00</Text>
                        <View style={styles.checkInContainer}>
                            {false && <TouchableOpacity
                             style={styles.checkInButton
                            }>
                                <LogInIcon color={'white'} size={30} />
                                <Text style={styles.checkInText}>Check In</Text>
                            </TouchableOpacity>}
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                borderColor: Colors.main_color,
                                borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                                borderRadius: 10,
                                width: '40%',
                                padding: 12,

                            }}>
                                <CoffeeIcon color={Colors.main_color}/>
                                <Text>Break time</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={{
                                backgroundColor: Colors.red,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 5,
                                borderRadius: 10,
                                width: '40%',
                                padding: 12,

                            }}>
                                <CoffeeIcon color={'white'}/>
                                <Text style={{
                                    color: 'white',
                                }}>Check out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.middleContainer}>
                        <Text style={styles.workingHourTitle}>Today working hour</Text>
                        <View style={styles.workingHoursRow}>
                            <WorkingHourIcon icon={<MaterialCommunityIcons name='clock-check-outline' color={Colors.main_color} size={20} />} label="--:--" />
                            <WorkingHourIcon icon={<CoffeeIcon color={Colors.main_color} size={20} />} label="--:--" />
                            <WorkingHourIcon icon={<MaterialCommunityIcons name='clock-remove-outline' color={Colors.main_color} size={20} />} label="--:--" />
                            <WorkingHourIcon icon={<BriefcaseBusinessIcon color={Colors.main_color} size={20} />} label="--:--" />
                        </View>
                    </View>

                    <View style={styles.lowerContainer}>
                        <View style={styles.taskHeader}>
                            <Text style={styles.taskTitle}>Today's Task</Text>
                            <Text style={styles.taskCount}>2</Text>
                        </View>
                        <FlatList
                            scrollEnabled={false}
                            data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }]}
                            renderItem={({ item }) => (

                                <View style={styles.taskItem}>
                                    <ExpoCheckbox value={false} style={{
                                        borderRadius: 6,
                                    }} />
                                    <View style={{

                                        marginLeft: 8,
                                        flex: 1,
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                        }}>Redesign of Pixel Mobile Application</Text>
                                        <Text style={{
                                            flex: 1,
                                            marginTop: 16,
                                            color: 'gray'
                                        }}>Today</Text>
                                    </View>
                                    <View style={{

                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',

                                    }}>
                                        <Image
                                            style={{ marginTop: 8, width: 18, height: 18, }} source={require('@/assets/images/vector.png')} />
                                        <Text style={{
                                            marginTop: 4,
                                            fontSize: 16,
                                            marginHorizontal: 4,
                                            color: Colors.gold
                                        }}>Pending</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const WorkingHourIcon = ({ icon, label }) => (
    <View style={styles.workingHoursIcon}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            <Text>{label}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.gray
    },
    innerContainer: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex'
    },
    upperContainer: {
        position: 'absolute',
        top: 0,
        height: 300,
        width: '100%',
        backgroundColor: Colors.main_color
    },
    containWrapper: {
        flex: 1,
        width: "90%",
        marginHorizontal: 'auto',
        top: 60,
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        height: 60,
        flexDirection: 'row'
    },
    profileInfo: {
        flexDirection: 'row',
    },
    profileImage: {
        padding: 4,
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    usernameContainer: {
        flexDirection: 'column',
        marginLeft: 16
    },
    username: {
        color: 'white',
        fontSize: 20
    },
    userDesignation: {
        color: 'white',
    },
    notificationIcon: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    card: {
        backgroundColor: 'white',
        marginTop: 32,
        width: '100%',
        borderRadius: 12,
        paddingBottom: 16
    },
    dateTimeContainer: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateContainer: {
        marginHorizontal: 16,
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    dateText: {
        marginLeft: 4,
        fontSize: 18,
        color: Colors.main_color
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        marginHorizontal: 16,
        fontSize: 18,
        color: Colors.main_color
    },
    timeSummaryContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 24,
        alignItems: 'center'
    },
    timeBox: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lignt_gray,
        borderRadius: 10,
    },
    generalTime: {
        color: 'gray',
        textAlign: 'center',
        margin: 16,
        fontSize: 16
    },
    checkInContainer: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        marginVertical: 16
    },
    checkInButton: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        backgroundColor: Colors.main_color,
        width: '40%'
    },
    checkInText: {
        textAlign: 'center',
        marginLeft: 4,
        fontSize: 18,
        color: 'white'
    },
    middleContainer: {
        width: '100%',
        height: 100,
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    workingHourTitle: {
        marginTop: 12,
        marginLeft: 16,
        fontSize: 18
    },
    workingHoursRow: {
        gap: 2,
        marginTop: 16,
        flexDirection: 'row',
    },
    workingHoursIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 30,
    },
    lowerContainer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 16,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    taskHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskTitle: {
        width: '30%',
        marginStart: 16,
        marginTop: 13,
        fontSize: 18
    },
    taskCount: {
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 16
    },
    taskItem: {
        flexDirection: 'row',
        padding: 10,
        marginTop: 5,
        width: '90%',
        height: 100,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 'auto',
        marginBottom: 4,
    }
})

export default index;
