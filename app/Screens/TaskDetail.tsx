import { View, Text, StatusBar, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Colors from '@/colors/colors';
import { ChevronLeft } from 'lucide-react-native';

const TaskDetail = () => {


  const params = useLocalSearchParams<{ des: string, status: string }>();

  return (
    
    <View style={styles.container}>
      <View style={
        styles.box
      }>
        <Text style={
          styles.title
        }>{params.des}</Text>
        <Text style={
          styles.description
        }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, voluptas perspiciatis et vitae tempora a? Officia nemo, pariatur ad provident suscipit iusto aliquid nam hic sequi, sunt consequuntur in culpa! Aut earum dicta commodi, tenetur eveniet nisi voluptate exercitationem, quasi, doloremque corporis amet. Dolorum nisi iusto tenetur minus voluptate facilis magnam corporis hic deserunt, non aut ipsa cum animi voluptates praesentium consequuntur et maxime fugiat quisquam tempora mollitia libero incidunt earum omnis. Minima, possimus quos explicabo repellendus similique tempore officia error soluta fugiat, fugit, consectetur exercitationem earum quo accusantium! Fugit culpa quidem voluptatibus magnam nobis deserunt laudantium voluptate natus ad.</Text>
        <View style={{backgroundColor: Colors.lignt_gray, width: '100%', height: 1}}></View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', display: 'flex', marginTop: 16}}>
          <Text style={{color:'gray'}}>Project</Text>
          <Text style={{ textAlign:'right'}}>Pixel Web Application</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', display: 'flex', marginTop: 16}}>
          <Text style={{color:'gray'}}>From</Text>
          <Text style={{ textAlign:'right'}}>06/19/2023 to 06/19/2023</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', display: 'flex', marginTop: 16}}>
          <Text style={{color:'gray'}}>Estimated Hours</Text>
          <Text style={{ textAlign:'right'}}>8 Hrs</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-between', display: 'flex', marginTop: 16}}>
          <Text style={{color:'gray'}}>Status</Text>
          <Text style={{ textAlign:'right', color: params.status == "completed" ? 'green' : Colors.dark_yellow}}>{params.status}</Text>
        </View>
        
      </View>
    
    
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  description:{
    marginTop: 8,
    color: 'gray',
    fontSize: 16,
    textAlign: 'justify'
  }
  ,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
  ,
  box: {
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 24,
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    alignSelf: 'center',
    backgroundColor: 'white',
  }
  
});
export default TaskDetail