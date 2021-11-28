import { Box, Button, darken, Typography } from '@material-ui/core';
import Spinner from 'components/Spinner';
import FieldCustom from 'components/UI/FieldCustom';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import { SignIn } from 'store/actions/auth';
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
	position: relative; 
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
	}	
`}`;


const Login: FC<{}> = () => {

	const dispatch = useDispatch()
	const [creds, setCreds] = useState<Creds>(initialState);

	const { error, isFetching }: any = useSelector<AppState>(state => state.auth);


	const submitHandler = event => {

		event.preventDefault();
		const validEmail = creds.email !== initialState.email;
		const validPass = creds.password !== initialState.password;

		if (!validEmail && !validPass) {
			setCreds(prev => ({
				...prev,
				error: !validEmail ? 'Email no valido' : 'Contraseña no valida'
			}))
			return
		}

		dispatch(SignIn(creds));

	}

	return (
		<StyledLogin>
			<Spinner loading={isFetching} />
			<form onSubmit={submitHandler}>
				<section></section>
				<img src={whiteLogo} alt='logo' />
				<Box>
					<Typography color='primary' variant='h1'>{mockupData.title}</Typography>
					<FieldCustom
						required
						label="correo"
						error={error ? true : false}
						type="email"
						onChange={e => {
							const { value } = e.target;
							setCreds(prev => ({
								...prev,
								email: value
							}))
						}}
					/>
					<FieldCustom
						required
						type="password"
						label="contraseña"
						error={error ? true : false}
						helperText={error}
						onChange={e => {
							const { value } = e.target;
							setCreds(prev => ({
								...prev,
								password: value
							}))
						}}
					/>
					<Button
						fullWidth
						type='submit'
						variant='contained'>
						{mockupData.buttonText}
					</Button>
				</Box>
			</form>
		</StyledLogin>
	)
}

export default Login
