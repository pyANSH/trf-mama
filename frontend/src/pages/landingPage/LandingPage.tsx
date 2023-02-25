import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 200vh;
`;

const Header = styled.header`
  background: transparent;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 52px;
  width: 100%;
`;

const LogoText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 483px;
  max-height: 56px;
  font-weight: 400;
  font-size: 16px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
`;

const Logo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

const BTN_Login = styled(Button)`
  background: transparent;
  color: #000;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const BTN_SignUp = styled(Button)`
  background: #9e4cdc;
  padding: 19px 63px;
  border-radius: 30px;
  color: #fff;
`;

const LoginBTNContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Hero = styled.div`
  background: #fafafa;
  border-radius: 70px;
  height: 100vh;
  width: 98%;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeroHeadingText = styled.h1`
  font-weight: 500;
  font-size: 96px;
  line-height: 113px;
  text-align: center;
  letter-spacing: -8px;
`;

const HeroBTN = styled(BTN_SignUp)`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  border-radius: 70px;
  margin: 52px 0;
`;

const NavListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #000;
  }
`;

function LandingPage() {

	return (
		<MainContainer>
			<Header>
				<LogoText>{'mama.'}</LogoText>

				<Nav>
					<NavListContainer>
						<NavItem>
							<a href="#">{'Why Mama'}</a>
						</NavItem>
						<NavItem>
							<a href="#">{'The Zone'}</a>
						</NavItem>
						<NavItem>
							<a href="#">{'Pricing'}</a>
						</NavItem>
						<NavItem>
							<a href="#">{'FAQs'}</a>
						</NavItem>
					</NavListContainer>
				</Nav>
        
				<LoginBTNContainer>
					<BTN_Login>{'Login'}</BTN_Login>
					<BTN_SignUp>{'Sign Up'}</BTN_SignUp>
				</LoginBTNContainer>
			</Header>
			{/* <header className="header"></header> */}
			<Hero>
				{/* <div></div> */}
				<div>
					<HeroHeadingText>{'Personalised'} </HeroHeadingText>
					<HeroHeadingText>{'learning for you'}</HeroHeadingText>
				</div>
				<HeroBTN>{'Sign Up for free'}</HeroBTN>
			</Hero>
		</MainContainer>
	);
}

export default LandingPage;
