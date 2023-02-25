import React, { useEffect } from 'react';
import styled from 'styled-components';
import { appTypography } from '../../config/styles';
import { _onBoard } from '../../Store/Thunk/Onboard';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import billiBKL from '../../assets/billiBC.svg';

const Container = styled.div`
height:100vh;
width:100%;
display: flex;

`;

const LeftContainer = styled.div`
width:50%;
position: relative;
`;

const RightContainer = styled.div`
width:50%;
height: 100%;
background: #9E4CDC;
display: flex;
align-items: center;
justify-content: center;
`;

const Header =styled.div`
  padding:56px 0 0 95px;
width:fit-content;
`;

const Logo =styled.div(({theme})=>({
	...appTypography.h5.bold,
	color:theme.app.typography['900'],
	width:'fit-content',
	cursor:'pointer'
}));

const MainContent =styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap:54px;
	flex-direction: column;
	position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LoginText =styled.p(({theme})=>({
	...appTypography.h1.bold,
	color:theme.app.typography['900']
}));

const CatContainer =styled.div`
background: #FFF8E1;
border-radius: 300px;	
height:280px;
width:80%;
`;

const CatImage =styled.img`
width:100%;
height:100%;	
`;

function SignUp() {
	const dispatch:any = useDispatch();
	const navigate = useNavigate();
	function decodeJwtResponse(token: string) {
		const base64Url = token.split('.')[1];
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		return JSON.parse(jsonPayload);
	}

	useEffect(() => {
		window.google.accounts.id.initialize({
			client_id: '6951006710-td58cqht8oke2isd8fl5c9uv2t1r7bka.apps.googleusercontent.com',
			callback: handleCredentialResponse
		});
		window.google.accounts.id.renderButton(
			document.getElementById('buttonDiv'),
			{ theme: 'outline', size: 'large', text: 'Continue with', shape: 'pill', logo_alignment: 'center', width: '280', height: 100, outerHeight: 100, innerHeight: 100 }
		);
	}, []);
	async function handleCredentialResponse(response: { credential: string; }) {
		
		const responsePayload = decodeJwtResponse(response.credential);
		console.log('Encoded JWT ID token: ' + responsePayload);
		console.log(responsePayload.name,responsePayload.sub,responsePayload.email,);
		const body ={
			userFullName:responsePayload.name,
			socialRefererId:responsePayload.sub,
			userEmail:responsePayload.email,
			'interests': []
		};
		const res = await dispatch(_onBoard({body}));
		console.log(res);
		
		if(res.meta.requestStatus==='fulfilled'){		
			navigate('/');//to dashboard
		}
		
	}

	function handleHomeRoute() {
		navigate('/');
		
	}
	return (
		<Container>
			<LeftContainer>
				<Header>
					<Logo onClick={handleHomeRoute}>mama.</Logo>
				</Header>

				<MainContent>
					<LoginText>Login</LoginText>
					<div id="buttonDiv"></div> 
				</MainContent>
			</LeftContainer>
			<RightContainer>
				<CatContainer>
					<CatImage src={billiBKL}/>
				</CatContainer>

			</RightContainer>
		</Container>
	);
}

export default SignUp;