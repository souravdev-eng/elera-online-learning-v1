import {View, Text, FlatList} from 'react-native';
import React from 'react';
import MyCourseCard from '../../../components/MyCourseCard';
import {OngoingCourseData} from '../../../assets/data/ongoingCourse';
import {CompleteCourseData} from '../../../assets/data/completeCourse';

const CompleteCourse = () => {
  return (
    <View style={{flex: 1, alignSelf: 'center', backgroundColor: '#fff'}}>
      <FlatList
        data={CompleteCourseData}
        renderItem={({item}) => <MyCourseCard {...item} />}
      />
    </View>
  );
};

export default CompleteCourse;
