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

  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 484px;
  /* max-height: 56px; */ //? why do we need this?

  width: 100%;
  background-color: aqua;
  padding: 18px 48px;
  border-radius: 30px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NavOptionsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 0px;
gap: 44px;
`;

const NavItem = styled.div`
  cursor: pointer;
`;

const NavText = styled.p(() => ({
	fontStyle: 'normal', 
	fontWeight: '400',
	fontSize: '16px',
	lineHeight: '20px',
	color: '#000',
}));

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
  cursor: pointer;
`;

// const LoginBTNContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 20px;
// `;

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




function LandingPage() {

	const NavItems = [
		{
			id: 1,
			text: 'Why Mama',
			link: '#',
			onClick: () => console.log('why mama clicked'),
		},
		{
			id: 2,
			text: 'The Zone',
			link: '#',
			onClick: () => console.log('the zone clicked'),
		},
		{
			id: 3,
			text: 'Pricing',
			link: '#',
			onClick: () => console.log('pricing clicked'),
		},
		{
			id: 4,
			text: 'FAQs',
			link: '#',
			onClick: () => console.log('faqs clicked'),
		},
    
	];

	return (
		<MainContainer>
			<Header>
				<LogoText>{'mama.'}</LogoText>

				<NavContainer>
					<NavOptionsContainer>
						{NavItems.map((item) => (
							<NavItem key={item.id}>
								<NavText onClick={item.onClick}>{item.text}</NavText>
							</NavItem>
						))}
					</NavOptionsContainer>
				</NavContainer>

				<BTN_SignUp>{'Log in'}</BTN_SignUp>

			</Header>

			<Hero>
				<div>
					<HeroHeadingText>{'Personalized'} </HeroHeadingText>
					<HeroHeadingText>{'learning for you'}</HeroHeadingText>
				</div>
				<HeroBTN>{'Sign Up for free'}</HeroBTN>
			</Hero>
		</MainContainer>
	);
}

export default LandingPage;
