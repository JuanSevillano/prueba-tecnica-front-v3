import { Dispatch } from "redux";
import api from "store/axiosConfig";
import { UsersI } from "store/reducers/users";
import { User } from "store/types/authTypes";
import { LOAD_USER_LIST, LOAD_USER_LIST_FAILED, LOAD_USER_LIST_SUCCESS } from "store/types/usersTypes";

export const loadUsers = (pagination?: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(loadUsersStart());


        const endpoint = !pagination ? 'users' : `users?page=${pagination}`;
        const { data } = await api.get(endpoint);
        const userlist: Array<User> = Object.values(data.data);
        const { page, per_page, total, total_pages } = data;
        const viewData: UsersI = {
            users: userlist,
            page,
            per_page,
            total,
            total_pages
        }

        dispatch(loadUsersSuccess(viewData));

    } catch (error) {
        dispatch(loadUsersFailed(error as string));
    }
}

const loadUsersStart = () => ({
    type: LOAD_USER_LIST
})

const loadUsersFailed = (error: string) => ({
    type: LOAD_USER_LIST_FAILED,
    payload: { error }
})

const loadUsersSuccess = (viewData: UsersI) => ({
    type: LOAD_USER_LIST_SUCCESS,
    payload: { viewData }
})
