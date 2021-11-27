import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled((props) => (
	<TextField
		{...props}
		fullWidth
		variant="outlined"
	/>
))`
${({ theme }) => `
	border-color: ${theme.palette.primary.main};
	margin: 10px 0px; 
`}`;


const FieldCustom = (props: any) => {
	return (
		<StyledTextField {...props} />
	)
}

export default FieldCustom
