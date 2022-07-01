import React from 'react';
import styles from './styles';
import CompleteCourse from '../CompleteCourse';
import OngoingCourse from '../OngoingCourseScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, fonts_Family, fonts_Size, Icons} from '../../theme';
import {Image, Text, View} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MyCourseScreen = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 12,
          backgroundColor: '#fff',
        }}>
        <View style={styles.row}>
          <Image source={Icons.logoWhite} style={styles.logo} />
          <Text style={styles.title}>My Courses</Text>
        </View>
        <View style={styles.row}>
          <Image source={Icons.Search} style={styles.icon} />
          <Image source={Icons.More} style={styles.icon} />
        </View>
      </View>
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
