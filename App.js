import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './src/screen/main_page';
import ProfilFarras from './src/screen/profil_page';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={{
          tabBarActiveTintColor: '#206378',
          headerShown: false,
          tabBarStyle: { position: 'absolute' },
          tabBarStyle: { height: 70, backgroundColor: '#FCFEFF', },

        }}

      >

        <Tab.Screen
          name="MainPage"
          component={MainPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="barcode-scan" color={color} size={30} />
            ),
          }} />

        <Tab.Screen
          name="Creator"
          component={ProfilFarras}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

