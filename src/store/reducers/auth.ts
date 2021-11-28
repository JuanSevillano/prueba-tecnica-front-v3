import { AuthDispatchActions, LoadPrevSession, LOAD_PREV_SESSION, SignInFailed, SignInStart, SignInSuccess, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, User, USER_SESSION } from "store/types/authTypes";
import { getPersistance, savePersistance } from "utils/persistance";

export interface AuthState {
    user: User
    isFetching: boolean
    isAuthenticated: boolean
    error: string
}

const initialState: AuthState = {
    user: {} as User,
    isFetching: false,
    isAuthenticated: false,
    error: ''
}

const signIngStart = (state: AuthState, action: SignInStart): AuthState => {
    return {
        ...state,
        isFetching: true
    }
}


const signInSuccess = (state: AuthState, action: SignInSuccess): AuthState => {

    const { user } = action.payload;

    const updatedState: AuthState = {
        ...state,
        user,
        isFetching: false,
        isAuthenticated: true
    }

    savePersistance(USER_SESSION, updatedState);

    return updatedState
}

const signInFailed = (state: AuthState, action: SignInFailed): AuthState => {

    const { error } = action.payload;

    const updatedState: AuthState = {
        ...state,
        isFetching: false,
        error: error
    }

    return updatedState
}

const loadPrevSession = (state: AuthState, action: LoadPrevSession): AuthState => {

    const prevState: AuthState = getPersistance(USER_SESSION);
    if (prevState) return prevState

    return state
}


const authReducer = (state: AuthState = initialState, action: AuthDispatchActions): AuthState => {
    switch (action.type) {
        case SIGN_IN: return signIngStart(state, action);
        case SIGN_IN_FAILED: return signInFailed(state, action);
        case SIGN_IN_SUCCESS: return signInSuccess(state, action);
        case LOAD_PREV_SESSION: return loadPrevSession(state, action);
        default: return state;
    }
}

export default authReducer;