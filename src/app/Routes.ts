import { ComponentType } from "react";
import Login from "pages/Login";
import UserList from "pages/UserList";

export interface RouteI {
    url: string
    label: string
    view: ComponentType<any>
}

export const Routes: Array<RouteI> = [
    {
        url: '/login',
        label: 'Iniciar Sesión',
        view: Login
    },
    {
        url: '/users',
        label: 'Listado',
        view: UserList
    }
]