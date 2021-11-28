import { Dispatch } from "redux";
import api from "store/axiosConfig";
import { Creds, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, User } from "store/types/authTypes";

export const SignIn = (creds: Creds) => async (dispatch: Dispatch) => {

    dispatch(SignInStart());
    debugger
    const { email, password } = creds;

    const body = {
        email,
        password
    };

    const { data } = await api.post('login/', body);

    if (data) {
        SignInSuccess(data);
        debugger
    }

    if (data.error) {
        debugger
        SignInFailed(data.error)
    }

}

const SignInStart = () => ({
    type: SIGN_IN
})

const SignInFailed = (error: string) => ({
    type: SIGN_IN_FAILED,
    payload: { error }
})

const SignInSuccess = (user: User) => ({
    type: SIGN_IN_SUCCESS,
    payload: { user }
})