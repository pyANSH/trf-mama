import React from 'react';
import styled from 'styled-components';
import { appTypography } from '../../../config/styles';
import { X } from 'phosphor-react';
const Backdrop = styled.div(({ theme }) => ({
	position: 'fixed',
	height: '100vh',
	width: '100vw',
	top: '50%',
	left: '50%',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transform: 'translate(-50%, -50%)',
	background: theme.app.neutral['500'],
	opacity: 0.3,
	zIndex: 2,
}));

const ModalMainContainer = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '24px 30px 14px',
	gap: '14px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '420px',
	background: theme.app.shades.white,
	boxShadow: '0px -4px 42px rgba(84, 84, 84, 0.03)',
	borderRadius: '24px',
	zIndex: 3,
	'@media (max-width:575px)': {
		width: '300px',
	},
}));

const HeaderContainer =styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`;

const CloseContainer =styled.div`
display: flex;
gap: 8px;
background:${({theme})=>theme.app.neutral['800']};
border-radius: 100px;
align-items: center;
padding: 8px;
cursor: pointer;
`;

const CloseText =styled.p(({theme})=>({
	...appTypography.paraMed.regular,
	color:theme.app.shades.white
}));

const CloseIconMain =styled(X)(({theme})=>({
	width:'16px',
	height:'16px',
	color:theme.app.shades.white,
	cursor:'pointer'
}));

const MainContainer =styled.div``;

const DatePicker =styled.input``;

const TimePicker =styled.input``;


function MentorMeetingModal() {
	const today = new Date();
	console.log(today);

	
    
	return (
		<>
			<Backdrop />
			<ModalMainContainer>
				<HeaderContainer>
					<CloseContainer>
						<CloseText>Close</CloseText>
						<CloseIconMain/>
					</CloseContainer>
				</HeaderContainer>
				<MainContainer>
					<DatePicker type='date'/>
					<TimePicker type='time'/>
				</MainContainer> 
			</ModalMainContainer>
                
		</>
	);
}

export default MentorMeetingModal;