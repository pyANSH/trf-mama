import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import catFace from '../../assets/billiBC.svg';
import {
  Check,
  ArrowCircleLeft,
  ArrowCircleRight,
} from '@phosphor-icons/react';
import user_1_pfp from '../../assets/images/brittany.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import Animated from './Animated';
import AnimatedCursor from 'react-animated-cursor';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 200vh;
  background: #fff;

  align-items: center;
  /* 
  padding:16px 16px 0px 16px; */
  cursor: none;
`;

const HeroMainContainer = styled.div`
  padding: 16px 16px 0px 16px;
  width: 100%;
  cursor: none;
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
  cursor: none;
  /* gap: 184px; */
`;

const Header = styled.header`
  background: transparent;
  cursor: none;
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

  z-index: 100;
`;

const LogoText = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  cursor: none;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 484px;
  /* max-height: 56px; */ //? why do we need this?
  cursor: none;
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
  cursor: none;
`;

const NavItem = styled.div`
  cursor: pointer;
  cursor: none;
`;

const NavText = styled.p(() => ({
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '20px',
  color: '#000',
  cursor: 'pointer',
  ':hover': {
    color: '#8330c2',
  },
}));

const Logo = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  cursor: none;
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
  cursor: none;
`;

const BTN_Login = styled(Button)`
  background: transparent;
  color: #000;
  cursor: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const BTN_SignUp = styled(Button)`
  padding: 19px 63px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  cursor: none;
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
  cursor: none;
`;

const HeroBTN = styled(BTN_SignUp)`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  border-radius: 70px;
  cursor: none;
  /* margin: 56px 0; */
`;

const HeroText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  cursor: none;
  line-height: 113px;
  text-align: center;

  width: 100%;
  max-width: 800px;
`;

const HeroTextAndBTNContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: none;
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
  cursor: 'none',
  // boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
  // backgroundColor: 'red',
}));

const ConnectWithTutorsTextContainer = styled.div`
  width: 100%;
  padding: 75px 0px;
  max-width: 900px;
  width: 100%;
  cursor: none;
`;

const ConnectWithTutorsText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 126px;
  line-height: 91.8%;
  cursor: none;

  text-align: center;
  letter-spacing: -0.08em;
`;

const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 48px;
  cursor: none;
  box-sizing: border-box;
`;

const MarqueeImage = styled.img`
  height: 100px;
  width: 100px;
  cursor: none;
`;

const PricingTextContainer = styled.div`
  width: 100%;
  padding: 0px 0px;
  max-width: 900px;
  cursor: none;
  width: 100%;
  display: flex;
  height: 200px;

  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const PricingTextLarge = styled.p`
  font-style: normal;
  font-weight: 600;
  cursor: none;
  font-size: 80px;
  line-height: 100%;
  /* or 80px */

  letter-spacing: -0.055em;

  color: #000000;
  cursor: none;
  max-width: 300px;
  text-align: end;
`;

const PricingTextSmall = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  cursor: none;
  /* identical to box height, or 24px */

  align-self: flex-end;
  justify-self: flex-start;

  max-width: 272px;
`;

const PricingCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  cursor: none;
  padding-top: 100px;
`;

const PricingCard = styled.div<{ styleType?: string }>`
  border-radius: 48px;
  width: 100%;
  max-width: 520px;
  cursor: none;
  background-color: ${(props) =>
    props.styleType === 'v2' ? '#ede1ff' : '#faf9f6'};
  padding: 64px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const PCT_Category = styled.p`
  font-style: normal;
  font-weight: 400;
  cursor: none;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height, or 24px */

  letter-spacing: -0.055em;

  color: #181818;
`;

const PCT_Price = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  cursor: none;
  line-height: 100%;
  /* identical to box height, or 60px */

  letter-spacing: -0.055em;

  color: #181818;
`;

const PCT_Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: none;
  line-height: 100%;
  /* or 24px */

  letter-spacing: -0.055em;

  color: #181818;
`;

const PricingContainer_CTABTN = styled.p<{ styleType?: string }>`
  padding: 20px 64px;
  width: 100%;
  cursor: none;
  border: 2px solid
    ${(props) => (props.styleType === 'v2' ? '#8330c2' : '#000')};
  border-radius: 50px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */

  color: ${(props) => (props.styleType === 'v2' ? '#fff' : '#000')};
  background-color: ${(props) => (props.styleType === 'v2' ? '#8330c2' : null)};

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PricingAndFeaturesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  cursor: none;
`;

const FeaturesComparisonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  cursor: none;
`;

const FeatureComparisonItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  padding: 0px 64px;
  width: 100%;
  cursor: none;
`;

const FeatureComparisonItemText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.055em;
  color: #181818;
  cursor: none;
`;

const FeatureComparisonItemCheckMark = styled(Check)`
  color: #9e4cdc;
`;

const FooterContainer = styled.div`
  background-color: #000;
  min-height: calc(100vh - 100px);
  width: 100%;
  cursor: none;
  border-radius: 26px 26px 0px 0;

  padding: 100px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterHeroContainer = styled.div<{ styleType?: string }>`
  padding: ${(props) =>
    props.styleType === 'v2' ? '100px 0px 150px 0px' : '150px 0px 100px 0px'};
  display: flex;
  flex-direction: column;
  cursor: none;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.styleType === 'v2' ? '64px' : '24px')};

  /* background-color: #fff; */
  background-color: ${(props) =>
    props.styleType === 'v2' ? '#ffe8d3' : '#fff'};
  z-index: ${(props) => (props.styleType === 'v2' ? 1 : 2)};
  border-radius: 24px;
  position: relative;
  bottom: ${(props) => (props.styleType === 'v2' ? '-150px' : '-100px')};
  width: 100%;
  box-sizing: border-box;
`;

const FooterTextContainer = styled.div`
  display: flex;
  word-break: break-all;
  word-wrap: break-word;
  cursor: none;
  width: 920px;
  gap: 24px;
  flex-wrap: wrap;

  justify-content: center;
`;

const FooterHeroFeaturesTextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  cursor: none;
  grid-template-rows: auto auto; //this means that the rows will be as tall as the content
`;

const FooterHeroFeaturesTextGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 16px;
  cursor: none;
`;

const FooterHeroFeaturesTextGridItem_Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: -0.055em;
  cursor: none;

  color: #000000;
`;

const FooterHeroFeaturesTextGridItem_Description = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  cursor: none;
  letter-spacing: -0.055em;

  color: #000000;
`;

const FooterHeroText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 91.8%;
  /* or 92px */

  text-align: center;
  cursor: none;
  letter-spacing: -0.08em;

  color: #000000;

  flex-shrink: 0;
`;

const FooterHeroText_Span = styled(FooterHeroText)<{ bgColor?: string }>`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#7dfbb1')};
  border-radius: 32px;
  padding: 0 12px 0 2px;
  cursor: none;
`;

const CatLargePillContainer = styled.div<{ prop?: any }>(({ prop }) => ({
  width: '600px',
  height: '300px',

  borderRadius: '175px',

  backgroundColor: '#fff8e1',
}));

const CatLargePillImage = styled.div<{ src?: string }>(({ src }) => ({
  width: '100%',
  backgroundImage: `url(${src})`,
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '340px',
  backgroundPositionX: 'center',
  backgroundPositionY: 'top',
}));

// const FooterHeroTextLine = styled.div`
// 	display: flex;
// 	gap: 24px;
// `;

const FooterHeroImage = styled.img`
  width: 280px;
`;

const FooterTextsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: none;
  /* gap: 128px; */

  width: 100%;
  justify-content: space-around;
`;

const FooterTextCommonStyle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;

  color: #ffffff;
`;

const FooterTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: none;
  width: 340px;
`;

const FTC_FooterNavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: repeat(n, 1fr); */
  column-gap: 68px;
  row-gap: 12px;
  /* gap: 12px; */
  cursor: none;
`;

const FTC_FooterNavText = styled(FooterTextCommonStyle)`
  /* min-width: 240px; */
  cursor: pointer;
  cursor: none;
  font-size: 21px;
  line-height: 25px;
`;

const FTC_LogoText = styled(FooterTextCommonStyle)`
  font-weight: 700;
  font-size: 23px;
  line-height: 27px;
  cursor: none;
`;

const FTC_Description = styled(FooterTextCommonStyle)``;

const FTC_LegalLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 48px;
  cursor: none;
`;

const FTCL_PrivacyPolicyText = styled(FooterTextCommonStyle)`
  font-size: 16px;
  line-height: 19px;
  cursor: none;
  color: #9c9c9c;
`;

const FTCL_EmailText = styled(FooterTextCommonStyle)`
  font-size: 16px;
  line-height: 19px;
  cursor: none;
`;

const TestimonialCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 48px;
  width: 100%;
  cursor: none;
`;

const TestimonialCard = styled.div`
  /* width: 650px; */
  height: 350px;
  border-radius: 28px;
  background-color: #faf9f6;
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  cursor: none;

  align-items: center;

  gap: 16px;

  margin: 0 32px;
`;

const TestimonialPersonImage = styled.img`
  width: 90px;
  height: 90px;
  max-width: 90px;
  border-radius: 50%;
  cursor: none;
`;

const TestimonialText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  cursor: none;
  line-height: 100%;
  /* or 24px */

  text-align: center;
  letter-spacing: -0.055em;

  padding: 0 64px;
  cursor: none;

  color: #000000;
`;

const TestimonialPersonName = styled.p`
  font-style: normal;
  font-weight: 600;
  cursor: none;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  text-align: center;
  letter-spacing: -0.055em;
  color: #000000;
`;

const TestimonialPersonDesignation = styled.p`
  font-style: normal;
  font-size: 16px;
  cursor: none;
  line-height: 100%;
  /* identical to box height, or 16px */
  text-align: center;
  letter-spacing: -0.055em;
  color: #000000;
  font-weight: 400;
`;

const TestimonialPersonNameAndDesignationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: none;
  align-items: center;
  gap: 8px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  cursor: none;
`;

const CarouselLeftArrow = styled(ArrowCircleLeft)`
  cursor: pointer;
  cursor: none;
`;

const CarouselRightArrow = styled(ArrowCircleRight)`
  cursor: pointer;
  cursor: none;
`;

const RightBTN = styled.button`
  display: none;
  cursor: none;
`;

const LeftBTN = styled.button`
  display: none;
  cursor: none;
`;

const CarouselButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: none;
  padding: 16px 0px;
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

  const FeaturesData = {
    free: [
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
    ],
    premium: [
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
      'Unlimited access to static videos',
      'Unlimited static videos',
    ],
  };

  const navigate = useNavigate();

  function handleLoginClick() {
    navigate('/onboard');
  }

  const MarqueeData = [
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/ddb3f5157b9baf052dd8ec72da184be44ef84f39?fuid=974696877205230466',
    },
    {
      logo: 'https://www.figma.com/file/nHVnbvYtTgyuFZEQ6TV4kO/image/244698ab40d164b83d55518f3616afbd58ff6afc?fuid=974696877205230466',
    },
  ];
  // console.warn(MarqueeData.length);

  const leftBTNRef = useRef<HTMLButtonElement>(null);
  const rightBTNRef = useRef<HTMLButtonElement>(null);
  return (
    <MainContainer>
      <AnimatedCursor innerSize={10} outerSize={15} color="158,76,220" />
      <HeroMainContainer>
        <HeroContainer>
          <Header>
            <LogoText
              onClick={() => {
                navigate('/');
              }}
            >
              {'mama.'}
            </LogoText>

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
            <HeroText>{'Personalized learning for you'}</HeroText>
            <HeroBTN onClick={handleLoginClick}>
              {'Start your journey '}
            </HeroBTN>
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
      </HeroMainContainer>
      <ConnectWithTutorsTextContainer>
        <ConnectWithTutorsText>
          {'Connect with tutors across🌏'}
        </ConnectWithTutorsText>
      </ConnectWithTutorsTextContainer>
      <CarouselContainer>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          width={'100%'}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={true}
          centerMode={true}
          centerSlidePercentage={60}
          renderArrowNext={(onClickHandler, hasMore) =>
            hasMore && (
              <RightBTN ref={rightBTNRef} onClick={onClickHandler}>
                {'-->'}
              </RightBTN>
            )
          }
          renderArrowPrev={(onClickHandler, hasMore) =>
            hasMore && (
              <LeftBTN ref={leftBTNRef} onClick={onClickHandler}>
                {'<--'}
              </LeftBTN>
            )
          }
        >
          <TestimonialCard>
            <TestimonialPersonImage src={user_1_pfp} />
            <TestimonialText>
              {
                'We have become heavy users of Potion across our entire team. It has increased our sales team’s performance substantially and we are incorporating it into more and more of our routines every week.'
              }
            </TestimonialText>
            <TestimonialPersonNameAndDesignationContainer>
              <TestimonialPersonName>
                {'Brittany Chiang,'}
              </TestimonialPersonName>
              <TestimonialPersonDesignation>
                {'Researcher at MIT'}
              </TestimonialPersonDesignation>
            </TestimonialPersonNameAndDesignationContainer>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialPersonImage src={user_1_pfp} />
            <TestimonialText>
              {
                'We have become heavy users of Potion across our entire team. It has increased our sales team’s performance substantially and we are incorporating it into more and more of our routines every week.'
              }
            </TestimonialText>
            <TestimonialPersonNameAndDesignationContainer>
              <TestimonialPersonName>
                {'Brittany Chiang,'}
              </TestimonialPersonName>
              <TestimonialPersonDesignation>
                {'Researcher at MIT'}
              </TestimonialPersonDesignation>
            </TestimonialPersonNameAndDesignationContainer>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialPersonImage src={user_1_pfp} />
            <TestimonialText>
              {
                'We have become heavy users of Potion across our entire team. It has increased our sales team’s performance substantially and we are incorporating it into more and more of our routines every week.'
              }
            </TestimonialText>
            <TestimonialPersonNameAndDesignationContainer>
              <TestimonialPersonName>
                {'Brittany Chiang,'}
              </TestimonialPersonName>
              <TestimonialPersonDesignation>
                {'Researcher at MIT'}
              </TestimonialPersonDesignation>
            </TestimonialPersonNameAndDesignationContainer>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialPersonImage src={user_1_pfp} />
            <TestimonialText>
              {
                'We have become heavy users of Potion across our entire team. It has increased our sales team’s performance substantially and we are incorporating it into more and more of our routines every week.'
              }
            </TestimonialText>
            <TestimonialPersonNameAndDesignationContainer>
              <TestimonialPersonName>
                {'Brittany Chiang,'}
              </TestimonialPersonName>
              <TestimonialPersonDesignation>
                {'Researcher at MIT'}
              </TestimonialPersonDesignation>
            </TestimonialPersonNameAndDesignationContainer>
          </TestimonialCard>
        </Carousel>

        <CarouselButtonsContainer>
          <CarouselLeftArrow
            onClick={() => leftBTNRef?.current?.click()}
            size={42}
            weight="thin"
          />
          <CarouselRightArrow
            onClick={() => rightBTNRef?.current?.click()}
            size={42}
            weight="thin"
          />
        </CarouselButtonsContainer>
      </CarouselContainer>
      {/* <UniversityScrollerContainer>
        
			</UniversityScrollerContainer> */}
      <Marquee
        gradient={true}
        // gradientColor={[223, 219, 219]}
        gradientColor={[255, 255, 255]}
        speed={100}
        style={{
          width: '100%',
          height: '200px',
          // backgroundColor: 'white',
          borderRadius: '10px',
          margin: '100px 0px',
        }}
        pauseOnClick
      >
        {MarqueeData.map((item, index) => {
          return (
            <MarqueeItem key={index}>
              <MarqueeImage src={item.logo} />
            </MarqueeItem>
          );
        })}
      </Marquee>
      <PricingTextContainer>
        <PricingTextLarge>{'Choose a plan'}</PricingTextLarge>
        <PricingTextSmall>
          {'No Credit card required to start'}
        </PricingTextSmall>
      </PricingTextContainer>
      <PricingCardsContainer>
        <PricingAndFeaturesListContainer>
          <PricingCard>
            <PCT_Category>{'Free'}</PCT_Category>
            <PCT_Price>{'$0'}</PCT_Price>
            <PCT_Description>
              {'Free Forever. As long as you hustle. No credit card required'}
            </PCT_Description>
            <PricingContainer_CTABTN>
              {'Sign up for free'}
            </PricingContainer_CTABTN>
          </PricingCard>
          <FeaturesComparisonContainer>
            {FeaturesData.free?.map((item, index) => {
              return (
                <FeatureComparisonItem key={index}>
                  <FeatureComparisonItemCheckMark size={24} />
                  <FeatureComparisonItemText>{item}</FeatureComparisonItemText>
                </FeatureComparisonItem>
              );
            })}
          </FeaturesComparisonContainer>
        </PricingAndFeaturesListContainer>
        <PricingAndFeaturesListContainer>
          <PricingCard styleType={'v2'}>
            <PCT_Category>{'Premium'}</PCT_Category>
            <PCT_Price>{'$10'}</PCT_Price>
            <PCT_Description>
              {'30-day opt out guarantee. Cancel anytime.'}
            </PCT_Description>
            <PricingContainer_CTABTN styleType={'v2'}>
              {'Sign up for free'}
            </PricingContainer_CTABTN>
          </PricingCard>
          <FeaturesComparisonContainer>
            {FeaturesData.premium?.map((item, index) => {
              return (
                <FeatureComparisonItem key={index}>
                  <FeatureComparisonItemCheckMark size={24} />
                  <FeatureComparisonItemText>{item}</FeatureComparisonItemText>
                </FeatureComparisonItem>
              );
            })}
          </FeaturesComparisonContainer>
        </PricingAndFeaturesListContainer>
      </PricingCardsContainer>
      <FooterHeroContainer styleType={'v2'}>
        <FooterTextContainer>
          <FooterHeroText>{'Use mama to '}</FooterHeroText>
          <FooterHeroText_Span>{'add'}</FooterHeroText_Span>
          <FooterHeroText_Span>{'value'}</FooterHeroText_Span>
          <FooterHeroText>{'to your learning'}</FooterHeroText>
          <FooterHeroText>{'and preparation.'}</FooterHeroText>
          {/* <FooterHeroText_Span>{"cool!"}</FooterHeroText_Span> */}
        </FooterTextContainer>
        <CatLargePillContainer>
          <CatLargePillImage src={catFace} />
        </CatLargePillContainer>

        <FooterHeroFeaturesTextGrid>
          <FooterHeroFeaturesTextGridItem>
            <FooterHeroFeaturesTextGridItem_Title>
              {'Concept Videos'}
            </FooterHeroFeaturesTextGridItem_Title>
            <FooterHeroFeaturesTextGridItem_Description>
              {'All videos are suited well for your needs.'}
            </FooterHeroFeaturesTextGridItem_Description>
          </FooterHeroFeaturesTextGridItem>
          <FooterHeroFeaturesTextGridItem>
            <FooterHeroFeaturesTextGridItem_Title>
              {'Study Guides'}
            </FooterHeroFeaturesTextGridItem_Title>
            <FooterHeroFeaturesTextGridItem_Description>
              {'All videos are suited well for your needs.'}
            </FooterHeroFeaturesTextGridItem_Description>
          </FooterHeroFeaturesTextGridItem>
          <FooterHeroFeaturesTextGridItem>
            <FooterHeroFeaturesTextGridItem_Title>
              {'Note Banks'}
            </FooterHeroFeaturesTextGridItem_Title>
            <FooterHeroFeaturesTextGridItem_Description>
              {'All videos are suited well for your needs.'}
            </FooterHeroFeaturesTextGridItem_Description>
          </FooterHeroFeaturesTextGridItem>
          <FooterHeroFeaturesTextGridItem>
            <FooterHeroFeaturesTextGridItem_Title>
              {'Sell Docs'}
            </FooterHeroFeaturesTextGridItem_Title>
            <FooterHeroFeaturesTextGridItem_Description>
              {'All videos are suited well for your needs.'}
            </FooterHeroFeaturesTextGridItem_Description>
          </FooterHeroFeaturesTextGridItem>
        </FooterHeroFeaturesTextGrid>
      </FooterHeroContainer>
      <FooterHeroContainer>
        <FooterTextContainer>
          <FooterHeroText>{"Don't learn the "}</FooterHeroText>
          <FooterHeroText_Span>{'old'}</FooterHeroText_Span>
          <FooterHeroText_Span>{'boring'}</FooterHeroText_Span>
          <FooterHeroText>{'way, we have'}</FooterHeroText>
          <FooterHeroText>{'Something'}</FooterHeroText>
          <FooterHeroText_Span bgColor={'#bdefff'}>
            {'cool!'}
          </FooterHeroText_Span>
        </FooterTextContainer>

        <FooterHeroImage src={catFace} />
      </FooterHeroContainer>
      <FooterContainer>
        <FooterTextsMainContainer>
          <FooterTextsContainer>
            <FTC_LogoText>{'mama.'}</FTC_LogoText>
            <FTC_Description>{'Personalised learning for you'}</FTC_Description>
            <FTC_LegalLinks>
              <FTCL_PrivacyPolicyText>
                {'Privacy Policy'}
              </FTCL_PrivacyPolicyText>
              <FTCL_EmailText>{'workfortrf@gmail.com'}</FTCL_EmailText>
            </FTC_LegalLinks>
          </FooterTextsContainer>
          <FooterTextsContainer>
            <FTC_FooterNavContainer>
              <FTC_FooterNavText>{'Home'}</FTC_FooterNavText>
              <FTC_FooterNavText>{'FAQs'}</FTC_FooterNavText>
              <FTC_FooterNavText>{'Dashboard'}</FTC_FooterNavText>
              <FTC_FooterNavText>{'Pricing'}</FTC_FooterNavText>
              <FTC_FooterNavText>{'Tutor'}</FTC_FooterNavText>
              <FTC_FooterNavText>{'Sign up'}</FTC_FooterNavText>
            </FTC_FooterNavContainer>
          </FooterTextsContainer>
        </FooterTextsMainContainer>
      </FooterContainer>
    </MainContainer>
  );
}

export default LandingPage;
