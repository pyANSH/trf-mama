import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firebaseDb } from '../../../../firebase/firebase';
import Conversations from './Conversations';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  padding: 0 24px 0 0;

  overflow: scroll;
`;

const BottomContainer = styled.div`
  display: flex;
  gap: 12px;
  position: fixed;
  bottom: 24px;
  width: 70%;
  border-radius: 20px;
`;

const MessageInput = styled.input`
  padding: 10px 20px;
  border: 1px solid #c7c7c7;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background: whtie;
  outline: none;
  ::placeholder {
    color: #c7c7c7;
  }
`;

const SendBtn = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #9e4cdc;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #9e4cdc;
  }
`;
const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: sticky;
  top: 0;
  background: #fcfcfc;
  z-index: 1;
`;

const ContentTitle = styled.p`
  font-weight: 500;
  font-size: 36px;
  /* line-height: 24px; */
`;

const ContentCaption = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #7c7c7c;
`;

function Community() {
	const [message, setMessage] = useState('');
	const user = useSelector((state: any) => state?.appdata.user);
	async function handleSendMessage() {
		if (message.trim() === '') {
			alert('Enter valid message');
			return;
		}

		const res = await addDoc(collection(firebaseDb, 'messages'), {
			text: message,
			name: user?.userFullName,
			createdAt: serverTimestamp(),
			isMentor: user?.isMentor,
			uid: user?._id,
		});
		console.log(res);

		setMessage('');
	}

	function handleKeyDown(event: any) {
		if (event.key === 'Enter') {
			handleSendMessage();
			setMessage('');

		}
	}

	return (
		<MainContainer>
			<ContentHeader>
				<ContentTitle>{'Community'}</ContentTitle>
				<ContentCaption>
          In this Community you can find various things blah blah blah! fix this
          text @anmol
				</ContentCaption>
			</ContentHeader>
			<Conversations />
			<BottomContainer>
				<MessageInput
					onKeyDown={handleKeyDown}
					value={message}
					onChange={(e: any) => setMessage(e.target.value)}
					placeholder="type your message here"
				/>
				<SendBtn onClick={handleSendMessage}>Send</SendBtn>
			</BottomContainer>
		</MainContainer>
	);
}

export default Community;
