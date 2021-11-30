import { Box, Typography } from "@material-ui/core";
import UserCard from "components/UserCard";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { loadUsers } from "store/actions/users";
import { User } from "store/types/authTypes";
import styled from "styled-components";
import Pagination from '@material-ui/lab/Pagination';
import { Skeleton } from "@material-ui/lab";


const StyledList = styled(Box)`
${({ theme }) => `
        width: 100%;
        padding: 20px;
        max-width: 300px;
        margin: auto;
        .pagination ul {
            justify-content: center;
        }
`}`;


const UserList: FC<{}> = () => {

    const dispatch = useDispatch();
    const {
        page,
        users,
        total,
        per_page,
        isFetching,
        total_pages
    }: any = useSelector<AppState>(state => state.users);


    useEffect(() => { dispatch(loadUsers()) }, [dispatch])

    const paginationHandler = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(loadUsers(value))
    }


    return (
        <StyledList>
            {
                isFetching ?? <Skeleton />
            }
            <Typography color="primary">Listado - ({total})</Typography>
            {

                users.map((user: User, index: number) => (
                    <UserCard
                        {...user}
                        delay={index}
                        key={user.email} />
                )).filter((el: typeof UserCard, index: number) => index <= per_page)
            }
            <Pagination
                onChange={paginationHandler}
                className="pagination"
                key='pagination'
                variant="outlined"
                shape="rounded"
                page={page}
                count={total_pages} />
        </StyledList>


    )
}

export default UserList