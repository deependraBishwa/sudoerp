import { View, Image, TouchableOpacity } from 'react-native'
import { Tabs } from 'expo-router'
import { BellIcon, HomeIcon, PlusIcon, UserRound } from 'lucide-react-native'
import Colors from '@/colors/colors'


export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.main_color }} >
      <Tabs.Screen name='index' options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        title: "Home"
      }} />

      <Tabs.Screen name='task' options={{
        title: "Tasks",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: Colors.screen_background,
          
        },
        headerRight:()=> (
          <BellIcon style={{marginEnd: 16}} size={30} color={'black'}/>
        ),
        tabBarIcon: ({ color }) => 
        (<Image style={{ width: 24, height: 24 }} source={require('../../assets/icons/task.png')} tintColor={color} />)
      }} />


      <Tabs.Screen name='tab_center' options={{
        headerShown: false,
        title: '',
        tabBarItemStyle: {
          position: 'fixed',
          bottom: 20,
        },
        tabBarIcon: ({ color }) =>
          <View style={{
            width: 75,
            height: 75,
            borderRadius: "50%",
            backgroundColor: Colors.main_color,
            // marginBottom: 50,
            borderColor: '#dddddd',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 5
          }}>
            <PlusIcon color={'white'} />
          </View>
      }} />


      <Tabs.Screen name='services'
        options={{
          headerShown: true,
          headerTintColor: 'white',
          headerRight: () => (
            <TouchableOpacity>
              <BellIcon style={{
                marginEnd: 16,
              }} color={'white'} fill={'white'} />
            </TouchableOpacity>

          ),
          headerStyle: {
            marginEnd: 16,
            backgroundColor: Colors.main_color,
          },
          tabBarIcon: ({ color }) =>
            <Image source={require("../../assets/images/category.png")} style={{
              width: 24,
              height: 24,
              tintColor: color
            }} />
        }} />
      <Tabs.Screen name='profile' options={{
        headerShown: false,
        tabBarIcon: ({ color }) => <UserRound color={color} />
      }} />
    </Tabs>
  )
}