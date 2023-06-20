import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { StateProps } from '../types/select.types';


const selectCourse = (state: StateProps) => state.course;

const selectCreatorCourseData = createSelector(
    selectCourse,
    (creatorCourse) => creatorCourse?.creatorCourseList
);

const selectCreatorCourseList = createSelector(
    selectCreatorCourseData,
    (creatorCourse) => creatorCourse.creatorCourseList
);

const selectCreatorCourseLoading = createSelector(
    selectCreatorCourseData,
    (creatorCourse) => creatorCourse.loading
);

const selectCreatorCourseError = createSelector(
    selectCreatorCourseData,
    (creatorCourse) => creatorCourse.error
);


export default () => {
    const creatorCourseList = useSelector(selectCreatorCourseList);
    const creatorCourseLoading = useSelector(selectCreatorCourseLoading);
    const creatorCourseError = useSelector(selectCreatorCourseError);

    return { creatorCourseList, creatorCourseLoading, creatorCourseError }
}