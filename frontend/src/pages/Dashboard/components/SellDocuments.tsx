import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
	Monitor,
	UploadSimple,
	CheckSquareOffset,
	FireSimple,
	Medal,
} from 'phosphor-react';
import SellDocumentModal from './SellDocumentModal';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 30%);
  align-content: space-around;
  width: 50%;
`;

const CommonTitleText = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`;

const UploadDocumentContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const UplaodContainer = styled.div`
  width: 100%;

  height: 100%;
  border: 1px dashed #c8c8c8;
  border-radius: 40px;
`;
const RecentUploadDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 1px dashed #c8c8c8;
  border-radius: 40px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const StatsCard = styled.div`
  width: 30%;
  height: 100%;
  background: #3b4bd5;
  border: 1px solid #dcdcdc;
  border-radius: 40px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatIconContainer = styled.div`
  padding: 12px;
  background: #fafafa;
  border-radius: 14px;
  width: fit-content;
`;

const MonitorIcon = styled(Monitor)`
  width: 24px;
  height: 24px;
`;

const StatsTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

const StatsInfo = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

const StatsNumber = styled.p`
  font-weight: 500;
  font-size: 36px;
  text-align: center;
  line-height: 42px;
  letter-spacing: -0.06em;
  color: #ffffff;
`;

const StatsCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: 100%;
`;

const RecentUploadContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const RightContainer = styled.div`
  display: grid;
  grid-template-rows: 47% 47%;
  gap: 24px;
  width: 40%;
`;

const RankingContainer = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 40px;
  padding: 45px 38px;
  display: flex;
  justify-content: center;
  gap: 9px;
  align-items: flex-end;
`;

const PlaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
`;

const SecondPlaceBar = styled.div`
  border: 1px solid #3b4bd5;
  border-radius: 30px 30px 0px 0px;
  width: 113px;
  height: 151px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const FirstPlaceBar = styled.div`
  border: 1px solid #3b4bd5;
  border-radius: 30px 30px 0px 0px;
  width: 113px;
  height: 226px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const ThirdPlaceBar = styled.div`
  border: 1px solid #3b4bd5;
  border-radius: 30px 30px 0px 0px;
  width: 113px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  object-fit: cover;
`;

const ProfileName = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const PlaceText = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;

const PlaceTextDesc = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const HowWorksContainer = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 40px;
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const HowItWorksTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
`;

const HowWorksSingleContainer = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  padding: 12px;
  background-color: #dcdcdc;
  border-radius: 100px;
`;

const UploadIcon = styled(UploadSimple)`
  width: 24px;
  height: 24px;
`;
const CheckIcon = styled(CheckSquareOffset)`
  width: 24px;
  height: 24px;
`;
const FlameIcon = styled(FireSimple)`
  width: 24px;
  height: 24px;
`;
const BadgeIcon = styled(Medal)`
  width: 24px;
  height: 24px;
`;

const HowWorksSingleCaption = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const HowWorksSingleMainContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const NoInput = styled.input`
display: none;
`;

function SellDocuments() {
	const [uploadFiles, setUploadFiles] = useState();
	const [isDetailsModal, setIsDetailsModal] = useState(false);
	const uploadRef:any=useRef();

	function handleUploadClick() {
		uploadRef.current.click();
	}


	function handleUpload(e:any) {
		e.preventDefault;
		setUploadFiles(e.target.files[0]);
	}

	useEffect(() => {
		if(uploadFiles){
			setIsDetailsModal(true);
		}

	}, [uploadFiles]);


	console.log(uploadFiles);
  
	return (
		<Container>
			<LeftContainer>
				<UploadDocumentContainer>
					<CommonTitleText>Upload Document</CommonTitleText>
					<UplaodContainer onClick={handleUploadClick}>
          
						<NoInput type='file' ref={uploadRef} onChange={handleUpload} />
					</UplaodContainer>


					{isDetailsModal && <SellDocumentModal uploadFiles={uploadFiles} setUploadFiles={setUploadFiles}/>}
				</UploadDocumentContainer>

				<StatsContainer>
					<CommonTitleText>Statistics</CommonTitleText>

					<StatsCardContainer>
						<StatsCard>
							<StatIconContainer>
								<MonitorIcon />
							</StatIconContainer>
							<StatsInfo>
								<StatsTitle>Total Documents</StatsTitle>

								<StatsNumber>43</StatsNumber>
							</StatsInfo>
						</StatsCard>
						<StatsCard>
							<StatIconContainer>
								<MonitorIcon />
							</StatIconContainer>
							<StatsInfo>
								<StatsTitle>Total Documents</StatsTitle>

								<StatsNumber>43</StatsNumber>
							</StatsInfo>
						</StatsCard>
						<StatsCard>
							<StatIconContainer>
								<MonitorIcon />
							</StatIconContainer>
							<StatsInfo>
								<StatsTitle>Total Documents</StatsTitle>

								<StatsNumber>43</StatsNumber>
							</StatsInfo>
						</StatsCard>
					</StatsCardContainer>
				</StatsContainer>

				<RecentUploadContainer>
					<CommonTitleText>Recent Uploads</CommonTitleText>

					<RecentUploadDiv />
				</RecentUploadContainer>
			</LeftContainer>
			<RightContainer>
				<RankingContainer>
					<PlaceContainer>
						<ProfilePic src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg" />
						<ProfileName>Dianna</ProfileName>
						<SecondPlaceBar>
							<PlaceText>2nd</PlaceText>
							<PlaceTextDesc>43 PTS 60$</PlaceTextDesc>
						</SecondPlaceBar>
					</PlaceContainer>

					{/* //first place */}
					<PlaceContainer>
						<ProfilePic src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg" />
						<ProfileName>Wade</ProfileName>
						<FirstPlaceBar>
							<PlaceText>1st</PlaceText>
							<PlaceTextDesc>61 PTS 100$</PlaceTextDesc>
						</FirstPlaceBar>
					</PlaceContainer>

					{/* third place  */}

					<PlaceContainer>
						<ProfilePic src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg" />
						<ProfileName>Prantosh</ProfileName>
						<ThirdPlaceBar>
							<PlaceText>3rd</PlaceText>
							<PlaceTextDesc>29 PTS 60$</PlaceTextDesc>
						</ThirdPlaceBar>
					</PlaceContainer>
				</RankingContainer>

				<HowWorksContainer>
					<HowItWorksTitle>How it works</HowItWorksTitle>
					<HowWorksSingleMainContainer>
						<HowWorksSingleContainer>
							<IconContainer>
								<UploadIcon />
							</IconContainer>
							<HowWorksSingleCaption>
                Upload your work. You can share class notes, study guides and
                much more.
							</HowWorksSingleCaption>
						</HowWorksSingleContainer>
						<HowWorksSingleContainer>
							<IconContainer>
								<CheckIcon />
							</IconContainer>
							<HowWorksSingleCaption>
                Our systems and mentors will review it for quality checks.
							</HowWorksSingleCaption>
						</HowWorksSingleContainer>
						<HowWorksSingleContainer>
							<IconContainer>
								<FlameIcon />
							</IconContainer>
							<HowWorksSingleCaption>
                Your work is made available to students around the globe.
							</HowWorksSingleCaption>
						</HowWorksSingleContainer>
						<HowWorksSingleContainer>
							<IconContainer>
								<BadgeIcon />
							</IconContainer>
							<HowWorksSingleCaption>
                Your work will earn you credits which can be redeemed for
                exciting rewards.
							</HowWorksSingleCaption>
						</HowWorksSingleContainer>
					</HowWorksSingleMainContainer>
				</HowWorksContainer>
			</RightContainer>
		</Container>
	);
}

export default SellDocuments;