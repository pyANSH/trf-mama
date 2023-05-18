import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Trash } from 'phosphor-react';

import { useParams } from 'react-router-dom';
import { appTypography } from '../../../../config/styles';
import Avvvatars from 'avvvatars-react';
import MentorMeetingModal from '../MentorMeetingModal';

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

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
`;

const BTNsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const BTNCommon = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '6px 16px',
	gap: '4px',
	borderRadius: '100px',
	border: 'none',
	cursor: 'pointer',
	width: '120px',
	outline: 'none',
	boxSizing: 'border-box',
};

const ManageBTN = styled.div(({ theme }) => ({
	...(BTNCommon as any),
	...appTypography.paraSmall.regular,
	color: theme.app.typography[700],
	background: theme.app.shades.white,
	border: `0.6px solid ${theme.app.neutral[300]}`,
}));

const RejectBTN = styled.div(({ theme }) => ({
	...(BTNCommon as any),
	...appTypography.paraSmall.regular,
	// border: `0.6px solid ${theme.app.neutral[300]}`,
	// color: theme.app.typography[700],
	borderRadius: '50%',
	padding: '6px',
	width: 'auto',
	color: theme.app.error[500],
	background: theme.app.shades.white,
	'&:hover': {
		background: theme.app.neutral[50],
	},
}));

const RoleBTN = styled.button<{ roleTagColorBG?: string; isCreator?: boolean }>(
	({ theme, roleTagColorBG, isCreator }) => ({
		// background: role === 'custom' ? theme.app.warning[100] :
		// 	role === 'admin' ? theme.app.primary[100] :
		// 		role === 'moderator' ? theme.landingPage.illustrationGreen[100] :
		// 			theme.app.typography[100],
		border: 'none',
		borderRadius: '32px',
		padding: '4px 8px',
		outline: 'none',

		background: roleTagColorBG ? roleTagColorBG : theme.app.warning[100],
	}),
);

const RoleBTNText = styled.p<{
  roleTagColorText?: string;
  noOfLinesToDisplay?: number;
}>(({ theme, noOfLinesToDisplay, roleTagColorText }) => ({
	...appTypography.overlineXSmall,
	textTransform: 'uppercase',
	color: roleTagColorText ? roleTagColorText : theme.app.warning[500],
	overflowWrap: 'anywhere', //add this to break long non-breaking texts
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	lineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitLineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitBoxOrient: 'vertical',
}));

const ModeratorUsernameText = styled.p<{
  noOfLinesToDisplay?: number;
}>(({ theme, noOfLinesToDisplay }) => ({
	...appTypography.paraSmall.regular,
	color: theme.app.typography[700],

	overflowWrap: 'anywhere', //add this to break long non-breaking texts

	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	lineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitLineClamp: noOfLinesToDisplay ? noOfLinesToDisplay : 1,
	WebkitBoxOrient: 'vertical',
}));

const ModeratorPFP = styled.div<{
  src?: string;
}>(({ theme, src }) => ({
	height: '36px',
	width: '36px',
	minWidth: '36px',
	minHeight: '36px',
	borderRadius: '50%',
	backgroundImage: src ? `url(${src})` : 'none', // Set 'none' instead of null
	border: src ? 'none' : `1px dashed ${theme.app.neutral['300']}`, // Set 'none' instead of null
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));


const DeleteIcon = styled(Trash)(({ theme }) => ({
	color: theme.app.error['500'],
}));

type propsType = {
	men:any
};

function IndividualMentorsList(props:propsType) {
	const {men } = props;

	const [isRequestSent, setIsRequestSent] = useState(false);
	const [openMeeting, setOpenMeeting] = useState(false);

	function handleRequestClick() {
		setOpenMeeting(true);
	}


	return (
		<>
			<MainContainer>
				<RightContainer>
					{/* <ModeratorPFP
						src={
							isCreator
								? createdBy?.displayPicture?.lowres?.url
								: userSelector?.displayPicture?.lowres?.url
						}
					/> */}
					
					<ModeratorUsernameText>
						{men?.userFullName}
					</ModeratorUsernameText>
					{
						// <>
						// 	<RoleBTN 
						// 	// roleTagColorBG={roleTagColorBG}
						// 	// isCreator={isCreator}
						// 		isCreator={true}
						// 	>
						// 		<RoleBTNText
						// 		// roleTagColorText={roleTagColorText}
						// 		>
						// 			{/* {isCreator ? 'Creator 👑' : userSelector?.role?.title} */}
						// 			{'Mentor 🧑‍🏫'}
						// 		</RoleBTNText>
						// 	</RoleBTN>
						// </>
					}
				</RightContainer>
				{ 
					<BTNsContainer onClick={handleRequestClick}>
						<ManageBTN>{isRequestSent?'Request Sent':'Send Request'}</ManageBTN>
						{/* <RejectBTN onClick={()=>console.log('')}>
							<DeleteIcon size={20} />
						</RejectBTN> */}
					</BTNsContainer>
				}
			</MainContainer>
			{openMeeting && <MentorMeetingModal setOpenMeeting={setOpenMeeting} mentorId={men._id}  />}
		</>
	);
}

export default IndividualMentorsList;
