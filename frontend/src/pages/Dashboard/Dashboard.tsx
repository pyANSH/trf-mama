import { SquaresFour } from 'phosphor-react';
import { Books } from 'phosphor-react';
import { Coins } from 'phosphor-react';
import { GraduationCap } from 'phosphor-react';
import { User } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Notebank from './components/Notebank';
import Profile from './components/Profile';
import SellDocuments from './components/SellDocuments';
import { useNavigate, useParams } from 'react-router-dom';
import { ChatCircleDots } from 'phosphor-react';
import { SignOut } from 'phosphor-react';
import HelpCentre from './components/HelpCentre/HelpCentre';
import UserDashboard from './components/UserDashboard/UserDashboard';
import Community from './components/Community/Community';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { ToastContainer } from 'react-toastify';
// import Meeting from './components/Meeting';
const Sup = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff;

  overflow-x: hidden;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 12% 86%;
  height: 99%;
  width: 99%;
  margin: auto;
  border-radius: 30px;
  background: #fcfcfc;
`;

const Header = styled.header`
  background: transparent;

  display: flex;
  align-items: center;
  padding: 52px 68px;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const LogoText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;

  cursor: pointer;
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: 70% 30%;
  gap: 30px;
  align-items: baseline;
`;

const Button = styled.div`
  background: transparent;
  border: none;
  outline: none;
  background: #8330c2;
  transition: all 0.3s ease-in-out;
  :hover {
    background: #9e4cdc;
    transition: all 0.3s ease-in-out;
  }
`;
const BTN_SignUp = styled(Button)`
  padding: 19px 63px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  /*   */
`;

const SingleMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 60px;
  color: ${({ isActive }: { isActive: any }) =>
		isActive ? '#3b4bd5' : '#7c7c7c'};
  &:hover {
    color: #3b4bd5;
    cursor: pointer;
  }
`;

const SquareFourIcon = styled(SquaresFour)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const SellIcon = styled(Coins)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const BooksIcon = styled(Books)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const CapIcon = styled(GraduationCap)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const UserIcon = styled(User)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const SignoutIcon = styled(SignOut)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const HelpIcon = styled(ChatCircleDots)`
  width: 26px;
  height: 26px;
  color: #7c7c7c;
`;

const OptionText = styled.p(() => ({
	fontWeight: '500',
	fontSize: '18px',
	lineHeight: '26px',
}));

const CommonIcons = {
	height: '24px',
	width: '24px',
};
const SidebarOptionIcon = styled.div(({}) => ({
	...CommonIcons,
	color: 'inherit',
}));
const ContentContainer = styled.div(({ theme }) => ({
	
	overflowY : 'scroll',
	paddingInlineEnd:'24px',
	paddingInlineStart:'4px',
	//   width: "78%",
	//   height: "100%",
}));

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;
const LtContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: 47%;
  justify-content: flex-end;
`;
const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  gap: 16px;
`;

function Dashboard() {
	const navigate = useNavigate();
	const [tab, setTab] = useState('dashboard');
	const user = useSelector((state: any) => state?.appdata?.JWT);
	const [cookies, setCookie, removeCookie] = useCookies(['token']);

	const { dashTab } = useParams();

	useEffect(() => {
		if (dashTab) {
			setTab(dashTab);
		}
	}, []);


	
	const handleLogout = () => {
		removeCookie('token', { path: '/dashboard', sameSite: true });
		removeCookie('token', { path: '/', sameSite: true });

		window.location.href = '/';

	};

	const sidebarOptions: any = {
		dashboard: {
			icon: <SquareFourIcon />,
			text: 'Dashboard',
			component: <UserDashboard />,
		},
		sell: {
			icon: <SellIcon />,
			text: 'Sell Documents',
			component: <SellDocuments />,
		},
		notebank: {
			icon: <BooksIcon />,
			text: 'The Notebank',
			component: <Notebank />,
		},
		chat: {
			icon: <CapIcon />,
			text: 'Community',
			component: <Community />,
		},
		profile: {
			icon: <UserIcon />,
			text: 'Profile',
			component: <Profile />,
		},
		help: {
			icon: <HelpIcon />,
			text: 'Help Centre',
			component: <HelpCentre />,
			isFooterItem: true,
		},
		logout: {
			icon: <SignoutIcon />,
			text: 'Logout',
			isFooterItem: true,
		},
	};

	function handleSidebarOptionClick(index: any, option: any) {
		if (option === 'logout') {
			handleLogout();
			return;
		}
		setTab(option);
		navigate(`/dashboard/${option}`, { replace: true });
	}

	// const [isHelpCentreToggled, setIsHelpCentreToggled] = useState(false);

	// function handleHelpCentreClick () {
	// 	navigate('/help');
	// }

	return (
		<>

			{/* <ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/> */}
		
			{user?<Sup>
				<Container>
					<Header>
						<LogoText
							onClick={() => {
								navigate('/dashboard');
							}}
						>
							{'mama.'}
						</LogoText>
					</Header>
					<MainContainer>
						<LeftContainer>
							<div>
								{Object.keys(sidebarOptions).map((option, index) => {
									if (!sidebarOptions[option]) return null; //? to handle null value in array
									if (sidebarOptions[option].isFooterItem) return null;
									
									return (
										<>
											<SingleMenuItem
												isActive={option===tab}
												key={index}
												onClick={() => handleSidebarOptionClick(index, option)}
											>
												<SidebarOptionIcon>{sidebarOptions[option].icon}</SidebarOptionIcon>
												<OptionText>{sidebarOptions[option].text}</OptionText>
											</SingleMenuItem>
										</>
									);
								})}
							</div>
							<LtContainer>
								<div>
									{Object.keys(sidebarOptions).map((option:any, index:any) => {
										if (!sidebarOptions[option]) return null; //? to handle null value in array
										if (!sidebarOptions[option].isFooterItem) return null;
										return (
											<>
												<SingleMenuItem
													isActive={option===tab}
													key={index}
													onClick={() => handleSidebarOptionClick(index, option)}
												>
													<SidebarOptionIcon>{sidebarOptions[option].icon}</SidebarOptionIcon>
													<OptionText>{sidebarOptions[option].text}</OptionText>
												</SingleMenuItem>
											</>
										);
									})}
								</div>
							</LtContainer>
						</LeftContainer>
						<ContentContainer>{sidebarOptions[tab].component}</ContentContainer>
					</MainContainer>
				</Container>
			</Sup>:<LoginDiv>
				
				Please login to view this page😊
				<BTN_SignUp onClick={()=>navigate('/onboard')}>{'Login'}</BTN_SignUp>
			</LoginDiv>}
			
		</>

	);
}

export default Dashboard;
