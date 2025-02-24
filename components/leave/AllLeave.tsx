import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '@/colors/colors'


const LeaveData = [
    { id: '0', name: 'John Doe', status: 'Approved' },
    { id: '1', name: 'John Doe', status: 'Approved' },
    { id: '2', name: 'Jane Smith', status: 'Pending' },
    { id: '3', name: 'Alice Johnson', status: 'Rejected' }
]

const AllLeave = () => {
    return (

        <FlatList
            data={LeaveData}
            renderItem={({ item }) => (
                <View style={{
                    alignSelf: 'center',
                    width: '90%',
                    padding: 8,
                    marginTop: 8,
                    marginBottom: 8,
                    borderRadius: 10,
                    backgroundColor: 'white',
                }}>

                    <View style={{
                        // marginTop: 8,
                        flexDirection: 'row',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',

                    }}>
                        <Text style={{ color: 'gray' }}>Date</Text>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 4,
                            }}>
                                <Image style={{
                                    width: 15,
                                    height: 15,
                                }} source={require("@/assets/images/vector.png")} />
                                <Text style={{
                                    color: Colors.gold
                                }}>Pending</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', display: 'flex', }}>
                        <Text>Sep 12, 2024</Text>
                        <Text> - </Text>
                        <Text>Sep 12, 2024</Text>
                    </View>
                    <View style={{
                        width: '100%',
                        marginTop: 16,
                        height: 1, backgroundColor: Colors.lignt_gray
                    }} />
                    <View style={{
                        flex: 1,
                        gap: 8,
                        flexDirection: 'row',
                        marginTop: 8,
                        width: '100%',
                    }}>
                        <View style={{
                            justifyContent: 'center',

                            flex: 1,
                            paddingVertical: 8,

                        }}>
                            <Text style={{
                                color: 'gray'
                            }}>Leave Type</Text>
                            <Text>Sick Leave</Text>

                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flex: 1,
                            paddingVertical: 8,

                        }}>
                            <Text style={{
                                color: 'gray',
                            }}>Applied Days</Text>
                            <Text style={{
                                textAlign: 'center'
                            }}>1 Days</Text>

                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            flex: 1,
                            paddingVertical: 8,

                        }}>
                            <Text style={{
                                color: 'gray'
                            }}>Approved By</Text>
                            <Text style={{ textAlign: 'right' }}>Employee Name</Text>

                        </View>


                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
        />

    )
}

export default AllLeave