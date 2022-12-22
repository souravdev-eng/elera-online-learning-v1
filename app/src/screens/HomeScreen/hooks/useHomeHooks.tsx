import React, {useEffect} from 'react';
import {useAppNavigation} from '../../../hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {
  getCourseList,
  showMyCourseAction,
} from '../../../store/actions/course.action';
import {getCreatorList} from '../../../store/actions/creator.action';

export const useHomeHook = () => {
  const {navigation} = useAppNavigation();
  const {data} = useAppSelector(state => state.user);
  const {creatorList} = useAppSelector(state => state.creator);
  const {courseList} = useAppSelector(state => state.course);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data !== null) {
      dispatch(getCourseList({token: data?.token}));
      dispatch(showMyCourseAction({token: data?.token}));
      dispatch(getCreatorList({token: data?.token}));
    }
  }, [dispatch, data]);

  const navigateToCourseDetail = (id: string) => {
    navigation.navigate('CourseDetails', {id});
  };

  const navigateToCreatorProfile = (id: string) => {
    navigation.navigate('AuthorProfile', {id});
  };

  return {
    data,
    navigation,
    creatorList,
    courseList,
    navigateToCourseDetail,
    navigateToCreatorProfile,
  };
};
