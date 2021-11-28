import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledTextField = styled((props) => (
	<TextField
		{...props}
		fullWidth
		variant="outlined"
		square="true"
	/>
))`
${({ theme }) => `
	
`}`;


const FieldCustom = (props: any) => {
	return (
		<StyledTextField {...props} />
	)
}

export default FieldCustom
