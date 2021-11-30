
import { Box } from "@material-ui/core";
import Nav from "components/Nav";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import { AppState } from "store";

import styled from "styled-components";

const StyledLayout = styled(Box)`
${({ theme }) => `
    height:100%;
    width: 100%;
    background-color: ${theme.palette.background.default}
`}`;

const AppLayout: FC<{}> = ({ children }) => {


    const { user, isAuthenticated }: any = useSelector<AppState>(state => state.auth);


    const [open, setOpen] = useState<boolean>(false);
    const navOpenerHandler = () => setOpen(prev => !prev);

    return (
        <StyledLayout>
            <Nav
                key='nav bar'
                open={open}
                user={user}
                onClose={navOpenerHandler}
                isAuthenticated={isAuthenticated}
            />
            {children}

        </StyledLayout>
    )
}


export default AppLayout