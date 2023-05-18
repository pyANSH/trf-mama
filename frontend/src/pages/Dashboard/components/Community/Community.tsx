import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firebaseDb } from '../../../../firebase/firebase';
import Conversations from './Conversations';
// type Props = {}

// function Community({}: Props) {

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 0 24px 0 0;
    margin-top: 24px;
`;

function Community() {

	const [message, setMessage] = useState('');
	const user =useSelector((state:any)=>state?.appdata.user);
	async function handleSendMessage() {
		if (message.trim() === '') {
			alert('Enter valid message');
			return;
		}

		const res = await addDoc(collection(firebaseDb, 'messages'), {
			text: message,
			name: user?.userFullName,
			createdAt: serverTimestamp(),
			uid: user?._id,
		});
		console.log(res);
        
		setMessage('');
	}

	


	return (
		<MainContainer>

			<Conversations/>
			<input value={message} onChange={(e:any)=>setMessage(e.target.value)} placeholder='type your message here' />
			<button onClick={handleSendMessage}>Send</button>
		</MainContainer>
	);
}

export default Community;