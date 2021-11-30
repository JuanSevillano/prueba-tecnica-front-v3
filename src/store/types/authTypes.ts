export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'

export const LOG_OUT = 'LOG_OUT'

export const LOAD_PREV_SESSION = 'LOAD_PREV_SESSION'

// localStorage key for User Session 
export const USER_SESSION = 'USER_SESSION'

export type Creds = {
    email: string;
    password: string;
}

export type User = {
    token: string;
    email: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

export interface SignInStart {
    type: typeof SIGN_IN
}

export interface SignInSuccess {
    type: typeof SIGN_IN_SUCCESS
    payload: { user: User }
}

export interface SignInFailed {
    type: typeof SIGN_IN_FAILED
    payload: { error: string }
}

export interface LoadPrevSession {
    type: typeof LOAD_PREV_SESSION
}

export interface LogOut {
    type: typeof LOG_OUT
}

export type AuthDispatchActions =
    SignInStart |
    SignInSuccess |
    SignInFailed |
    LoadPrevSession |
    LogOut

