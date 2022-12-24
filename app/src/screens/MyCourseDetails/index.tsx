import {View} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {
  GoBack,
  Loading,
  CourseLesson,
  VirtualizedScrollView,
} from '../../components';
import {Icons} from '../../theme';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {getCourseDetailsById} from '../../store/actions/course.action';
import {RootStackParamList} from '../../navigation/types';
import styles from './styles';

type MyCourseDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  'MyCourseDetails'
>;

const MyCourseDetails = () => {
  let dispatch = useAppDispatch();
  const {params} = useRoute<MyCourseDetailsScreenRouteProp>();
  const {courseDetails, loading} = useAppSelector(state => state.course);
  const {data} = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(getCourseDetailsById({id: params.id, token: data?.token!}));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        courseDetails && (
          <VirtualizedScrollView style={styles.scrollWrapper}>
            <View style={styles.container}>
              <GoBack title={courseDetails.title} iconName={Icons.More} />
              <CourseLesson data={courseDetails} />
            </View>
          </VirtualizedScrollView>
        )
      )}
    </>
  );
};

export default MyCourseDetails;
