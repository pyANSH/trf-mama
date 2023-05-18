import React,{useState,useEffect} from 'react';
import { firebaseDb } from '../../../../firebase/firebase';
import {
	query,
	collection,
	orderBy,
	onSnapshot,
	limit,
} from 'firebase/firestore';




function Chat({chat}:{chat:any}) {
	const timestamp = chat?.createdAt;

	const createdAt = new Date(0);
	if(timestamp){
        
		createdAt.setMilliseconds(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
	}
    
	const formattedDateTime = createdAt.toLocaleString();

	return(
		<div>
			<p>{chat?.name}</p>
			<p>{chat.text}</p>
			<p>{formattedDateTime}</p>
		</div>
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
      
	console.log(messages);


    
	return (
		<div>
			{messages && messages?.map((chat:any,index:any)=>(
				<Chat key={index} chat={chat} />
			))}

		</div>
	);
}

export default Conversations;