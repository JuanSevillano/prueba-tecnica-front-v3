import { Box, Button, darken, Paper, Typography } from '@material-ui/core';
import FieldCustom from 'components/FieldCustom/UI/FieldCustom';
import React, { FC, useState } from 'react';
import { Creds } from 'store/types/authTypes';
import styled from 'styled-components';

import whiteLogo from '../../assets/white_logo.svg';

interface LoginI {
	title: string
	logo: string
	buttonText: string
	headerImage: string
}

const mockupData: LoginI = {
	title: `Bienvenido al Test de La Liga`,
	logo: `https://upload.wikimedia.org/wikipedia/commons/1/13/LaLiga.svg`,
	buttonText: `Iniciar Sesión`,
	headerImage: `https://fanslaliga.laliga.com/static/img/background.e8e7288.png`
}


const initialState: Creds = {
	email: '',
	password: ''
}


const StyledLogin = styled(Box)`
${({ theme }) => `
	display: flex;
	justity-content: center; 
	align-items: center;
	margin: auto;
	width: 100%;
	height:100%;
	max-width: 600px;
	form {
		width:100%;
		height: 100%;
		display: flex; 
		flex-wrap: wrap; 
		align-items:center;
		flex-direction: column;
		background-color: ${darken(theme.palette.background.default, 0.5)};
		section {
			justify-self: flex-start;
			width: 100%; 
			height: 30%; 
			background: url("${mockupData.headerImage}");
			background-size: cover;
			background-position:center; 
		}
		img {
			width: 130px;
			margin: 0  auto;
			transform: translateY(-40%);
			padding: 20px; 
		}
		.MuiBox-root{
			.MuiFormControl-root {
				margin: 10px 0px;
			}
		}
	}	
`}`;


const Login: FC<{}> = ({ }) => {

	const [creds, setCreds] = useState<Creds>(initialState);





	return (
		<StyledLogin>
			<form onSubmit={(e) => console.log('submitted')}>
				<section></section>
				<img src={whiteLogo} alt='logo' />
				<Box>
					<Typography color='primary' variant='h1'>{mockupData.title}</Typography>
					<FieldCustom
						label="correo"
						onChange={e => console.log(e.target.value)}
					/>
					<FieldCustom />
					<Button variant='contained'>{mockupData.buttonText}</Button>
				</Box>
			</form>
		</StyledLogin>
	)
}

export default Login
