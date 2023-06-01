import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Check, CaretDown, CaretUp } from 'phosphor-react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addInterest,
	initUpdate,
	removeInterest,
} from '../../../Store/Reducers/Profile';
import { X } from 'phosphor-react';
import { _updateUser } from '../../../Store/Thunk/Onboard';
import { _updateUserDetails } from '../../../Store/Thunk/users';
import { showToast } from '../../../Store/Reducers/onboard';
import img from '../../../assets/SweetGirl.png';
import Avvvatars from 'avvvatars-react';
import { enqueueSnackbar } from 'notistack';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-block-end: 24px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: sticky;
  top: 0;
  background: #fcfcfc;
  z-index: 1;
`;

const Topic = styled.p`
  font-weight: 500;
  font-size: 36px;
  /* line-height: 24px; */
`;

const Caption = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #7c7c7c;
  background: #fcfcfc;
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 30%;

  width: 100%;
  height: 90%;

  padding-block-end: 64px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  width: 60%;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`;

const CommonInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const CommonInputText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const CommonInput = styled.input`
  border: 1px solid grey;
  border-radius: 8px;
  font-size: 16px;
  padding: 12px 16px;
  color: #757d8a;
  border: 1px solid #e1e3e6;
  &:focus {
    outline: none;
    border: 1px solid #4e73f8;
    outline: 1px solid #4e73f8;
  }
`;

const GenderText = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #757d8a;
`;
const DropDownAns = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  border: 1px solid #e1e3e6;
`;

const DropDownMainContainer = styled.div`
  border: 1px solid #e1e3e6;
  width: 100%;
  box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.08);
  border-radius: 8px;
  position: absolute;
  bottom: 60px;
  background: white;
  padding: 24px 9px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropDownOption = styled.p`
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DropDownOptionText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const TickIcon = styled(Check)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const UpArrowIcon = styled(CaretUp)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
const DownArrowIcon = styled(CaretDown)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const ProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  object-fit: cover;
`;

const ProfilePicText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const UploadProfilePictureBtn = styled.button`
  padding: 12px 43px;
  border: 1px solid #4e73f8;
  color: #4e73f8;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  cursor: pointer;
`;
const InterestBtn = styled.button`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #4e73f8;
  color: white;
  font-weight: 500;
  font-size: 12px;
`;
const InterestListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const SaveBtn = styled.div`
  width: fit-content;
  padding: 12px 32px;
  border-radius: 16px;
  border: 1px solid #4e73f8;
  border-radius: 8px;
  color: #4e73f8;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;
function Profile() {
	const imageUpload = useRef<HTMLInputElement>(null);
	const interestArr: string[] = useSelector(
		(state: any) => state.profile.interest,
	);
	const [saveProfile, setSaveProfile] = useState(false);
	const dispatch: any = useDispatch();
	const handleDeleteInterest = (index: any) => {
		dispatch(removeInterest(index));
	};
	const handleAddInterest = (interest: any) => {
		dispatch(addInterest(interest));
	};

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [college, setCollege] = useState('');
	const [gender, setGender] = useState('Gender');
	const [interest, setInterest] = useState('Education 🎓');

	const [isGenderDropDownOpen, setIsGenderDropDownOpen] = useState(false);
	const [isInterestDropDownOpen, setIsInterestDropDownOpen] = useState(false);
	const [_it, set_it] = useState(false);
	const user = useSelector((state: any) => state.appdata.user);

	const InputFeeds = [
		{
			label: 'Email Address',
			placeholderText: 'Email',
			onInputChange: (e: any) => setEmail(e.target.value),
			stateName: email,
		},
		{
			label: 'Name',
			placeholderText: 'Name',
			onInputChange: (e: any) => setName(e.target.value),
			stateName: name,
		},
		{
			label: 'College',
			placeholderText: 'College',
			onInputChange: (e: any) => setCollege(e.target.value),
			stateName: college,
		},
	];

	const dropdownFeeds = [
		{
			text: 'Male',
			onclickOption: () => {
				setIsGenderDropDownOpen(false);
				setGender('Male');
			},
		},
		{
			text: 'Female',
			onclickOption: () => {
				setIsGenderDropDownOpen(false);
				setGender('Female');
			},
		},
		{
			text: 'Gender Diverse',
			onclickOption: () => {
				setIsGenderDropDownOpen(false);
				setGender('Gender Diverse');
			},
		},
		{
			text: 'Prefer Not to Say',
			onclickOption: () => {
				setIsGenderDropDownOpen(false);
				setGender('Prefer Not to Say');
			},
		},
	];

	const interestDropdownFeeds = [
		{
			text: 'Education 🎓',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);
				setInterest('Education 🎓');
				handleAddInterest('Education 🎓');
			},
		},
		{
			text: 'Yeeeah, science! ⚗️',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);

				setInterest('Yeeeah, science! ⚗️');
				handleAddInterest('Yeeeah, science! ⚗️');
			},
		},
		{
			text: 'Art 🎭',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);
				setInterest('Art 🎭');
				handleAddInterest('Art 🎭');
			},
		},
		{
			text: 'Sport ⚽',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);
				setInterest('Sport ⚽');
				handleAddInterest('Sport ⚽');
			},
		},
		{
			text: 'Games 🎮',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);
				setInterest('Games 🎮');
				handleAddInterest('Games 🎮');
			},
		},
		{
			text: 'Health 🏥',
			onclickOption: () => {
				setIsInterestDropDownOpen(false);
				setInterest('Health 🏥');
				handleAddInterest('Health 🏥');
			},
		},
	];
	const handleSave = () => {
		dispatch(
			_updateUser({
				interests: interestArr,
				isMentor: user.isMentor,
			}),
		);
	};
	React.useEffect(() => {
		if (interestArr.length === 0) {
			if (user.interests && user.interests.length > 0) {
				set_it(true);
				dispatch(initUpdate(user.interests));
			}
		}
		setEmail(user?.userEmail);
		setName(user?.userFullName);
		setCollege(user?.college);
		if (user?.gender === '') {
			setGender('Gender');
		}
		if (user?.gender === 'male') {
			setGender('Male');
		}

		if (user?.gender === 'female') {
			setGender('Female');
		}
		if (user?.gender === 'not-specified') {
			setGender('Gender Diverse');
		}
	}, [user]);
	React.useEffect(() => {
		setSaveProfile(true);
	}, [email, college, name, gender]);
	const handleProfileSave = async () => {
		await dispatch(
			_updateUserDetails({
				userFullName: name,
				college: college,
				gender: gender,
			}),
		).then(() => {
			enqueueSnackbar('Profile Updated Successfully');
		});
	};

	const [profilePic, setProfilePic] = useState('');
	const userNameInitials = user?.userFullName
		? (user?.userFullName)
			.split(' ')
			.map((n: any) => n[0])
			.join('')
		: 'NA';

	return (
		<Container>
			<Header>
				<Topic>{'User Information'}</Topic>
				<Caption>
					{
						'Here you can edit public information about yourself. Changes made may take some time to reflect'
					}
				</Caption>
			</Header>
			<MainContainer>
				<LeftContainer>
					{InputFeeds.map((feed, index) => (
						<CommonInputContainer key={index}>
							<CommonInputText>{feed.label}</CommonInputText>
							<CommonInput
								value={feed.stateName}
								placeholder={feed.placeholderText}
								onChange={feed.onInputChange}
							/>
						</CommonInputContainer>
					))}

					<CommonInputContainer>
						<CommonInputText>Gender</CommonInputText>
						<DropDownAns
							onClick={() => setIsGenderDropDownOpen(!isGenderDropDownOpen)}
						>
							<GenderText>{gender}</GenderText>
							{isGenderDropDownOpen ? <UpArrowIcon /> : <DownArrowIcon />}
						</DropDownAns>
						{isGenderDropDownOpen && (
							<DropDownMainContainer>
								{dropdownFeeds.map((feed, index) => (
									<DropDownOption
										key={index}
										// isActive={gender===feed.text}
										onClick={feed.onclickOption}
									>
										<DropDownOptionText>{feed.text}</DropDownOptionText>
										{gender === feed.text && <TickIcon />}
									</DropDownOption>
								))}
							</DropDownMainContainer>
						)}
					</CommonInputContainer>
					{saveProfile && (
						<SaveBtn onClick={handleProfileSave}>Update Profile</SaveBtn>
					)}
				</LeftContainer>

				<RightContainer>
					<ProfilePhotoContainer>
						{profilePic && <ProfilePic src={profilePic} />}

						<Avvvatars
							// value={userId}
							value={userNameInitials}
							// style={'shape'}
							shadow={true}
							// border={true}
							size={120}
							// borderColor='black'
							// radius={8}
						/>

						<ProfilePicText>Profile Picture</ProfilePicText>

						<input
							style={{ display: 'none' }}
							ref={imageUpload}
							type={'file'}
						/>
						<div></div>
						<div></div>
						{/* <UploadProfilePictureBtn
							onClick={() => imageUpload.current && imageUpload.current.click()}
						>
              Change Avatar
						</UploadProfilePictureBtn> */}
					</ProfilePhotoContainer>

					<CommonInputContainer>
						<CommonInputText>Choose your main interest</CommonInputText>
						<InterestListContainer>
							{interestArr.map((interest: string, index: number) => (
								<InterestBtn key={index}>
									{interest}{' '}
									{interestArr.length > 1 && (
										<X
											onClick={() => {
												handleDeleteInterest(index);
											}}
										/>
									)}
								</InterestBtn>
							))}
						</InterestListContainer>
						<DropDownAns
							onClick={() => setIsInterestDropDownOpen(!isInterestDropDownOpen)}
						>
							<GenderText>{interest}</GenderText>
							{isInterestDropDownOpen ? <UpArrowIcon /> : <DownArrowIcon />}
						</DropDownAns>

						{isInterestDropDownOpen && (
							<DropDownMainContainer>
								{interestDropdownFeeds.map((feed, index) => (
									<DropDownOption
										key={index}
										// isActive={gender===feed.text}
										onClick={feed.onclickOption}
									>
										<DropDownOptionText>{feed.text}</DropDownOptionText>
										{interest === feed.text && <TickIcon />}
									</DropDownOption>
								))}
							</DropDownMainContainer>
						)}
						{/* function to find that user.interest === interestArr */}
						{<SaveBtn onClick={handleSave}>Save</SaveBtn>}
					</CommonInputContainer>
				</RightContainer>
			</MainContainer>
		</Container>
	);
}

export default Profile;
