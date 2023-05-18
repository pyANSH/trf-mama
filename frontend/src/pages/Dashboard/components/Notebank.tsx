import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {MagnifyingGlass,SquaresFour} from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { _deleteNotes, _getNotes } from '../../../Store/Thunk/notes';
import { appTypography } from '../../../config/styles';

const Container =styled.div`
display: flex;
flex-direction: column;
gap:40px;
  padding-block-end: 24px;

`;

const SearchContainer =styled.div`
display: flex;
align-items: center;
gap:90px;
`;

const SearchBox =styled.div`
display: flex;
align-items: center;
border: 1px solid #E1E3E6;
border-radius: 8px;
justify-content: space-between;
width:800px;
`;

const SearchBtn =styled.div`
padding: 20px;
background-color:#F8F8F8 ;

`;

const SearchInput =styled.input`
border: none;
outline: none;
width: 90%;
margin: auto;
font-weight: 400;
font-size: 18px;
line-height: 24px;    
`;

const SearchIcon =styled(MagnifyingGlass)`
width: 24px;
height: 24px;
`;

const FourSquareIcon = styled(SquaresFour)`
width:24px;
height: 24px;
`;

const FilterBtn =styled.div`
padding: 20px;
background-color:#F8F8F8;
border-radius: 8px; 
`;

const InterestContainer =styled.div`
display: flex;
gap:24px;

`;

const SingleInterest = styled.p`
border: 1px solid #E1E3E6;
border-radius: 8px;
padding: 12px 43px;
cursor:pointer;
background-color: ${({isActive,theme}:{isActive:any,theme:any})=>isActive?theme.app.primary['500']:'initial'};
color: ${({isActive,theme}:{isActive:any,theme:any})=>isActive?theme.app.shades.white:theme.app.typography['900']};
`;

const DocumentsContainer =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

const SingleDocCard =styled.a`
padding: 24px;
border-radius: 12px;
display: flex;
flex-direction: column;
gap: 24px;
text-decoration: none;
-webkit-box-shadow: 0px 0px 31px -14px #BCBCBC;
-moz-box-shadow: 0px 0px 31px -14px #BCBCBC;
box-shadow: 0px 0px 31px -14px #BCBCBC;
`;

const DocDesc =styled.p(({theme})=>({
	...appTypography.paraSmall.regular,
	color:theme.app.typography['500'],
	textAlign:'center'
}));

const DocHeading =styled.p(({theme})=>({
	...appTypography.paraMed.regular,
	color:theme.app.typography['900'],
	textAlign:'center'
}));

const DocInfo =styled.div`
display: flex;
flex-direction: column;
gap: 8px;
width: 256px;

`;

const DocImage =styled.div`
width: 256px;
height: 173px;
background: #DEDEDE;
border-radius: 12px;
`;


const DeleteBtn =styled.div(({theme})=>({
	...appTypography.paraSmall.regular,
	background:theme.app.error['100'],
	color:theme.app.error['500'],
	textAlign:'center',
	textDecoration:'none',
	borderRadius:'16px',
	padding:'8px'
}));

function Notebank() {
	const userDetails = useSelector((state:any)=>state?.appdata?.user);
	const [currentTab, setCurrentTab] = useState('All');

	const interestList=[
		'All',...userDetails?.interests
	];

	const allNotes = useSelector((state:any)=>state?.notes?.notes); 
	console.log(allNotes);

	const dispatch:any =useDispatch();

	useEffect(() => {
		dispatch(_getNotes({allNotes:true}));
	}, []);
    

	function handleTabChange(type:string) {
		setCurrentTab(type);
		dispatch(_getNotes({category:type==='All'?null:type,allNotes:type==='All'?true:false}));
	}

	async function handleDelete(noteId:any){
		const res =await dispatch(_deleteNotes({noteId,userId:userDetails?._id}));
	}
	return (
		<Container>
			<SearchContainer>
				<SearchBox>
					<SearchInput placeholder='Search'/>

					<SearchBtn>
						<SearchIcon/>
					</SearchBtn>
				</SearchBox>

				<FilterBtn>

					<FourSquareIcon/>
				</FilterBtn>
			</SearchContainer>



			<InterestContainer>
				{
					interestList?.map((interesttext:any,index:number)=>(
						<SingleInterest isActive={currentTab===interesttext}  onClick={()=>handleTabChange(interesttext)} key={index}>{interesttext}</SingleInterest>
					))
				}
			</InterestContainer>

			<DocumentsContainer>
				{allNotes?.map((note:any,index:number)=>(

					<SingleDocCard href={note.fileUrl} target='_blank' key={index}>
						<DocImage/>

						<DocInfo>
							<DocHeading>
								{note.noteTitle}
							</DocHeading>
							<DocDesc>
								{note.description}
							</DocDesc>
						</DocInfo>
						{userDetails?._id ===note?.userId &&<DeleteBtn onClick={()=>handleDelete(note._id)}>Delete</DeleteBtn>}
					</SingleDocCard>
				))}
			</DocumentsContainer>

		</Container>
	);
}

export default Notebank;