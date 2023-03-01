import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 200vh;
  background: #dfdbdb;

  align-items: center;

  padding:16px 16px 0px 16px;
`;

const HeroContainer = styled.div`
  background: #fafafa;
  border-radius: 30px;
  min-height: 100vh;
  width: 100%;
  /* margin: 16px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* gap: 184px; */
`;


const Header = styled.header`
  background: transparent;

  /* position: fixed;
  top: 0; */

  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 52px 68px;
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
  background-color: #fff;
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
	':hover': {
		color: '#8330c2',
	}
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
  background: #8330c2;
  transition: all 0.3s ease-in-out;
  :hover {
    background: #9e4cdc;
    transition: all 0.3s ease-in-out;
  }
  /* background: #9e4cdc; */
`;

const BTN_Login = styled(Button)`
  background: transparent;
  color: #000;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const BTN_SignUp = styled(Button)`
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
  /* margin: 56px 0; */
`;

const HeroText = styled.p`
  font-style: normal;
font-weight: 500;
font-size: 96px;
line-height: 113px;
text-align: center;

width: 100%;
max-width: 800px;
`;

const HeroTextAndBTNContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 56px;

  min-height: 100vh;
  `;

const VideoContainer = styled.div(() => ({
	height: '400px',
	width: '400px',
	overflow: 'hidden',
	borderRadius: '50%',
	marginBlockEnd: '100px',
	// boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
	// backgroundColor: 'red',
}));


const ConnectWithTutorsTextContainer = styled.div`
  width: 100%;
  padding: 75px 0px;
  max-width: 900px;
  width: 100%;

`;

const ConnectWithTutorsText = styled.p`
font-style: normal;
font-weight: 500;
font-size: 126px;
line-height: 91.8%;

text-align: center;
letter-spacing: -0.08em;
`;

const MarqueeItem = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  height: 100px;
  width: 100px;
  
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

	const navigate = useNavigate();

	function handleLoginClick() {
		navigate('/onboard');
	}

	const MarqueeData = [
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
		{
			logo: 'https://s3-alpha-sig.figma.com/img/351f/cbd5/626a841ccc5a444f33c6037a5f1b67b2?Expires=1678060800&Signature=RwWxSYQ04lLC8M14AKLCuxsPP3uUB4gufSRJ99tlwaXf4Eexsiq8e3vsc8wXrIbImzyJufRbc3NtYnxgX4iPl7MdewBkRdZaccVUjCYcvqLn-6M1p1ChjNsoectqbc0DhUUP4DDNWGCoGDZE0VbWNSBubwSrWPjN9ibQgh-xfCrFqgUZlYIl~4DIjmLwL2Ax2UrxuX-QedwOoVfPO8LnyvVjgQj5ZbP2cbJcZwhKA5OL~Sadrje5nRz2Lf2GsG2t3BHIyNfuCX~qMU6jHW53XTKf9b4fJsxccSy54flitP3r3db0nlxOQYJj8ROMzSClYiLJwz1T2NVbqUEMjI0vRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
		},
	];

	return (
		<MainContainer>
			<HeroContainer>

				<Header>
					<LogoText onClick={() => { navigate('/'); }}>{'mama.'}</LogoText>

					<NavContainer>
						<NavOptionsContainer>
							{NavItems.map((item) => (
								<NavItem key={item.id}>
									<NavText onClick={item.onClick}>{item.text}</NavText>
								</NavItem>
							))}
						</NavOptionsContainer>
					</NavContainer>

					<BTN_SignUp onClick={handleLoginClick}>{'Log in'}</BTN_SignUp>

				</Header>


				<HeroTextAndBTNContainer>
					<HeroText>
						{'Personalized learning for you'}
					</HeroText>
					<HeroBTN onClick={handleLoginClick}>{'Start your journey '}</HeroBTN>
				</HeroTextAndBTNContainer>


				<VideoContainer>
					<ReactPlayer
						url={'https://www.sendpotion.com/assets/video/home/hero/1.mp4?6'}
						muted={true}
						playing={true}
						loop={true}
						height={'400px'}
						width={'400px'}
						controls={false}
						style={{ borderRadius: '50%' }}
					/>
				</VideoContainer>

			</HeroContainer>

			<ConnectWithTutorsTextContainer>
				<ConnectWithTutorsText>
					{'Connect with tutors across🌏'}
				</ConnectWithTutorsText>
			</ConnectWithTutorsTextContainer>

			{/* <UniversityScrollerContainer>
        
			</UniversityScrollerContainer> */}

			<Marquee
				gradient
				gradientColor={[255, 255, 255]}
				speed={100}
				style={{
					display: 'flex',
					flexDirection: 'row',
					gap: '20px',
				}}
			>
				{
					MarqueeData.map((item, index) => {
						return (
							<MarqueeItem key={index} src={item.logo} />
						);
					})
				}
			</Marquee>

		</MainContainer>
	);
}

export default LandingPage;
