import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import AboutCourse from '../components/AboutCourse';
import CourseLesson from '../components/CourseLesson';
import CourseReview from '../components/CourseReview';

import {colors, fonts_Family, fonts_Size} from '../theme';

const Tab = createMaterialTopTabNavigator();

const CourseDetailsTopNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: 'transparent',
        tabBarLabelStyle: {
          fontFamily: fonts_Family.UrbanistSemiBold,
          fontSize: fonts_Size.body + 1,
          textTransform: 'capitalize',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.light.primary,
          height: 4,
          borderRadius: 8,
        },
        tabBarActiveTintColor: colors.light.primary,
        tabBarInactiveTintColor: colors.light.grey1,
      }}>
      <Tab.Screen name="About" component={AboutCourse} />
      <Tab.Screen name="Lessons" component={CourseLesson} />
      <Tab.Screen name="Reviews" component={CourseReview} />
    </Tab.Navigator>
  );
};

export default CourseDetailsTopNavigation;
