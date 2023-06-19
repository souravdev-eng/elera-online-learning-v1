import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { StateProps } from '../types/select.types';


const selectUser = (state: StateProps) => state.user;

const selectUserData = createSelector(
    selectUser,
    (user) => user?.data?.user
);

const selectUserToken = createSelector(
    selectUser,
    (user) => user?.data?.token
);

const selectMyCourses = createSelector(
    selectUser,
    (course) => course?.myCourse
);

const selectMyBookmarks = createSelector(
    selectUser,
    (bookMark) => bookMark?.myBookMarks
);

const selectError = createSelector(
    selectUser,
    (error) => error?.error
);

const isLoading = createSelector(
    selectUser,
    (loading) => loading.loading
);

export const useUserSelector = () => {
    const userData = useSelector(selectUserData);
    const userToken = useSelector(selectUserToken);
    const myCourses = useSelector(selectMyCourses);
    const myBookmarks = useSelector(selectMyBookmarks);
    const userError = useSelector(selectError);
    const userLoading = useSelector(isLoading);

    return { userData, userToken, myCourses, myBookmarks, userError, userLoading }

}

