import { CourseStateProp } from "../reducers/course.reducer";
import { OrderStateProp } from "../reducers/order.reducers";
import { UserProps } from "../reducers/user.reducer";
import { CreatorStateProps } from "./creator.types";

export interface StateProps {
    user: UserProps;
    creator: CreatorStateProps;
    course: CourseStateProp;
    order: OrderStateProp;
    chat: any;
}