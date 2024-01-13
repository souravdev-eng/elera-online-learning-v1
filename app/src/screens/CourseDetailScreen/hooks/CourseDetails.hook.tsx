import React from 'react';
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { useUserSelector } from '../../../store';
import { addBookMarkAction } from '../../../store/actions/bookMarks.action';

export const useCourseDetailsHook = () => {
    const { bookMarks } = useAppSelector(state => state.bookMarked);
    const { userToken } = useUserSelector();
    const dispatch = useAppDispatch();

    const handleAddToCart = (courseId: string) => {
        dispatch(addBookMarkAction({ token: userToken!, courseId: courseId }))
    }

    const checkIsBookedMark = (item: any): Boolean => {
        // console.log({ item, bookMarks })
        return bookMarks && bookMarks?.includes(item?.id) ? true : false
    }

    return { handleAddToCart, checkIsBookedMark, bookMarks }
}