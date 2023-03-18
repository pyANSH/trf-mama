import { SquaresFour } from "phosphor-react";
import {Books} from "phosphor-react";
import {Coins} from "phosphor-react";
import {GraduationCap} from "phosphor-react";
import {User} from "phosphor-react";
import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Notebank from "./components/Notebank";
import Profile from "./components/Profile";
import SellDocuments from "./components/SellDocuments";

const Container = styled.div`

` 

const Header = styled.div`

`;

const Logo = styled.h1`

`

const LeftContainer =styled.div`
display: flex;
flex-direction: column;
gap:72px;
padding-left: 80px;
padding-top: 80px;
`;

const SingleMenuItem =styled.div`
display: flex;
align-items: center;
gap:20px;
`;

const SquareFourIcon = styled(SquaresFour)`
width:26px;
height:26px;
color:#7C7C7C;
`;

const SellIcon =styled(Coins)`
width:26px;
height:26px;
color:#7C7C7C;
`;

const BooksIcon =styled(Books)`
width:26px;
height:26px;
color:#7C7C7C;
`;

const CapIcon =styled(GraduationCap)`
width:26px;
height:26px;
color:#7C7C7C;
`;

const UserIcon =styled(User)`
width:26px;
height:26px;
color:#7C7C7C;
`;

const OptionText =styled.p(()=>({
  fontWeight: '500',
fontSize: '22px',
lineHeight: '26px',
}))

const CommonIcons = {
	height: '24px',
	width: '24px',
};
const SidebarOptionIcon = styled.div(({ }) => ({
	...CommonIcons,
}));
const ContentContainer = styled.div(({ theme }) => ({
	width: '78%',
	height: '100%',
}));

const MainContainer =styled.div`
display: flex;
justify-content: space-between;
`;

function Dashboard() {

const tab = 1;

  let sidebarOptions = [
		{
			icon: <SquareFourIcon />,
			text: 'Dashboard',
			/* component: isWhiteLabel ? <ManageGroupChannels /> : <ManageChannels />, */
		},
    {
			icon: <SellIcon />,
			text: 'Sell Documents',
      component: <SellDocuments/>

		},
    {
			icon: <BooksIcon />,
			text: 'The Notebank',
      component: <Notebank/>
		},
    {
			icon: <CapIcon />,
			text: 'Community',
			/* component: isWhiteLabel ? <ManageGroupChannels /> : <ManageChannels />, */
		},
    {
			icon: <UserIcon />,
			text: 'Profile',
			component: <Profile/>
		},
    
    ];

    function handleSidebarOptionClick(index:any, option:any){
      
    }

  return (
    <Container>
      <Header>
        <Logo>mama.</Logo>
      </Header>
      <MainContainer>

      
      <LeftContainer>
      {
												sidebarOptions.map((option, index) => {
													if (!option) return null; //? to handle null value in array
													return (
														<>
															<SingleMenuItem
																key={index}
																onClick={() => handleSidebarOptionClick(index, option)}
															>
															<SidebarOptionIcon>
																	{option.icon}
																</SidebarOptionIcon>
																<OptionText>
																	{option.text}
																</OptionText>
															</SingleMenuItem>
														</>
													);
												})
											}

      </LeftContainer>
      <ContentContainer>
										{sidebarOptions[tab]?.component}
									</ContentContainer>
                  </MainContainer>
    </Container>
  );
}

export default Dashboard;
