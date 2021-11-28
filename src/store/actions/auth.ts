import { Dispatch } from "redux";
import api from "store/axiosConfig";
import {
    Creds,
    LOAD_PREV_SESSION,
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
        const user: User = { token, email };
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
