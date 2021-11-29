import { User } from "store/types/authTypes";
import {
    LoadUsers,
    LoadUsersFailed,
    LoadUserSuccess,
    LOAD_USER_LIST,
    LOAD_USER_LIST_FAILED,
    LOAD_USER_LIST_SUCCESS,
    UserDispatchActions
} from "store/types/usersTypes";

interface UsersI {
    users: Array<User>
    isFetching: boolean,
    error?: string
}

const intialState: UsersI = {
    users: [],
    isFetching: false
}

const loadUserStart = (state: UsersI, action: LoadUsers): UsersI => {
    return {
        ...state,
        isFetching: true
    }
}

const loadUsersFailed = (state: UsersI, action: LoadUsersFailed): UsersI => {

    const { error } = action.payload;
    const updatedState: UsersI = {
        ...state,
        error,
        isFetching: false
    }

    return updatedState
}


const loadUsersSuccess = (state: UsersI, action: LoadUserSuccess): UsersI => {

    const { users } = action.payload;
    const updatedState: UsersI = {
        ...state,
        isFetching: false,
        users: [...state.users, ...users]
    }

    return updatedState

}


const usersReducer = (state: UsersI = intialState, action: UserDispatchActions): UsersI => {
    switch (action.type) {
        case LOAD_USER_LIST: return loadUserStart(state, action);
        case LOAD_USER_LIST_FAILED: return loadUsersFailed(state, action);
        case LOAD_USER_LIST_SUCCESS: return loadUsersSuccess(state, action);
        default: return state
    }
}

export default usersReducer