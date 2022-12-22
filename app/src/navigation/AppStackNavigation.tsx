import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Type} from './types';

import {BottomTabNavigation} from './BottomTabNavigation';
import {useAppSelector} from '../hooks/useRedux';

import {
  MostPopularCourseScreen,
  LoginWithPassword,
  ProfileUpdateScreen,
  CourseDetailScreen,
  MyBookMarksScreen,
  TopMentorsScreen,
  SignupScreen,
  LoginScreen,
  SearchScreen,
  ChatScreen,
  PaymentScreen,
} from '../screens';
import AuthorProfileScreen from '../screens/AuthorProfile';
import MyCourseDetails from '../screens/MyCourseDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {
  const {data} = useAppSelector(state => state.user);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Type.MyCourseDetails}>
      {!data ? (
        <>
          <Stack.Screen name={Type.Login} component={LoginScreen} />
          <Stack.Screen name={Type.Signup} component={SignupScreen} />
          <Stack.Screen
            name={Type.LoginWithPassword}
            component={LoginWithPassword}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name={Type.ProfileUpdate}
            component={ProfileUpdateScreen}
          />
          <Stack.Screen name={Type.Main} component={BottomTabNavigation} />
          <Stack.Screen name={Type.Chat} component={ChatScreen} />
          <Stack.Screen name={Type.TopMentors} component={TopMentorsScreen} />
          <Stack.Screen name={Type.MyBookmarks} component={MyBookMarksScreen} />
          <Stack.Screen
            name={Type.MostPopularCourse}
            component={MostPopularCourseScreen}
          />
          <Stack.Screen name={Type.Search} component={SearchScreen} />
          <Stack.Screen
            name={Type.CourseDetails}
            component={CourseDetailScreen}
          />
          <Stack.Screen name={Type.Payment} component={PaymentScreen} />
          <Stack.Screen
            name={Type.AuthorProfile}
            component={AuthorProfileScreen}
          />
          <Stack.Screen
            name={Type.MyCourseDetails}
            component={MyCourseDetails}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
