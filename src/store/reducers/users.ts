import { User } from "store/types/authTypes";
import { UserDispatchActions } from "store/types/usersTypes";

interface UsersI {
    users: Array<User>
    isFetching: boolean
}

const intialState: UsersI = {
    users: [],
    isFetching: false
}

const usersReducer = (state: UsersI = intialState, action: UserDispatchActions): UsersI => {
    switch (action.type) {

        default: return state
    }
}

export default usersReducer