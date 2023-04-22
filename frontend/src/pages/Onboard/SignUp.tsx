import React, { useEffect } from 'react';
import styled from 'styled-components';
import { appTypography } from '../../config/styles';
import { _onBoard } from '../../Store/Thunk/Onboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import billiBKL from '../../assets/billiBC.svg';
import InterestModal from './InterestModal';
import Toaster from '../../common/Toaster';
import { initAPI } from '../../serverCom';
import { useCookies } from 'react-cookie';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 50%;
  position: relative;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  background: #9e4cdc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  padding: 56px 0 0 95px;
  width: fit-content;
`;

const Logo = styled.div(({ theme }) => ({
	...appTypography.h5.bold,
	color: theme.app.typography['900'],
	width: 'fit-content',
	cursor: 'pointer',
}));

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 54px;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginText = styled.p(({ theme }) => ({
	...appTypography.h1.bold,
	color: theme.app.typography['900'],
}));

const CatContainer = styled.div`
  background: #fff8e1;
  border-radius: 300px;
  height: 280px;
  width: 80%;
`;

const CatImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DashBoardBtn =styled.div`
padding: 8px 16px;

border:none;
border-radius: 100px;
background:${({theme})=>theme.app.primary['500']};
color:${({theme})=>theme.app.shades.white};

`;

function SignUp() {
	const dispatch: any = useDispatch();
	const navigate = useNavigate();

	const [cookies, setCookie] = useCookies(); 
	function decodeJwtResponse(token: string) {
		const base64Url = token.split('.')[1];
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split('')
				.map(function (c) {
					return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
				})
				.join(''),
		);
		return JSON.parse(jsonPayload);
	}

	useEffect(() => {
		window.google.accounts.id.initialize({
			client_id:
        '6951006710-td58cqht8oke2isd8fl5c9uv2t1r7bka.apps.googleusercontent.com',
			callback: handleCredentialResponse,
		});
		window.google.accounts.id.renderButton(
			document.getElementById('buttonDiv'),
			{
				theme: 'outline',
				size: 'large',
				text: 'Continue with',
				shape: 'pill',
				logo_alignment: 'center',
				width: '280',
				height: 100,
				outerHeight: 100,
				innerHeight: 100,
			},
		);
	}, []);
	const [interestModal, setInterestModal] = React.useState(false);
	async function handleCredentialResponse(response: { credential: string }) {
		const responsePayload = decodeJwtResponse(response.credential);
		console.log('Encoded JWT ID token: ' + responsePayload);
		console.log(
			responsePayload.name,
			responsePayload.sub,
			responsePayload.email,
		);
		const body = {
			userFullName: responsePayload.name,
			socialRefererId: responsePayload.sub,
			userEmail: responsePayload.email,
			interests: [],
		};
		const res = await dispatch(_onBoard({ body }));
		console.log(res.payload.data);

		if (res.meta.requestStatus === 'fulfilled') {
			initAPI({ token: res.payload.data.token });
			setCookie('token',res.payload.data.token);

			if (res.payload.data.interests.length === 0) {
				setInterestModal(true);
			} else {
				navigate('/dashboard');
			}
		}
		console.warn(res.payload.data);
	}
	function handleHomeRoute() {
		navigate('/');
	}



	const userDetails = useSelector((state:any)=>state?.appdata?.user);
	return (
		<Container>
			<LeftContainer>
				<Header>
					<Logo onClick={handleHomeRoute}>mama.</Logo>
				</Header>

				{userDetails?._id?
					<MainContent>
						<LoginText>You are already logged in , click below to redirect to your dashboard</LoginText>
						<DashBoardBtn onClick={()=>navigate('/dashboard')}>Dashboard</DashBoardBtn>
					</MainContent>
					:<MainContent>
						<LoginText>Login</LoginText>
						<div id="buttonDiv"></div>
					</MainContent>}
			</LeftContainer>
			<RightContainer>
				<CatContainer>
					<CatImage src={billiBKL} />
				</CatContainer>
			</RightContainer>
			{interestModal && <InterestModal />}
		</Container>
	);
}

export default SignUp;
