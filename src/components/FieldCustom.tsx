import { TextField, TextFieldProps } from '@material-ui/core';
import { common } from '@material-ui/core/colors';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledTextField = styled((props) => (
	<TextField
		InputLabelProps={{
			className: 'custom-label'
		}}
		{...props}
		fullWidth
		variant="outlined"
		square="true"
	/>
))`
${({ theme }) => `
	.custom-label{
		color: ${common.white};
	}
`}`;


const FieldCustom: FC<TextFieldProps> = (props: TextFieldProps) => {
	return (
		<StyledTextField {...props} />
	)
}

export default FieldCustom
