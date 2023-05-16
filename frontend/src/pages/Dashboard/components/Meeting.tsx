import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MentorMeetingModal from './MentorMeetingModal';
import { useDispatch, useSelector } from 'react-redux';
import { _getMentorList } from '../../../Store/Thunk/users';
import { _getMeetings } from '../../../Store/Thunk/meeting';
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
			</div>
			
		</>
	);
}

function Meeting() {
	const dispatch:any = useDispatch();
	const userDetails = useSelector((state:any)=>state?.appdata?.user?._id);
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

			{
				mentors.map((men:any,index:any)=>(
					<SeperateMentor key={index} men={men} />
				))
			}

		</Container>
	);
}

export default Meeting;