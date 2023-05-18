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

const BottomContainer =styled.div`
display: flex;
position: fixed;
bottom: 10px;
width: 70%;
`;

const MessageInput =styled.input`
 padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  width:100%;
`;

const SendBtn=styled.div`
padding: 10px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:hover{
	background-color: #45a049;
  }
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

	function handleKeyDown(event:any) {
		if (event.key === 'Enter') {
			// Call your desired function here
			handleSendMessage();
		  }
	}


	return (
		<MainContainer>

			<Conversations/>
			<BottomContainer>

				<MessageInput onKeyDown={handleKeyDown} value={message} onChange={(e:any)=>setMessage(e.target.value)} placeholder='type your message here' />
				<SendBtn onClick={handleSendMessage}>Send</SendBtn>
			</BottomContainer>
		</MainContainer>
	);
}

export default Community;