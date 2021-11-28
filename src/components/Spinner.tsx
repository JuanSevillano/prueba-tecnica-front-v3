import { Box } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

import colorfulLogo from '../assets/color_logo.svg';

const StyledSpinner = styled(Box)`
${({ theme }) => `

    position: absolute; 
    width: 100%; 
    height: 100%; 
    background-color: ${theme.palette.background.default};
    top: 0; 
    left: 0; 
    display: flex; 
    align-items:center; 
    justify-content: center; 
    
    span {
        animation: App-logo-fade 1s ease-in-out;
        width: 100%;
        height: 100%; 
        max-height: 300px;
        max-width: 130px; 
        background: url('${colorfulLogo}');
        background-size: contain;
        background-position: center; 
        background-repeat: no-repeat;
    }   
    
    @keyframes App-logo-fade {
        from {
            opacity: 0;
            transform: translateY(15px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

`}`;


interface SpinnerProps {
    loading: boolean
}

const Spinner: FC<SpinnerProps> = ({ loading }) => {

    if (!loading) return null

    return (
        <StyledSpinner className="spinner">
            <span></span>
        </StyledSpinner>
    )
}

export default Spinner