import {View, FlatList} from 'react-native';
import React from 'react';
import {CourseListData} from '../../assets/data/courseList.data';
import MyCourseCard from '../../components/MyCourseCard';
import {OngoingCourseData} from '../../assets/data/ongoingCourse';

const OngoingCourse = () => {
  return (
    <View style={{flex: 1, alignSelf: 'center', backgroundColor: '#fff'}}>
      <FlatList
        data={OngoingCourseData}
        renderItem={({item}) => <MyCourseCard {...item} />}
      />
    </View>
  );
};

export default OngoingCourse;
