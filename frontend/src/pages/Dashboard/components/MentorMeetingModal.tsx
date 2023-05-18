import React, { useState } from 'react';
import styled from 'styled-components';
import { appTypography } from '../../../config/styles';
import { X } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { _scheduleMeeting } from '../../../Store/Thunk/meeting';
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

const DatePicker =styled.input``;

const TimePicker =styled.input``;


const MeetingTitle =styled.input``;

const MeetingDesc =styled.input``;

function MentorMeetingModal({setOpenMeeting,mentorId}:{setOpenMeeting:any,mentorId:any}) {
	
	
	const [date, setDate] = useState();
	console.log(date);
	const [time, setTime] = useState();
	const [title, setTitle] = useState();
	const [desc, setDesc] = useState();
	const userDetails =useSelector((state:any)=>state?.appdata?.user);
	const dispatch:any = useDispatch();
	function handleClick() {
		const body={
			mentorId,
			menteeId:userDetails?._id,
			meetingDate:date,
			meetingTime:time,
			meetingTopic:title,
			meetingDescription:desc,
			meetingDuration:1

		};
		dispatch(_scheduleMeeting({body:body}));

		
		console.log(date,time,title,desc,mentorId,userDetails?._id);
		
	}
	return (
		<>
			<Backdrop />
			<ModalMainContainer>
				<HeaderContainer>
					<CloseContainer onClick={()=>setOpenMeeting(false)}>
						<CloseText>Close</CloseText>
						<CloseIconMain/>
					</CloseContainer>
				</HeaderContainer>
				<MainContainer>
					<DatePicker value={date} onChange={(e:any)=>setDate(e.target.value)} type='date'/>
					<TimePicker value={time} onChange={(e:any)=>setTime(e.target.value)} type='time'/>
					<MeetingTitle placeholder='Title' value={title} onChange={(e:any)=>setTitle(e.target.value)}/>
					<MeetingDesc placeholder='description' value={desc} onChange={(e:any)=>setDesc(e.target.value)}/>
					<SubmitBtn onClick={handleClick}>Schedule</SubmitBtn>
				</MainContainer> 
			</ModalMainContainer>
                
		</>
	);
}

export default MentorMeetingModal;