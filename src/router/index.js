import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Home, Kuliahku, Tiketku, Profile} from '../pages';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fc8c03',
        inactiveTintColor: '#E8E8E8',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Kuliahku"
        component={Kuliahku}
        options={{
          tabBarLabel: 'Kuliahku',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tiketku"
        component={Tiketku}
        options={{
          tabBarLabel: 'Tiketku',
          tabBarIcon: ({color, size}) => (
            <Icon name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
