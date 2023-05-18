import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MentorMeetingModal from './MentorMeetingModal';
import { useDispatch, useSelector } from 'react-redux';
import { _getMentorList } from '../../../Store/Thunk/users';
import { _AcceptInvite, _RejectInvite, _getMeetings } from '../../../Store/Thunk/meeting';
import AcceptMeetingModal from './AcceptMeetingModal';
const Container =styled.div`
display:flex;
flex-direction:column;
gap:16px;
`;

function SeperateMentor({men}:{men:any}) {
	const [openMeeting, setOpenMeeting] = useState(false);
	return(
		<>
			<div  style={{display:'flex'}}>
				<p>
					{men.userFullName}
				</p>	
				<button style={{cursor:'pointer'}} onClick={()=>setOpenMeeting(true)}>Schedule meeting</button>
			</div>
			{openMeeting && <MentorMeetingModal setOpenMeeting={setOpenMeeting} mentorId={men._id}  />}
		</>
	);
}
function SeperateMeetings({men}:{men:any}) {
	const dispatch:any = useDispatch();
	const user =useSelector((state:any)=>state?.appdata?.user);

	const [ismeetingModalOpen, setIsMeetingModalOpen] = useState(false);

	function handleAccept() {

		setIsMeetingModalOpen(true);
		
	}

	function handleReject() {
		const body = {
			meetingId:men._id,
			meetingStatus:'rejected'
		};
		dispatch(_RejectInvite({body}));
		
		
	}
	return(
		<>
			<div  style={{display:'flex'}}>
				<p>
					{men.meetingTopic}
				</p>	
				<p>{men.meetingDescription}</p>
				<p>{men.meetingStatus}</p>
				<p>{men.meetingDate}</p>
				<p>{men.meetingTime}</p>
				{user?.isMentor && men.meetingStatus==='pending' && <>
					<p onClick={handleAccept}>Accept</p>
					<p onClick={handleReject}>Reject</p>
				</>}
				{
					men.meetingStatus==='accepted' && <p style={{color:'green'}}>Accepted</p>
				}
				{
					men.meetingStatus==='rejected' && <p style={{color:'red'}}>Rejected</p>
				}

				<a href={men.meetingURL} target='_blank' rel='noreferrer'>{men.meetingURL}</a>
				
			</div>
			{ismeetingModalOpen && <AcceptMeetingModal meetingId={men._id} setIsMeetingModalOpen={setIsMeetingModalOpen}/>}
		</>
	);
}

function Meeting() {
	const dispatch:any = useDispatch();
	const userDetails = useSelector((state:any)=>state?.appdata?.user?._id);
	const user =useSelector((state:any)=>state?.appdata?.user);
	useEffect(() => {
		dispatch(_getMentorList({type:'as'}));
		if(userDetails){

			dispatch(_getMeetings({userId:userDetails}));
		}
  
	}, [userDetails]);

	const mentors = useSelector((state:any)=>state.mentors.mentorList);
	const meetings = useSelector((state:any)=>state.meetings.meetingDetails);



	return (
		<Container>
			{/* <MentorMeetingModal/> */}
			{meetings?.map((men:any,index:any)=>(
				<SeperateMeetings key={index} men={men} />
			))}

			{user?.isMentor===false &&	mentors.map((men:any,index:any)=>(
				<SeperateMentor key={index} men={men} />
			))
			}

		</Container>
	);
}

export default Meeting;