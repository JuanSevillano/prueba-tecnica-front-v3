import { UsersI } from "store/reducers/users";

export const LOAD_USER_LIST = 'LOAD_USER_LIST';
export const LOAD_USER_LIST_FAILED = 'LOAD_USER_LIST_FAILED';
export const LOAD_USER_LIST_SUCCESS = 'LOAD_USER_LIST_SUCCESS';

export const CHANGE_PAGE_START = 'CHANGE_PAGE_START';
export const CHANGE_PAGE_FAILED = 'CHANGE_PAGE_FAILED';
export const CHANGE_PAGE_SUCCESS = 'CHANGE_PAGE_SUCCESS';

export interface ChangePageStart {
    type: typeof CHANGE_PAGE_START
}

export interface ChangePageFailed {
    type: typeof CHANGE_PAGE_FAILED
    payload: { error: string }
}

export interface ChangePageSuccess {
    type: typeof CHANGE_PAGE_SUCCESS
    payload: { viewData: UsersI }
}


export interface LoadUsers {
    type: typeof LOAD_USER_LIST
}

export interface LoadUsersFailed {
    type: typeof LOAD_USER_LIST_FAILED
    payload: { error: string }
}

export interface LoadUserSuccess {
    type: typeof LOAD_USER_LIST_SUCCESS
    payload: { viewData: UsersI }
}

export interface NextPage {
    type: typeof LOAD_USER_LIST_SUCCESS
    payload: { viewData: UsersI }
}

export type UserDispatchActions =
    LoadUsers |
    LoadUserSuccess |
    LoadUsersFailed |
    ChangePageStart |
    ChangePageFailed |
    ChangePageSuccess