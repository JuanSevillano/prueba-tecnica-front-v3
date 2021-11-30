import { Button, ButtonBaseProps } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

const StyledButton = styled(props =>
    <Button
        fullWidth
        variant="contained"
    />)`
${({ theme }) => `
    > span {
        border-radius: 0px;
        padding: ${theme.spacing(3)}px 0px; 
    }
`}`;

const ButtonCustom: FC<ButtonBaseProps> = (props: ButtonBaseProps) => (
    <StyledButton {...props} />
)

export default ButtonCustom;