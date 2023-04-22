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
const Container = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Topic = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 24px;
`;

const Caption = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  width: 30%;
`;

const CommonInputContainer = styled.div`
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
  padding: 12px 16px;
`;

const GenderText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
const DropDownAns = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
`;

const DropDownMainContainer = styled.div`
  width: 100%;
  box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.08);
  border-radius: 8px;
  border: 1px solid #e1e3e6;
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
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
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
  background-color: #4e73f8;
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin: 0 auto;
`;
function Profile() {
  const imageUpload = useRef<HTMLInputElement>(null);
  const interestArr: string[] = useSelector(
    (state: any) => state.profile.interest,
  );
  const dispatch: any = useDispatch();
  const handleDeleteInterest = (index: any) => {
    dispatch(removeInterest(index));
  };
  const handleAddInterest = (interest: any) => {
    dispatch(addInterest(interest));
  };

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [college, setCollege] = useState();
  const [gender, setGender] = useState('Male');
  const [interest, setInterest] = useState('Education 🎓');

  const [isGenderDropDownOpen, setIsGenderDropDownOpen] = useState(false);
  const [isInterestDropDownOpen, setIsInterestDropDownOpen] = useState(false);

  const InputFeeds = [
    {
      label: 'Email Address',
      placeholderText: 'email',
      onInputChange: (e: any) => setEmail(e.target.value),
      stateName: email,
    },
    {
      label: 'Name',
      placeholderText: 'name',
      onInputChange: (e: any) => setName(e.target.value),
      stateName: name,
    },
    {
      label: 'College',
      placeholderText: 'college',
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
  const [_it, set_it] = useState(false);
  const user = useSelector((state: any) => state.appdata.user);

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
  }, [user]);
  return (
    <Container>
      <Header>
        <Topic>User Information</Topic>

        <Caption>
          Here you can edit public information about yourself. Changes made may
          take some time to reflect
        </Caption>
      </Header>
      <MainContainer>
        <LeftContainer>
          {InputFeeds.map((feed) => (
            <CommonInputContainer>
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
                {dropdownFeeds.map((feed) => (
                  <DropDownOption
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
        </LeftContainer>

        <RightContainer>
          <ProfilePhotoContainer>
            <ProfilePic
              src={
                'https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg'
              }
            />
            <ProfilePicText>Profile Picture</ProfilePicText>

            <input
              style={{ display: 'none' }}
              ref={imageUpload}
              type={'file'}
            />
            <UploadProfilePictureBtn
              onClick={() => imageUpload.current && imageUpload.current.click()}
            >
              Change Avatar
            </UploadProfilePictureBtn>
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
                {interestDropdownFeeds.map((feed) => (
                  <DropDownOption
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
