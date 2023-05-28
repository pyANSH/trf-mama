import React,{useState} from 'react';
import styled from 'styled-components';
import { ResponsiveConfigs } from '../../../../config/styles';
import HelpCentreModal from './HelpCentreModal';

// type Props = {}

// function Community({}: Props) {

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    background: #fcfcfc;
    height: 100%;
    padding: 0 24px 0 0;
`;

const HeroTextAndBTNContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* gap: 56px; */

  min-height: calc(100vh - ${ResponsiveConfigs.dashboardHeaderHeight});
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

const BTN_SignUp = styled(Button)`
  padding: 19px 63px;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
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
  font-size: 48px;
  line-height: 113px;
  text-align: center;

  width: 100%;
  max-width: 800px;
`;

function HelpCentre() {
	const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

	function handleHelpClick () {
		setIsHelpModalOpen(true);
	}

	return (
		<>
			<MainContainer>
				<HeroTextAndBTNContainer>
					<HeroText>{'mama. help centre'}</HeroText>
					<HeroBTN onClick={handleHelpClick}>
						{'Create a ticket '}
					</HeroBTN>
				</HeroTextAndBTNContainer>
			</MainContainer>
			{isHelpModalOpen && 
				<HelpCentreModal
					setIsHelpModalOpen={setIsHelpModalOpen}
				/>
			}
		</>
	);
}

export default HelpCentre;