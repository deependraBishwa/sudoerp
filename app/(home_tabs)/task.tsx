import { View, Text, ScrollView, StatusBar } from 'react-native'
import React, { SetStateAction, useEffect, useState } from 'react'
import { FilterIcon } from 'lucide-react-native'
import ButtonGroup from '@/components/ButtonGroup';
import Colors from '@/colors/colors';
import AllTask from '@/components/task/AllTask';
import CompletedTask from '@/components/task/CompletedTask';
import PendingTask from '@/components/task/PendingTask';



const task = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [taskCount, setTaskCount] = useState('');

  useEffect(() => {
    setSelectedIndex(0);
  }, []);

  const handlePress = (index: SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <View style={{
        backgroundColor: Colors.screen_background,
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <StatusBar barStyle={'dark-content'} />
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 16,

        }}>
          <ButtonGroup
            selectedIndex={selectedIndex}
            buttons={["All", "Pending", "Completed"]}
            onSelect={handlePress}
          />
        </View>
        <View style={{
          padding: 8,
          backgroundColor: 'white',
          borderRadius: 8,
          borderColor: 'gray',
          borderWidth: 1
        }}><FilterIcon color={'gray'} /></View>


      </View>
      <ScrollView style={{
        backgroundColor: Colors.screen_background
      }}>

        <View style={{
          width: '90%',
          marginHorizontal: 'auto'
        }}>

          {(selectedIndex == 0) ? <AllTask /> : (selectedIndex == 1) ? <PendingTask/> : <CompletedTask/>}
          
        </View>
      </ScrollView>
    </>

  )
}



export default task