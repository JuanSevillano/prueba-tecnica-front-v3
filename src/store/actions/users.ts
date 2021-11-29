import { Dispatch } from "redux";
import api from "store/axiosConfig";
import { User } from "store/types/authTypes";
import { LOAD_USER_LIST, LOAD_USER_LIST_FAILED, LOAD_USER_LIST_SUCCESS } from "store/types/usersTypes";

export const loadUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loadUsersStart());

        const { data } = await api.get('users');
        const userlist: Array<User> = Object.values(data.data);
        dispatch(loadUsersSuccess(userlist))

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
const loadUsersSuccess = (users: Array<User>) => ({
    type: LOAD_USER_LIST_SUCCESS,
    payload: { users }
})