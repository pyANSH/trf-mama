import React,{useState,useEffect} from 'react';
import { firebaseDb } from '../../../../firebase/firebase';
import {
	query,
	collection,
	orderBy,
	onSnapshot,
	limit,
} from 'firebase/firestore';
import styled from 'styled-components';
import { appTypography } from '../../../../config/styles';
import { useSelector } from 'react-redux';
import { ClockCountdown } from '@phosphor-icons/react';


const ChatMainContainer =styled.div`
display: flex;
flex-direction: column;
gap: 4px;
background-color: aliceblue;
width:50%;
padding: 8px 12px;
border-radius:${({isUsers}:{isUsers:any})=>isUsers?'20px 0px 20px 20px':'20px 20px 20px 0'} ;


`;
const ChatCon =styled.div`
display: flex;
flex-direction: column;
gap: 16px;
padding-bottom: 50px;
`;

const ChatMain =styled.div`
width:100%;
display: flex;
flex-direction: column;
gap: 4px;
align-items:${({isUsers}:{isUsers:any})=>isUsers?'end':'start'}
`;


const ChatName =styled.p(({theme})=>({
	...appTypography.paraSmall.regular,
	color:theme.app.primary['500']
}));

const ChatMessage =styled.p(({theme})=>({
	...appTypography.paraSmall.regular,
	color:theme.app.typography['500']
}));
const DateTime =styled.p(({theme})=>({
	...appTypography.paraXSmall.regular,
	color:theme.app.primary['500'],
	/* textAlign:isUsers?'right':'left' */
}));

const TimeIcon =styled(ClockCountdown)(({theme})=>({
	width:'24px',
	height:'24px',
	color:theme.app.primary['500']
}));

function Chat({chat}:{chat:any}) {
	const timestamp = chat?.createdAt;
	const userId =useSelector((state:any)=>state?.appdata?.user?._id);
	const createdAt = new Date(0);
	if(timestamp){
        
		createdAt.setMilliseconds(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
	}
    
	const formattedDateTime = createdAt.toLocaleString();

	return(
		<ChatMain isUsers ={chat?.uid===userId}>

		
			<ChatMainContainer isUsers ={chat?.uid===userId}>
				<ChatName>{chat?.name}</ChatName>
				<ChatMessage>{chat.text}</ChatMessage>
				{timestamp?<DateTime >{formattedDateTime}</DateTime>:<TimeIcon/>}
			</ChatMainContainer>
		</ChatMain>
	);
}

function Conversations() {

	const [messages, setMessages] = useState([]);
  
	useEffect(() => {
		const q = query(
			collection(firebaseDb, 'messages'),
			orderBy('createdAt'),
			limit(50)
		);
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			const messages:any = [];
			QuerySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return (): void => unsubscribe(); // Explicitly specify the return type as `void`
	}, []);


    
	return (
		<ChatCon>
			{messages && messages?.map((chat:any,index:any)=>(
				

				<Chat key={index} chat={chat} />
			
			))}

		</ChatCon>
	);
}

export default Conversations;