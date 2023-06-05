import { useDispatch, useSelector } from 'react-redux';
import { _RejectInvite } from '../../../../Store/Thunk/meeting';
import AcceptMeetingModal from '../AcceptMeetingModal';
import { useState } from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;

  width: 100%;
  box-sizing: border-box;

  background: ${({ theme }) => theme.app.shades.white};
  border: 0.8px solid ${({ theme }) => theme.app.neutral[300]};
  border-radius: 8px;
`;

const Status =styled.div`
 display: inline-block;
  padding: 5px 10px;
  background: #8330c2;
  border-radius: 20px;
  font-size: 14px;
  color: #ffffff;
  text-transform: capitalize;
`;


function MeetingInfo({men}:{men:any}) {
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
			<MainContainer >
				<p>
					{user?.isMentor?men.userFullnameMentee:men.userFullnameMentor}
				</p>	
				<p>{men.meetingTopic}</p>
				<Status>{men.meetingStatus}</Status>
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

				{men.meetingStatus==='accepted' &&<a href={men.meetingURL} target='_blank' rel='noreferrer'>{men.meetingURL}</a>}
				
			</MainContainer>
			{ismeetingModalOpen && <AcceptMeetingModal meetingId={men._id} setIsMeetingModalOpen={setIsMeetingModalOpen}/>}
		</>
	);
}


export default MeetingInfo;