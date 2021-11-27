import { Box } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

const StyledLayout = styled(Box)`
${({ theme }) => `
    height:100%;
    width: 100%;
    background-color: ${theme.palette.background.default}
`}`;

const AppLayout: FC<{}> = ({ children }) => {
    return (
        <StyledLayout>
        
            {children}
        </StyledLayout>
    )
}


export default AppLayout