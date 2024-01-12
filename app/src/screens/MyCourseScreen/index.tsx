import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, fonts_Family, fonts_Size} from '../../theme';

import LogoHeader from '../../components/LogoHeader';
import OngoingCourse from './OngoingCourseScreen';
import CompleteCourse from './CompleteCourse';

const Tab = createMaterialTopTabNavigator();

const MyCourseScreen = () => {
  return (
    <>
      <LogoHeader title="My Courses" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            width: '100%',
            alignSelf: 'center',
            elevation: 6,
            paddingHorizontal: 10,
          },
          tabBarPressColor: 'transparent',
          tabBarLabelStyle: {
            fontFamily: fonts_Family.UrbanistSemiBold,
            fontSize: fonts_Size.h4,
            textTransform: 'capitalize',
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.light.primary,
            height: 4,
            borderRadius: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            width: '45%',
            marginLeft: '2%',
            alignSelf: 'center',
          },
          tabBarActiveTintColor: colors.light.primary,
          tabBarInactiveTintColor: colors.light.grey1,
        }}>
        <Tab.Screen name="Ongoing" component={OngoingCourse} />
        <Tab.Screen name="Complete" component={CompleteCourse} />
      </Tab.Navigator>
    </>
  );
};

export default MyCourseScreen;
