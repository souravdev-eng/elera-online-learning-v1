import React from 'react';
import {View, FlatList} from 'react-native';
import {Loading, MyCourseCard, EmptyMessage} from '../../../components';

import {useAppSelector} from '../../../hooks/useRedux';
import {useAppNavigation} from '../../../hooks/useAppNavigation';
import {MyCourseInterface} from '../../../store/types/course.types';

const OngoingCourse = () => {
  const {myCourse, loading} = useAppSelector(state => state.user);
  const {navigation} = useAppNavigation();

  const renderItem = ({course}: MyCourseInterface) => {
    return (
      <MyCourseCard
        key={course.title}
        title={course.title}
        image={course.image}
        completePercentage={1}
        hrs={course.durationHours}
        mins={30}
        videoComplete={0}
        videoNumber={course?.lessons?.length}
        onPress={() => navigation.navigate('MyCourseDetails', {id: course?.id})}
      />
    );
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : myCourse.length > 0 ? (
        <View style={{flex: 1, alignSelf: 'center', backgroundColor: '#fff'}}>
          <FlatList data={myCourse} renderItem={({item}) => renderItem(item)} />
        </View>
      ) : (
        <EmptyMessage message={"You don't have any ongoing course"} />
      )}
    </>
  );
};

export default OngoingCourse;
