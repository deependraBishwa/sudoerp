import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Notifications = () => {
    return (
        <ScrollView style={{
            backgroundColor: '#dddddd',
            paddingHorizontal: 16,
        }}>
            <Text style={{
                marginTop: 8,
                fontSize: 20
            }}>Today</Text>

            <View style={{
                flex: 1,
                height: 150,
                marginTop: 12,
                borderRadius: 8,
                backgroundColor: 'white',
            }}>

            </View>

        </ScrollView>
    )
}

export default Notifications