import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Type} from './types';

import {BottomTabNavigation} from './BottomTabNavigation';
import {useAppSelector} from '../hooks/useRedux';

import MostPopularCourseScreen from '../screens/MostPopularCourseScreen';
import LoginWithPassword from '../screens/Auth/LogInWithPassword';
import ProfileUpdateScreen from '../screens/ProfileUpdateScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import MyBookMarksScreen from '../screens/MyBookMarksScreen';
import TopMentorsScreen from '../screens/TopMentorsScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStackNavigation = () => {
  const {data} = useAppSelector(state => state.user);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Type.Main}>
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
        </>
      )}
    </Stack.Navigator>
  );
};
