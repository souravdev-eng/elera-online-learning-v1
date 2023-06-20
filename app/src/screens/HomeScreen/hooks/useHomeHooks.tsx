import { useEffect } from 'react';
import { useAppNavigation } from '../../../hooks/useAppNavigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import {
  getCourseList,
  showMyCourseAction,
} from '../../../store/actions/course.action';
import { getCreatorList } from '../../../store/actions/creator.action';
import { useUserSelector } from '../../../store';

export const useHomeHook = () => {
  const { navigation } = useAppNavigation();
  const { userToken } = useUserSelector()
  const { data } = useAppSelector(state => state.user);
  const { creatorList } = useAppSelector(state => state.creator);
  const { courseList } = useAppSelector(state => state.course);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userToken) {
      dispatch(getCourseList({ token: userToken }));
      dispatch(showMyCourseAction({ token: userToken }));
      dispatch(getCreatorList({ token: userToken }));
    }
  }, [dispatch, userToken]);

  const navigateToCourseDetail = (id: string) => {
    navigation.navigate('CourseDetails', { id });
  };

  const navigateToCreatorProfile = (id: string) => {
    navigation.navigate('AuthorProfile', { id });
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
