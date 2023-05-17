import { SquaresFour } from 'phosphor-react';
import { Books } from 'phosphor-react';
import { Coins } from 'phosphor-react';
import { GraduationCap } from 'phosphor-react';
import { User } from 'phosphor-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Notebank from './components/Notebank';
import Profile from './components/Profile';
import SellDocuments from './components/SellDocuments';
import { useNavigate } from 'react-router-dom';
import { ChatCircleDots } from 'phosphor-react';
import { SignOut } from 'phosphor-react';
import Community from './components/Community/Community';
import { ResponsiveConfigs } from '../../config/styles';
const Sup = styled.div`
  height: 100vh;
  max-height: 100vh;
  /* width: 100vw; */ //? why do we need this?
  background: #fff;
  display:flex;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: ${ResponsiveConfigs.dashboardHeaderHeight} calc( 100vh - ${ResponsiveConfigs.dashboardHeaderHeight});
  height: 100%;
  width: 100%;
  margin: auto;
  /* border-radius: 30px; */
  background: #fcfcfc;
`;

const Header = styled.header`
  background: transparent;

  display: flex;
  align-items: center;
  padding: 12px 68px;
  width: 100%;
  /* height: 100%; */
  height: ${ResponsiveConfigs.dashboardHeaderHeight};
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
  display: flex;
  flex-direction: column;
  /* grid-template-rows: 0.8fr 0.2fr; */
  gap: 30px;
  /* align-items: center; */
  justify-content: space-between;
  /* align-items: baseline; */
  max-height: calc(100vh - ${ResponsiveConfigs.dashboardHeaderHeight});
  padding-block-end: 24px;
`;

const UpperDashboardOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: scroll;
`;

const SingleMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* height: 60px; */
  color: #7c7c7c;
  padding: 16px 44px;
  cursor: pointer;
  &:hover {
    color: #3b4bd5;
  }
  border-radius:8px;
  /* background-color: #cdd2fc; */
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

const OptionText = styled.p<{noOfLinesToDisplay?:number}>(({noOfLinesToDisplay}) => ({
	fontWeight: '500',
	fontSize: '18px',

	//overflowWrap: 'anywhere', //add this to break long non-breaking texts  
	
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	lineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitLineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitBoxOrient: 'vertical'
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
	//   width: "78%",
	//   height: "100%",
	overflowY: 'scroll',
}));

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  padding: 0 0 0 24px;
  width: 100%;
  /* margin: 0 auto; */
  height: 100%;
  max-height: calc(100vh - ${ResponsiveConfigs.dashboardHeaderHeight});
`;
const LtContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto;
  gap:6px;
`;

function Dashboard() {
	const navigate = useNavigate();
	const [tab, setTab] = useState(0);

	const sidebarOptions = [
		{
			icon: <SquareFourIcon />,
			text: 'Dashboard',
			/* component: isWhiteLabel ? <ManageGroupChannels /> : <ManageChannels />, */
		},
		{
			icon: <SellIcon />,
			text: 'Sell Documents',
			component: <SellDocuments />,
		},
		{
			icon: <BooksIcon />,
			text: 'The Notebank',
			component: <Notebank />,
		},
		{
			icon: <CapIcon />,
			text: 'Community',
			component: <Community />,
		},
		{
			icon: <UserIcon />,
			text: 'Profile',
			component: <Profile />,
		},
	];

	function handleSidebarOptionClick(index: any, option: any) {
		setTab(index);
	}

	return (
		<Sup>
			<Container>
				<Header>
					<LogoText
						onClick={() => {
							navigate('/dashboard');
						}}
					>
            mama.
					</LogoText>
				</Header>
				<MainContainer>
					<LeftContainer>
						<UpperDashboardOptionsContainer>
							{sidebarOptions.map((option, index) => {
								if (!option) return null; //? to handle null value in array
								return (
									<>
										<SingleMenuItem
											key={index}
											onClick={() => handleSidebarOptionClick(index, option)}
										>
											<SidebarOptionIcon>{option.icon}</SidebarOptionIcon>
											<OptionText>{option.text}</OptionText>
										</SingleMenuItem>
									</>
								);
							})}
						</UpperDashboardOptionsContainer>
						<LtContainer>
							<SingleMenuItem>
								<SidebarOptionIcon>
									<ChatCircleDots fontSize={24} />
								</SidebarOptionIcon>
								<OptionText>Help Center</OptionText>
							</SingleMenuItem>
							<SingleMenuItem>
								<SidebarOptionIcon>
									<SignOut size={24} />
								</SidebarOptionIcon>
								<OptionText>Logout</OptionText>
							</SingleMenuItem>
						</LtContainer>
					</LeftContainer>
					<ContentContainer>{sidebarOptions[tab]?.component}</ContentContainer>
				</MainContainer>
			</Container>
		</Sup>
	);
}

export default Dashboard;
