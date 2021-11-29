import { Dispatch } from "redux";
import api from "store/axiosConfig";
import { User } from "store/types/authTypes";
import { LOAD_USER_LIST } from "store/types/usersTypes";

export const loadUsers = () => async (dispatch: Dispatch) => {
    try {
        dispatch(loadUsersStart());
        //TODO: Fetch user list and dispatch it 
        const { data } = await api.get('users'); 
        debugger
        dispatch(loadUsersSuccess(data))
    } catch (error) {
        dispatch(loadUsersFailed(error as string));
    }
}

const loadUsersStart = () => ({
    type: LOAD_USER_LIST
})

const loadUsersFailed = (error: string) => ({
    type: LOAD_USER_LIST,
    payload: { error }
})
const loadUsersSuccess = (users: Array<User>) => ({
    type: LOAD_USER_LIST,
    payload: { users }
})