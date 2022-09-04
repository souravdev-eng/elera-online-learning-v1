import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {colors, fonts_Family, fonts_Size, Icons} from '../theme';
import {RootStackParamList, Type} from './types';

import MyCourseScreen from '../screens/MyCourseScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InboxScreen from '../screens/InboxScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.light.primary,
        tabBarInactiveTintColor: colors.light.grey,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 8,
          borderTopWidth: 0,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.medium - 1,
          },
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? Icons.Home : Icons.HomeOutline}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Course'}
        component={MyCourseScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.medium - 1,
          },
          tabBarLabel: 'My Course',
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? Icons.Grid : Icons.GridOutline}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Type.Inbox}
        component={InboxScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.medium - 1,
          },
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? Icons.Message : Icons.MessageOutline}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Type.Cart}
        component={CartScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.medium - 1,
          },
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? Icons.Cart : Icons.CartOutline}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Type.Profile}
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.medium - 1,
          },
          tabBarIcon: ({color, size, focused}) => (
            <Image
              source={focused ? Icons.Person : Icons.PersonOutline}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
