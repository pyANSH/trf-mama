import { CaretDown, CaretUp, Check, X } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appTypography } from '../../../config/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addTags, initTags, removeTags } from '../../../Store/Reducers/notes';

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { _uploadNotes } from '../../../Store/Thunk/notes';

const Backdrop = styled.div(({ theme }) => ({
	position: 'fixed',
	height: '100vh',
	width: '100vw',
	top: '50%',
	left: '50%',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transform: 'translate(-50%, -50%)',
	background: theme.app.neutral['500'],
	opacity: 0.3,
	zIndex: 2,
}));
const BtnConfirm = styled.button(() => ({
	color: '#fff',
	background: '#9E4CDC',
	borderRadius: '16px',
	padding: '8px 16px',
	cursor: 'pointer',
	border: 'none',
	outline: 'none',
}));

const ModalMainContainer = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '24px 30px 14px',
	gap: '14px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '420px',
	background: theme.app.shades.white,
	boxShadow: '0px -4px 42px rgba(84, 84, 84, 0.03)',
	borderRadius: '24px',
	zIndex: 3,
	'@media (max-width:575px)': {
		width: '300px',
	},
}));

const SingleInterestContainer = styled.div``;
const SingleInterestText = styled.p(
	({ theme, isActive }: { theme: any; isActive: boolean }) => ({
		...appTypography.paraMed.regular,
		color: isActive ? theme.app.shades.white : theme.app.typography['900'],
		background: isActive ? theme.app.primary['500'] : 'initial',
		padding: '8px',
		border: isActive
			? `1px solid ${theme.app.shades.white}`
			: `1px solid ${theme.app.neutral['800']}`,
		borderRadius: '100px',
		cursor: 'pointer',
	}),
);

const InterstContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

const InputTitle =styled.input(({theme})=>({
	border:`1px solid ${theme.app.neutral['800']}`,
	...appTypography.paraMed.regular,
	borderRadius:'8px',
	padding:'8px 16px',
	color:theme.app.typography['900'],
	width:'100%'
}));
const InputDesc =styled.textarea(({theme})=>({
	border:`1px solid ${theme.app.neutral['800']}`,
	...appTypography.paraMed.regular,
	borderRadius:'8px',
	padding:'8px 16px',
	color:theme.app.typography['900'],
	width:'100%'

}));

const TagsAddContainer =styled.div`
display: flex;
gap: 16px;
align-items: center;
width:100%;
`;

const TagInput =styled.input(({theme})=>({
	border:`1px solid ${theme.app.neutral['800']}`,
	...appTypography.paraMed.regular,
	borderRadius:'8px',
	padding:'8px 16px',
	color:theme.app.typography['900'],
	width:'100%'

}));

const AddTagBtn =styled.button(() => ({
	color: '#fff',
	background: '#9E4CDC',
	borderRadius: '16px',
	padding: '8px 16px',
	cursor: 'pointer',
	border: 'none',
	outline: 'none',
}));

const ActiveTagMainContainer=styled.div(({theme})=>({
	background:theme.app.primary['500'],
	padding:'4px',
	display:'flex',
	alignItems:'center',
	gap:'4px',
	borderRadius:'100px'
}));
const TagText = styled.p(({theme})=>({
	...appTypography.paraMed.regular,
	color:theme.app.shades.white,
    
}));

const CloseIcon =styled(X)(({theme})=>({
	width:'16px',
	height:'16px',
	color:theme.app.shades.white,
	cursor:'pointer'
}));

const ActiveTagsContainer =styled.div`
display: flex;
gap: 8px;
align-items: center;
flex-wrap: wrap;
`;

const HeaderContainer =styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
`;

const CloseContainer =styled.div`
display: flex;
gap: 8px;
background:${({theme})=>theme.app.neutral['800']};
border-radius: 100px;
align-items: center;
padding: 8px;
cursor: pointer;
`;

const CloseText =styled.p(({theme})=>({
	...appTypography.paraMed.regular,
	color:theme.app.shades.white
}));

const CloseIconMain =styled(X)(({theme})=>({
	width:'16px',
	height:'16px',
	color:theme.app.shades.white,
	cursor:'pointer'
}));

function SellDocumentModal({setUploadFiles,uploadFiles,setIsDetailsModal}:{setUploadFiles:any,uploadFiles:any,setIsDetailsModal:any}) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [tag, setTag] = useState<any>('');
	const userDetails = useSelector((state:any)=>state.appdata.user);
	const tagArr = useSelector((state:any)=>state.notes.tags);
	const dispatch:any = useDispatch();
	const interestList = [
		'Education 🎓',
		'Yeeeah, science! ⚗️',
		'Art 🎭',
		'Sport ⚽',
		'Games 🎮',
		'Health 🏥',
	];
	const [interestArr, setInterestArr] = useState<string[]>([]);
	function handleInterestInsert(interestName: string) {
		if (interestArr.some((interest: string) => interest === interestName)) {
			const interestIndex = interestArr.findIndex(
				(interest: string) => interest === interestName,
			);
			const tempInterstArr = [...interestArr];
			tempInterstArr.splice(interestIndex, 1);
			setInterestArr(tempInterstArr);
		} else {
			if (interestArr.length > 2) {
				return;
			}
			const tempInterstArr = [...interestArr];
			tempInterstArr.push(interestName);
			setInterestArr(tempInterstArr);
		}
	}
	const [imgUrl, setImgUrl] = useState();
	const [progresspercent, setProgresspercent] = useState(0);
	function handleSubmit() {
		if(interestArr.length<1&&!title){
			console.log('sab daal gavar');
			return;
		}
        
		const storageRef = ref(storage, `files/${uploadFiles.name}`);
		const uploadTask = uploadBytesResumable(storageRef, uploadFiles);

		uploadTask.on('state_changed',
			(snapshot) => {
				const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
				setProgresspercent(progress);
			},
			(error) => {
				alert(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL:any) => {                
					setImgUrl(downloadURL);
					dispatch(_uploadNotes({title,file:uploadFiles,fileUrl:downloadURL,userId:userDetails._id,description,category:interestArr,tags:tagArr}));
				});
			}
		);
		console.log(imgUrl);


	}

	function handleAddTags() {
		if(tag.length>0){
			dispatch(addTags(tag));
			setTag('');
		}else{
			return;
		}
	}
	function handleDeleteTags(index:any) {
		dispatch(removeTags(index));
	}

	function handleCloseDropdown() {
		dispatch(initTags());
		setUploadFiles();
		setIsDetailsModal(false);
	}
        
	return (
		<>
			<Backdrop />
			<ModalMainContainer>
				<HeaderContainer>
					<CloseContainer onClick={handleCloseDropdown}>
						<CloseText>Close</CloseText>
						<CloseIconMain/>
					</CloseContainer>
				</HeaderContainer>
				<InterstContainer>
					{interestList.map((interest,index) => (
						<SingleInterestText
							isActive={interestArr.some(
								(interestName: string) => interestName === interest,
							)}
							onClick={() => handleInterestInsert(interest)}
							key={index}
						>
							{interest}
						</SingleInterestText>
					))}
				</InterstContainer>
				<InputTitle placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
				<InputDesc placeholder='description' value={description}  onChange={(e)=>setDescription(e.target.value)}/>
				<TagsAddContainer>
					<TagInput value={tag} onChange={(e)=>setTag(e.target.value)}  placeholder='add tags'/>
					<AddTagBtn onClick={handleAddTags}>Add</AddTagBtn>
				</TagsAddContainer>
				{tagArr?.length>0 && <ActiveTagsContainer>
					{
						tagArr?.map((tag:any,index:any)=>(
							<ActiveTagMainContainer key={index}>
								<TagText>
									{tag}
								</TagText>
								<CloseIcon onClick={()=>handleDeleteTags(index)} />
							</ActiveTagMainContainer>
						))
					}
				</ActiveTagsContainer>}
				<BtnConfirm onClick={handleSubmit}>Confirm</BtnConfirm>
			</ModalMainContainer>
		</>
	);
}

export default SellDocumentModal;