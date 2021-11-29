import { List, ListItem } from "@material-ui/core";
import UserCard from "components/UserCard";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { loadUsers } from "store/actions/users";
import { User } from "store/types/authTypes";

const UserList: FC<{}> = () => {

    const users: any = useSelector<AppState>(state => state.users.users);

    const dispatch = useDispatch();

    useEffect(() => { dispatch(loadUsers()) }, [dispatch])

    useEffect(() => {
        
    }, [users])


    return (
        <List>
            {

                users.map((user: User) => (
                    <ListItem>
                        <UserCard {...user} />
                    </ListItem>
                ))
            }

        </List>


    )
}

export default UserList