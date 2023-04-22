import { CaretDown, CaretUp, Check, X } from 'phosphor-react';
import React, { useState } from 'react'
import styled from 'styled-components';
import { appTypography } from '../../config/styles';
import { useDispatch } from 'react-redux';


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
		width: '300px'
	}
}));

const SingleInterestContainer =styled.div`

`;
const SingleInterestText =styled.p(({theme,isActive}:{theme:any,isActive:boolean})=>({
...appTypography.paraMed.regular,
color:isActive?theme.app.shades.white:theme.app.typography['900'],
background:isActive?theme.app.primary['500']:'initial',
padding:'8px',
border:isActive?`1px solid ${theme.app.shades.white}`:`1px solid ${theme.app.neutral['800']}`,
borderRadius:'100px',
cursor:'pointer'

}));

const InterstContainer =styled.div`
display: flex;
flex-wrap: wrap;
gap:8px;

`;
const GenderText=styled.div`

font-weight: 400;
font-size: 18px;
line-height: 24px;
`;
const DropDownAns=styled.div`
border: 1px solid grey;
border-radius: 8px;
padding: 12px 16px;
display: flex;
justify-content: space-between;
cursor: pointer;
align-items: center;
`;

const DropDownMainContainer = styled.div`
width:100%;
box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.08);
border-radius: 8px;
border: 1px solid #E1E3E6;
padding: 24px 9px;
display:flex;
flex-direction: column;
gap: 8px;
`;

const DropDownOption =styled.p`
padding: 8px 16px;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;

`;

const DropDownOptionText =styled.p`
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;

const TickIcon=styled(Check)`
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;

const UpArrowIcon=styled(CaretUp)`
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;
const DownArrowIcon=styled(CaretDown)`
font-weight: 400;
font-size: 18px;
line-height: 24px;
`;



function InterestModal() {

const interestList =[
	'Education 🎓','Yeeeah, science! ⚗️','Art 🎭','Sport ⚽','Games 🎮','Health 🏥'
]

const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);

const [userType, setUserType] = useState('Student')

const userDropdownList = ['Student','Mentor']


const [interestArr, setInterestArr] = useState<any>([]);
const dispatch = useDispatch();
function handleInterestInsert(interestName:string) {
	if(interestArr.some((interest:string)=>interest===interestName)){
	const interestIndex=interestArr.findIndex((interest:string)=>interest===interestName);
	let tempInterstArr =[...interestArr];
	tempInterstArr.splice(interestIndex,1);
	setInterestArr(tempInterstArr);
	}else{
		if(interestArr.length>2){
			
			return;
		}
	let tempInterstArr =[...interestArr];
	tempInterstArr.push(interestName)
	setInterestArr(tempInterstArr)	
	}
	
}

	return (
    <>
			<Backdrop />
            <ModalMainContainer>
				<InterstContainer>
{interestList.map((interest)=>(
	
<SingleInterestText isActive={interestArr.some((interestName:string)=>interestName===interest)} onClick={()=>handleInterestInsert(interest)}>
{interest}
</SingleInterestText>
	))}
				</InterstContainer>

				<DropDownAns onClick={()=>setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen)}>
    <GenderText>

{userType}
    </GenderText>
   {isUserTypeDropdownOpen?<UpArrowIcon/>:<DownArrowIcon/>}
</DropDownAns>

{isUserTypeDropdownOpen&&<DropDownMainContainer>
{userDropdownList.map((feed)=>(
    <DropDownOption
     onClick={()=>{
		setUserType(feed);
		setIsUserTypeDropdownOpen(false);
		
		}}>
        <DropDownOptionText>
{feed}
        </DropDownOptionText>
        {userType===feed&&<TickIcon/>}
    </DropDownOption>
))}
</DropDownMainContainer>}


            </ModalMainContainer>
    
    </>
  )
}

export default InterestModal