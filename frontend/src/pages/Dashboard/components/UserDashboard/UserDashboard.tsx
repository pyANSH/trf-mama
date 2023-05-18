import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IndividualMentorsList from './IndividualMentorsList';
import AcceptMeetingModal from '../AcceptMeetingModal';
import MentorMeetingModal from '../MentorMeetingModal';
import { useDispatch, useSelector } from 'react-redux';
import { _RejectInvite, _getMeetings } from '../../../../Store/Thunk/meeting';
import { _getMentorList } from '../../../../Store/Thunk/users';
import MeetingInfo from './MeetingInfo';
import { appTypography } from '../../../../config/styles';


const MainContainer =  styled.div`
display: flex;
flex-direction: column;
gap: 60px;
padding-block-end: 24px;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: sticky;
  top: 0;
  background: #fcfcfc;
  z-index: 1;
`;

const ContentTitle = styled.p`
  font-weight: 500;
  font-size: 36px;
  /* line-height: 24px; */
`;

const ContentCaption = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #7c7c7c;
`;

const MentorsListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 100%;
box-sizing: border-box;
`;


const InfoText =styled.p(({theme})=>({
	...appTypography.paraMed.regular,
	color:theme.app.typography['700']
}));





function UserDashboard() {

	
	const dispatch:any = useDispatch();
	const userDetails = useSelector((state:any)=>state?.appdata?.user?._id);
	const user =useSelector((state:any)=>state?.appdata?.user);
	useEffect(() => {
		dispatch(_getMentorList({type:'as'}));


		dispatch(_getMeetings({userId:userDetails}));
  
	}, []);

	const mentors = useSelector((state:any)=>state.mentors.mentorList);
	const meetings = useSelector((state:any)=>state.meetings.meetingDetails);

	console.log('mentors : ',mentors);
	return (
		<MainContainer>
			<ContentHeader>
				<ContentHeader>
					<ContentTitle>{'Dashboard'}</ContentTitle>
					<ContentCaption>{'In this dashboard you can find various things blah blah blah! fix this text @anmol'}</ContentCaption>
				</ContentHeader>
			</ContentHeader>
			
			<MentorsListContainer>
				{meetings?.length>0 &&<>
					<InfoText>Your Scheduled Meetings</InfoText>
					{meetings?.map((men:any,index:any)=>(
						<MeetingInfo key={index} men={men} />
					))}

				</>}
				
				<InfoText>Schedule call</InfoText>
				{user?.isMentor&&user?.isMentor===false &&	mentors.map((men:any,index:any)=>(
					<IndividualMentorsList key={index} men={men} />
				))
				}
				

				{
					mentors.map((men:any,index:number) => {
						return (
							<IndividualMentorsList
								key={index}
								men={men}
							/>
						);
					})
				}
			</MentorsListContainer>

		</MainContainer>
	);
}

export default UserDashboard;