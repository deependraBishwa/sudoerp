import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/colors/colors'

const ReportScreen = () => {
  return (
    <View style={{ flex: 1, }}>
        <View style={{width: '100%', height: 100, backgroundColor: Colors.main_color}}/>
        <View style={{width: '90%', height: 200, backgroundColor: 'white', position: 'absolute', top: 50, borderRadius: 10, padding: 10, alignSelf: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Task Static</Text>
        </View>
    </View>
  )
}

export default ReportScreen