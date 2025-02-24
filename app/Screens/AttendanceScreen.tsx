import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/colors/colors'
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';


const AttendanceScreen = () => {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' },
        { label: '2023', value: '2023' },
        { label: '2024', value: '2024' }
    ]);

    const [data, setData] = useState([
        { day: '01 sun', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '7', workingMinute: '30' },
        { day: '02 mon', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '8', workingMinute: '00' },
        { day: '03 tue', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '7', workingMinute: '30' },
        { day: '04 wed', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '8', workingMinute: '00' },
        { day: '05 thu', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '7', workingMinute: '30' },
        { day: '06 fri', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '8', workingMinute: '00' },
        { day: '07 sat', checkIn: '10:15am', checkOut: '6:00pm', workingHours: '8', workingMinute: '00' },
    ])

    return (

        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', height: 200, backgroundColor: Colors.main_color }} />
            <View style={styles.outer_container}>
                <View style={styles.upperContainer}>
                    <View
                        style={{
                            padding: 8,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between', // Align text on the left and dropdown on the right
                            alignItems: 'center', // Vertically center align both items

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,

                            }}
                        >
                            Attendance Stats
                        </Text>

                        <View>
                            <DropDownPicker
                                style={styles.dropdown}
                                open={open}
                                placeholder={items[0].label}
                                placeholderStyle={{
                                    color: 'gray', // Adjust as needed
                                }}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                // setItems={setItems}
                                dropDownContainerStyle={{
                                    outlineColor: 'gray', // Add outline color to dropdown list
                                    borderColor: 'gray', // Add border color to dropdown list
                                    width: 100, // Ensure dropdown list width matches component width
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            marginTop: 16,
                            paddingHorizontal: 8,
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        {/* Left Chevron */}
                        <View>
                            <ChevronLeft color={"gray"} />
                        </View>

                        {/* Center Text */}
                        <Text style={{
                            color: 'gray', // Adjust as needed
                            textAlign: 'center', // Centers the text within its boundaries
                            fontSize: 16, // Adjust as needed
                        }}>December 2025</Text>

                        {/* Right Chevron */}
                        <View>
                            <ChevronRight color={"gray"} />
                        </View>
                    </View>
                    <View style={{
                        marginTop: 16,
                        gap: 8,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: Colors.light_brand_color }]}>24</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Working Days</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: 'red' }]}>2</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Leave</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: Colors.gold }]}>0</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Holiday</Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: Colors.dark_yellow }]}>24</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Late in</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: 'blue' }]}>2</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Early Leaving</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                gap: 8,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={[styles.text_center, { color: 'black' }]}>0</Text>
                                <Text style={[styles.text_center, styles.text_label]}>Half Day</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.lower_container}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.render_item}>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',


                            }}
                            >
                                <Text>{item.day}</Text>

                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',

                            }}
                            >
                                <Text style={{
                                    color: 'gray',
                                    textAlign: 'center'
                                }}>Check In</Text>
                                <Text>{item.checkIn}</Text>

                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',

                            }}
                            >
                                <Text style={{
                                    color: 'gray',
                                    textAlign: 'center'
                                }}>Check Out</Text>
                                <Text>{item.checkOut}</Text>

                            </View>
                            <View style={{
                                flex: 1,
                                alignItems: 'center',

                            }}
                            >
                                <Text style={{
                                    color: 'gray',
                                    textAlign: 'center'
                                }}>working Hrs</Text>
                                <Text
                                    style={{
                                        color: parseInt(item.workingHours) < 8 ? 'red' : 'green',
                                    }}
                                >{item.workingHours}:{item.workingMinute} hrs</Text>

                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    outer_container: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        margin: 30,
        alignSelf: 'center',

    },
    render_item: {
        padding: 24,
        width: '100%',
        flexDirection: 'row',
        gap: 8,
        // boxShadow: '0 8 10px 0 rgba(0,0,0,0.2)',
        borderRadius: 8,
        marginVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
    lower_container: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 8,

    },
    upperContainer: {
        // position: 'absolute',
        width: '90%',
        // height: 200,
        paddingBottom: 16,
        alignSelf: 'center',
        // boxShadow: '0 8 10px 0 rgba(0,0,0,0.2)',
        // top: 50,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    dropdown: {
        height: 50,
        width: 100,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf: 'auto',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    text_center: {
        textAlign: 'center'
    },
    text_label: {
        color: 'gray',
    }
});

const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    picker: {
        width: 200,
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    selected: {
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});

export default AttendanceScreen