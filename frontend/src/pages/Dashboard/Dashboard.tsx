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

const Container = styled.div`
  display: grid;
  grid-template-rows: 12% 86%;
  height: 100vh;
  width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: baseline;
`;

const SingleMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 60px;
  color: #7c7c7c;
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
  //   width: "78%",
  //   height: "100%",
}));

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
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
      /* component: isWhiteLabel ? <ManageGroupChannels /> : <ManageChannels />, */
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
        </LeftContainer>
        <ContentContainer>{sidebarOptions[tab]?.component}</ContentContainer>
      </MainContainer>
    </Container>
  );
}

export default Dashboard;
