import { View, Text, FlatList } from 'react-native'
import React, { SetStateAction, useState } from 'react'
import { TimerIcon } from 'lucide-react-native'
import ExpoCheckbox from 'expo-checkbox/build/ExpoCheckbox';
import Colors from '@/colors/colors';

const todayData = [
    {checked: false, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
    {checked: true, des: "Redesign of pixel mobile application", status: "Pending", date: '2024-10-02'},
]
const PendingTask = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [taskCount, setTaskCount] = useState('');

    const handlePress = (index: SetStateAction<number>) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <FlatList
                style={{
                    marginBottom: 32,
                }}
                data={todayData}
                keyExtractor={({ item, index }) => index}
                renderItem={({ item }) => (
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
                            <TimerIcon color={Colors.gold} />
                            <Text
                                style={{
                                    color: Colors.gold, fontSize: 16,
                                    fontWeight: 'heavy',
                                    fontFamily: 'OpenSans',
                                }}>{item.status}</Text>
                        </View>
                    </View>
                )} />

        </>
    )
}

export default PendingTask