import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Loading, MyCourseCard} from '../../../components';
import {MyCourseInterface} from '../../../store/types/course.types';
import {useAppSelector} from '../../../hooks/useRedux';

const OngoingCourse = () => {
  const {myCourse, loading} = useAppSelector(state => state.user);

  const renderItem = ({course}: MyCourseInterface) => {
    return (
      <MyCourseCard
        title={course.title}
        image={course.image}
        completePercentage={1}
        hrs={course.durationHours}
        mins={30}
        videoComplete={0}
        videoNumber={course?.lessons?.length}
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
        <Text>No course found</Text>
      )}
    </>
  );
};

export default OngoingCourse;
