import React from 'react';
import styled from 'styled-components';
import IndividualMentorsList from './IndividualMentorsList';


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


function UserDashboard() {
	const MentorsData = [
		[
			{
				'name': 'Samay Raina',
				'userId': '1'
			},
			{
				'name': 'Gaurav Gupta',
				'userId': '2'
			},
			{
				'name': 'Zakir Khan',
				'userId': '3'
			},
			{
				'name': 'Biswa Kalyan Rath',
				'userId': '4'
			},
			{
				'name': 'Aditi Mittal',
				'userId': '5'
			},
			{
				'name': 'Kenny Sebastian',
				'userId': '6'
			},
			{
				'name': 'Atul Khatri',
				'userId': '7'
			},
			{
				'name': 'Sumukhi Suresh',
				'userId': '8'
			},
			{
				'name': 'Rahul Subramanian',
				'userId': '9'
			},
			{
				'name': 'Varun Grover',
				'userId': '10'
			},
			{
				'name': 'Vir Das',
				'userId': '11'
			},
			{
				'name': 'Aditi Bhatia',
				'userId': '12'
			},
			{
				'name': 'Zakhir Mushtaq',
				'userId': '13'
			},
			{
				'name': 'Amit Tandon',
				'userId': '14'
			},
			{
				'name': 'Neeti Palta',
				'userId': '15'
			},
			{
				'name': 'Abhishek Upmanyu',
				'userId': '16'
			},
			{
				'name': 'Aadar Malik',
				'userId': '17'
			},
			{
				'name': 'Gursimran Khamba',
				'userId': '18'
			},
			{
				'name': 'Tanmay Bhatt',
				'userId': '19'
			},
			{
				'name': 'Nishant Tanwar',
				'userId': '20'
			},
			{
				'name': 'Anmol Bajpai',
				'userId': '20'
			}
		]
	];
	return (
		<MainContainer>
			<ContentHeader>
				<ContentHeader>
					<ContentTitle>{'Dashboard'}</ContentTitle>
					<ContentCaption>{'In this dashboard you can find various things blah blah blah! fix this text @anmol'}</ContentCaption>
				</ContentHeader>
			</ContentHeader>
			<MentorsListContainer>
				{
					MentorsData[0].map((mentor) => {
						return (
							<IndividualMentorsList 
								key={mentor.userId}
								userId={mentor.userId}
								userName={mentor.name}
							/>
						);
					})
				}
			</MentorsListContainer>

		</MainContainer>
	);
}

export default UserDashboard;