import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { TimerIcon } from 'lucide-react-native'
import Colors from '@/colors/colors';
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';
import { useRouter } from 'expo-router';

const todayData = [
    { checked: false, des: "Redesign of pixel mobile application", status: "pending", date: '2024-10-2' },
    { checked: true, des: "Redesign of pixel mobile application", status: "completed", date: '2024-10-2' },
]

const nextData = [
    { checked: true, des: "Redesign of pixel mobile application", status: "pending", date: '2024-10-2' },
    { checked: false, des: "Redesign of pixel mobile application", status: "completed", date: '2024-10-2' },
    { checked: true, des: "Redesign of pixel mobile application", status: "completed", date: '2024-10-2' },
]

const AllTask = () => {

    const router = useRouter()
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [taskCount, setTaskCount] = useState('');

    const handlePress = (index: SetStateAction<number>) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <View style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4
            }}>
                <Text style={{
                    fontSize: 18,
                }}>Today Tasks</Text>
                <Text style={{
                    borderColor: 'gray',
                    borderWidth: 2,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 8,
                    color: 'gray',
                }}>{todayData.length}</Text>
            </View>
            <FlatList
                data={todayData}
                // keyExtractor={( item, index ) => index.toString}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <TouchableOpacity
                    onPress={() => router.push({
                        pathname:'Screens/TaskDetail',
                        params:{
                            des: item.des,
                            status: item.status,
                        }
                    }) } // Simplified
                    >
                        <View
                        style={{
                            width: '100%',
                            marginTop: 16,
                            padding: 16,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            gap: 8, // Spacing between elements
                        }}
                    >
                        {/* Checkbox */}
                        <ExpoCheckbox value={item.checked} />

                        {/* Middle View - Takes remaining space */}
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    fontFamily: 'OpenSans',
                                    fontWeight: 'thin',
                                    flex: 1,
                                    fontSize: 20,
                                    marginBottom: 8, // Spacing below this text
                                }}
                            >
                                {item.des}
                            </Text>
                            <Text style={{
                                color: 'gray',

                            }}>{item.date}</Text>
                        </View>

                        {/* Last View - Takes only required space */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }} >
                            <TimerIcon color={(item.status == "pending" ? Colors.gold : "green")} />
                            <Text
                                style={{
                                    color: (item.status == "pending") ? Colors.gold : "green",
                                    fontSize: 16, fontStyle: 'normal',
                                    fontFamily: 'OpenSans',
                                }}>{item.status}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                )} />

            <View style={{
                marginTop: 16,
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4
            }}>
                <Text style={{
                    fontSize: 18,
                }}>Next Tasks</Text>
                <Text style={{
                    borderColor: 'gray',
                    borderWidth: 2,
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 8,
                    color: 'gray',
                }}>{nextData.length}</Text>
            </View>
            <FlatList
                style={{
                    marginBottom: 32,
                }}
                data={nextData}
                keyExtractor={(item, index) => index.toString()} // Use a unique identifier
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => Alert.alert('You tapped the button! '+item.status)} // Simplified
                    >
                        <View
                            style={{
                                width: '100%',
                                marginTop: 16,
                                padding: 16,
                                backgroundColor: 'white',
                                flexDirection: 'row',
                                gap: 8, // Spacing between elements
                            }}
                        >
                            {/* Checkbox */}
                            <ExpoCheckbox value={item.checked} />

                            {/* Middle View - Takes remaining space */}
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: 'OpenSans',
                                        fontWeight: 'thin',
                                        flex: 1,
                                        fontSize: 20,
                                        marginBottom: 8, // Spacing below this text
                                    }}
                                >
                                    {item.des}
                                </Text>
                                <Text style={{ color: 'gray' }}>{item.date}</Text>
                            </View>

                            {/* Last View - Takes only required space */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <TimerIcon color={item.status === 'pending' ? Colors.gold : 'green'} />
                                <Text
                                    style={{
                                        color: item.status === 'pending' ? Colors.gold : 'green',
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontFamily: 'OpenSans',
                                    }}
                                >
                                    {item.status}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </>
    )
}



export default AllTask