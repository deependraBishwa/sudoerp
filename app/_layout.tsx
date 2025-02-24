import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';



import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/colors/colors';
import { Check, ChevronLeft, PlusIcon } from 'lucide-react-native';
import { Alert, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf")


  });
  const hookRouter = useRouter()

  const plusIconOnPress = () => {

    Alert.alert('Leave Form')

  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack >
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Screens/LeaveScreen"

          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.1} // Adjust responsiveness
                style={{
                  padding: 10,
                }}
                onPress={() => router.push("Screens/LeaveForm")}
              >
                <AntDesign name="plus" size={24} color="white" />
              </TouchableOpacity>
            ),
            title: 'Leave',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: Colors.main_color
            }
          }}
        />
         <Stack.Screen name="Screens/LeaveForm"
          options={{
            headerShadowVisible: false,
            title: 'Leave Request Form',
            headerTintColor: 'black',
            headerStyle: {
              backgroundColor: Colors.screen_background
            }
          }} />

        <Stack.Screen name="Screens/ReportScreen"
          options={{
            headerShadowVisible: false,
            title: 'Report',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: Colors.main_color
            }
          }} />
        <Stack.Screen
          name="Screens/TaskDetail"
          options={{
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity

                onPress={() => Alert.alert('Task Deleted')}>
                <Check color={"black"} />
              </TouchableOpacity>
            ),
            headerShadowVisible: false,
            title: '',
            // headerTintColor: 'white',
            headerTintColor: 'black',
            headerStyle: {
              backgroundColor: Colors.screen_background
            }
          }}
        />

        <Stack.Screen name="Screens/AttendanceScreen"
          options={{
            headerShadowVisible: false,
            title: 'Attendance',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: Colors.main_color
            }
          }}
        />
        <Stack.Screen name="(home_tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword"

          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: Colors.main_color
            }
          }} />
        <Stack.Screen name='Notifications'
          options={{

            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#dddddd"
            }
          }} />
        {/* <Stack.Screen name="tabscreen" options={{ headerShown: false }} /> */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
