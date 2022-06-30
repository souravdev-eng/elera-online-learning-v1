import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Type} from './types';

import MostPopularCourseScreen from '../screens/MostPopularCourseScreen';
import MyBookMarksScreen from '../screens/MyBookMarksScreen';
import TopMentorsScreen from '../screens/TopMentorsScreen';
import {BottomTabNavigation} from './BottomTabNavigation';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import ProfileUpdateScreen from '../screens/ProfileUpdateScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginWithPassword from '../screens/Auth/LogInWithPassword';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {
  const token = null;
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Type.CourseDetails}>
      {!token ? (
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
          {/* <Stack.Screen
            name={Type.ProfileUpdate}
            component={ProfileUpdateScreen}
          /> */}
          <Stack.Screen name={Type.Main} component={BottomTabNavigation} />
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
        </>
      )}
    </Stack.Navigator>
  );
};
