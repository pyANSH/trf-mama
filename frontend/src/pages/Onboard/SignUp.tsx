import React, { useEffect,useState } from 'react';
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
import { CaretDown, CaretUp, Check } from 'phosphor-react';

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
  padding: 62px 0 0 68px;
  width: fit-content;
`;

const Logo = styled.div(({ theme }) => ({
	...appTypography.h5.bold,
	color: theme.app.typography['900'],
	width: 'fit-content',
	cursor: 'pointer',
}));

const MainContent = styled.div<{ isUserLoggedIn?: boolean }>`
  display: flex;
  align-items: ${({ isUserLoggedIn }) => (isUserLoggedIn ? 'flex-start' : 'center')};
  justify-content: center;
  gap: ${({ isUserLoggedIn }) => (isUserLoggedIn ? '24px' : '54px')};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  padding: 0 24px;
`;

const LoginOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 320px;
  width: 100%;
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

const DashBoardBtn = styled.div`
padding: 8px 16px;

border:none;
border-radius: 100px;
background:${({ theme }) => theme.app.primary['500']};
color:${({ theme }) => theme.app.shades.white};

cursor:pointer;
`;

const ContinueWithGoogleContainer = styled.div<{isUserType?:boolean}>`
  display: flex;
  /* opacity:  ${({ isUserType }) => (isUserType ? '1' : '0')}; */
  /* visibility: ${({ isUserType }) => (isUserType ? 'visible' : 'hidden')}; */
  transition: all 0.3s ease-in-out;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  width: 100%;
  gap: 16px;
  padding: 8px 16px;
  border-radius: 100px;
  background: ${({ theme }) => theme.app.shades.white};
  color: ${({ theme }) => theme.app.typography['900']};
  cursor: pointer;
  /* border: 1px solid ${({ theme }) => theme.app.shades.grey}; */
  &:hover {
	background: ${({ theme }) => theme.app.shades.grey};
	  }
`;


const CommonInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const CommonInputText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const CommonInput = styled.input`
  border: 1px solid grey;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 16px;
  color: #757d8a;
  border: 1px solid #e1e3e6;
  &:focus {
    outline: none;
    border: 1px solid #4e73f8;
    outline: 1px solid #4e73f8;
  }
`;

const GenderText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #757d8a;
`;
const DropDownAns = styled.div`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border: 1px solid #e1e3e6;

  min-height: 44px;
`;

const DropDownMainContainer = styled.div`
  border: 1px solid #e1e3e6;
  width: 100%;
  box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.08);
  border-radius: 4px;
  position: absolute;
  top: calc(100% + 8px);
  z-index: 1;
  background: white;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropDownOption = styled.p`
  padding: 8px 0px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  /* &:hover {
	background: #f8f9fc;
	  } */
`;

const DropDownOptionText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const TickIcon = styled(Check)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const UpArrowIcon = styled(CaretUp)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
const DownArrowIcon = styled(CaretDown)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
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
				text: 'Continue with Google',
				shape: 'rectangular',
				logo_alignment: 'center',
				width: '320',
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
			setCookie('token', res.payload.data.token);

			if (res.payload.data.interests.length === 0) {
				setInterestModal(true);
			} else {
				navigate('/dashboard');
				window.location.reload();

			}
		}
		console.warn(res.payload.data);
	}
	function handleHomeRoute() {
		navigate('/');
	}

	const [userType,setUserType] = useState('');
	const [isUserTypeDropDownOpen, setIsUserTypeDropDownOpen] = useState(false);

	const dropdownFeeds = [
		{
			text: 'Student 🧑‍🎓',
			onclickOption: () => {
				setIsUserTypeDropDownOpen(false);
				setUserType('Student');
			},
		},
		{
			text: 'Mentor 👩‍🏫',
			onclickOption: () => {
				setIsUserTypeDropDownOpen(false);
				setUserType('Mentor');
			},
		},
		
	];

	const userDetails = useSelector((state: any) => state?.appdata?.user);

	const isUserLoggedIn:boolean = userDetails?._id || false;
	return (
		<Container>
			<LeftContainer>
				<Header>
					<Logo onClick={handleHomeRoute}>mama.</Logo>
				</Header>

				{isUserLoggedIn ?
					<MainContent isUserLoggedIn={isUserLoggedIn}>
						<LoginText>
							{`Welcome ${userDetails?.userFullName.split(' ')[0]} 👋`}
							<br />
							{'\nYou\'re all set to go! 🚀'}
						</LoginText>
						<DashBoardBtn onClick={() => navigate('/dashboard')}>{'Lets Go !'}</DashBoardBtn>
					</MainContent>
					: <MainContent>
						<LoginText>{'Login'}</LoginText>

						<LoginOptionsContainer>
							{
								// <CommonInputContainer>
								// 	{/* <CommonInputText>{'Who are you 🤔'}</CommonInputText> */}
								// 	<DropDownAns
								// 		onClick={() => setIsUserTypeDropDownOpen(!isUserTypeDropDownOpen)}
								// 	>
								// 		<GenderText>{userType || 'Who are you?'}</GenderText>
								// 		{isUserTypeDropDownOpen ? <UpArrowIcon /> : <DownArrowIcon />}
								// 	</DropDownAns>
								// 	{isUserTypeDropDownOpen && (
								// 		<DropDownMainContainer>
								// 			{dropdownFeeds.map((feed,index) => (
								// 				<DropDownOption key={index}
								// 					// isActive={gender===feed.text}
								// 					onClick={feed.onclickOption}
								// 				>
								// 					<DropDownOptionText>{feed.text}</DropDownOptionText>
								// 					{userType === feed.text && <TickIcon />}
								// 				</DropDownOption>
								// 			))}
								// 		</DropDownMainContainer>
								// 	)}
								// </CommonInputContainer>
							}
							
							{	
								<ContinueWithGoogleContainer 
								// isUserType={userType ? true : false} 
								>
									<div id="buttonDiv" />
								</ContinueWithGoogleContainer>
							}
						</LoginOptionsContainer>
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
