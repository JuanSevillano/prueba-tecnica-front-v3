import { Card } from "@material-ui/core";
import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUsers } from "store/actions/users";

const UserList: FC<{}> = () => {

    const dispatch = useDispatch();

    useEffect(() => { dispatch(loadUsers()) }, [dispatch])


    return (
        <Card>

            USers
        </Card>

    )
}

export default UserList