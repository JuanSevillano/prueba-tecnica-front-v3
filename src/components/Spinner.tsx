import { Box } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

import colorfulLogo from '../assets/color_logo.svg';

const StyledSpinner = styled(Box)`
${({ theme }) => `
    position: 'absolute'; 
    width: 100vw; 
    width; 100vh; 
    background-color: ${theme.palette.background.default};
    top: 0; 
    left: 0; 
    display: flex; 
    align-items:center; 
    justify-content: center; 

    section {
        width: 100%;
        height: 100%; 
        max-height: 300px;
        max-width: 200px; 
        background: url('${colorfulLogo}');
        background-size: cover;
    }
`}`;


interface SpinnerProps {
    loading: boolean
}

const Spinner: FC<SpinnerProps> = ({ loading }) => {
    return (
        <StyledSpinner>
            <section></section>
        </StyledSpinner>
    )
}

export default Spinner