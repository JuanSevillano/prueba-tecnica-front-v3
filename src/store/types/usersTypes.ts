import { User } from "./authTypes";

export const LOAD_USER_LIST = 'LOAD_USER_LIST';
export const LOAD_USER_LIST_FAILED = 'LOAD_USER_LIST_FAILED';
export const LOAD_USER_LIST_SUCCESS = 'LOAD_USER_LIST_SUCCESS';

export interface LoadUsers {
    type: typeof LOAD_USER_LIST
}

export interface LoadUsersFailed {
    type: typeof LOAD_USER_LIST_FAILED
    payload: { error: string }
}

export interface LoadUserSuccess {
    type: typeof LOAD_USER_LIST_SUCCESS
    payload: { users: Array<User> }
}

export type UserDispatchActions =
    LoadUsers |
    LoadUserSuccess |
    LoadUsersFailed