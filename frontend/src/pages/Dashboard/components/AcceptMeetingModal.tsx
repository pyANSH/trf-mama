import { X } from 'phosphor-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { appTypography } from '../../../config/styles';
import { _AcceptInvite } from '../../../Store/Thunk/meeting';
import { useDispatch } from 'react-redux';
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

const MainContainer =styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`;

const LinkInput =styled.input(({theme})=>({

}));

const SubmitBtn =styled.div`
display: flex;
gap: 8px;
background:${({theme})=>theme.app.neutral['800']};
border-radius: 100px;
align-items: center;
padding: 8px;
cursor: pointer;
color:${({theme})=>theme.app.shades.white};
justify-content: center;
`;


function AcceptMeetingModal({setIsMeetingModalOpen,meetingId}:{setIsMeetingModalOpen:any,meetingId:any}) {
	const dispatch:any = useDispatch();


	const [link, setLink] = useState();

	function handleSubmit() {
		if(!link){
			return;
		}
    	const body = {
			meetingId,
			meetingStatus:'accepted',
			meetingURL:link
		};
		dispatch(_AcceptInvite({body}));
	}


	return (
		<>
			<Backdrop />
			<ModalMainContainer>
				<HeaderContainer>
					<CloseContainer onClick={()=>setIsMeetingModalOpen(false)}>
						<CloseText>Close</CloseText>
						<CloseIconMain/>
					</CloseContainer>
				</HeaderContainer>
				<MainContainer>
					<LinkInput value={link} onChange={(e:any)=>setLink(e.target.value)} placeholder='enter meeting link'/>
					<SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
				</MainContainer>
			</ModalMainContainer>
		</>
	);
}

export default AcceptMeetingModal;