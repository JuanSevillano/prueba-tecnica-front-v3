import { Dispatch } from "redux";
import api from "store/axiosConfig";
import {
    Creds,
    LOAD_PREV_SESSION,
    LOG_OUT,
    SIGN_IN,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    User
} from "store/types/authTypes";


export const LoadPrevSession = () => ({
    type: LOAD_PREV_SESSION
})
export const SignIn = (creds: Creds) => async (dispatch: Dispatch) => {
    try {

        dispatch(SignInStart());

        const { email, password } = creds;
        const body = { email, password };

        const { data } = await api.post('login/', body);
        const { token } = data;
        // Guessing user id, due to there's not endpoint for /users/token  
        const id: number = 4;


        const profile = await api.get(`users/${id}`);
        const user: User = {
            token,
            ...profile.data
        };
        dispatch(SignInSuccess(user));


    } catch (error) {
        // @ts-ignore
        const message = error.response.data.error;
        dispatch(SignInFailed(message));
    }
}

const SignInStart = () => ({
    type: SIGN_IN
})

const SignInFailed = (error: string) => ({
    type: SIGN_IN_FAILED,
    payload: { error: error }
})

const SignInSuccess = (user: User) => ({
    type: SIGN_IN_SUCCESS,
    payload: { user: user }
})


export const LogOut = () => ({
    type: LOG_OUT
})