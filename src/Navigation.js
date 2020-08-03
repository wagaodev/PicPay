import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  
  Wallet: {
    lib: Entypo,
    name: 'wallet'
  },

  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },

  Settings: {
    lib: MaterialCommunityIcons,
    name: 'settings-outline'
  },

}

export default function Navigation(){
  return(
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if(route.name === 'Pay' ){
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            )
          }
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#f8f8f8',
          borderTopColor: '#c1c1c1'
        },
        activeTintColor: '#32a859',
        inactiveTintColor: '#565957'
      }}
    
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio'
        }}
      />
      <Tab.Screen 
        name="Wallet"
        component={WalletScreen} 
        options={{
          title: 'Carteira'
        }}
      />
      <Tab.Screen 
        name="Pay"
        component={PayScreen}
        options={{
          title: ' '
        }}
      />
      <Tab.Screen 
        name="Notifications"
        component={PayScreen}
        options={{
          title: 'Notificações'
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={PayScreen}
        options={{
          title: 'Ajustes'
        }}
      />
    </Tab.Navigator>
  );
};