import { useUserSelector } from "../../store";
import { addBookMarkAction } from "../../store/actions/bookMarks.action";
import { useAppDispatch, useAppSelector } from "../useRedux";

export const useBookMarkHook = () => {
    const { bookMarks } = useAppSelector(state => state.bookMarked);
    const { userToken } = useUserSelector();
    const dispatch = useAppDispatch();

    const handleAddAndRemoveBookMarkPress = (courseId: string) => {
        dispatch(addBookMarkAction({ token: userToken!, courseId: courseId }))
    }

    const checkIsBookedMark = (item: any) => {
        return bookMarks && bookMarks?.includes(item?.id) ? true : false
    }


    return { handleAddAndRemoveBookMarkPress, checkIsBookedMark }
}