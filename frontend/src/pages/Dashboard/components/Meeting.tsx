import React, { useState } from 'react';
import styled from 'styled-components';
import MentorMeetingModal from './MentorMeetingModal';
import { useDispatch, useSelector } from 'react-redux';
import { _getMentorList } from '../../../Store/Thunk/users';
const Container =styled.div``;


function Meeting() {
	const dispatch:any = useDispatch();

	dispatch(_getMentorList({type:'as'}));
	const mentors = useSelector((state:any)=>state.mentors.mentorList);

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
				{openMeeting && <MentorMeetingModal/>}
			</>
		);
	}

	return (
		<Container>
			{/* <MentorMeetingModal/> */}
			{
				mentors.map((men:any)=>(
					<SeperateMentor men={men} />
				))
			}

		</Container>
	);
}

export default Meeting;