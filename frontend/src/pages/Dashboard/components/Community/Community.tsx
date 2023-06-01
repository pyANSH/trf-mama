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
    let m = message;
    m.split(' ').forEach((word: any) => {
      if (checkbadwords(word) === true) {
        m.replace(word, '****');
        m = m.replace(word, '****');
      }
    });
    const res = await addDoc(collection(firebaseDb, 'messages'), {
      text: m,
      name: user?.userFullName,
      createdAt: serverTimestamp(),
      isMentor: user?.isMentor,
      uid: user?._id,
    });

    setMessage('');
  }
  const checkbadwords = (message: string) => {
    let arr: string[] = [
      '4r5e',
      '5h1t',
      '5hit',
      'a55',
      'anal',
      'anus',
      'ar5e',
      'arrse',
      'arse',
      'ass',
      'ass-fucker',
      'asses',
      'assfucker',
      'assfukka',
      'asshole',
      'assholes',
      'asswhole',
      'a_s_s',
      'b!tch',
      'b00bs',
      'b17ch',
      'b1tch',
      'ballbag',
      'balls',
      'ballsack',
      'bastard',
      'beastial',
      'beastiality',
      'bellend',
      'bestial',
      'bestiality',
      'bi+ch',
      'biatch',
      'bitch',
      'bitcher',
      'bitchers',
      'bitches',
      'bitchin',
      'bitching',
      'bloody',
      'blow job',
      'blowjob',
      'blowjobs',
      'boiolas',
      'bollock',
      'bollok',
      'boner',
      'boob',
      'boobs',
      'booobs',
      'boooobs',
      'booooobs',
      'booooooobs',
      'breasts',
      'buceta',
      'bugger',
      'bum',
      'bunny fucker',
      'butt',
      'butthole',
      'buttmuch',
      'buttplug',
      'c0ck',
      'c0cksucker',
      'carpet muncher',
      'cawk',
      'chink',
      'cipa',
      'cl1t',
      'clit',
      'clitoris',
      'clits',
      'cnut',
      'cock',
      'cock-sucker',
      'cockface',
      'cockhead',
      'cockmunch',
      'cockmuncher',
      'cocks',
      'cocksuck',
      'cocksucked',
      'cocksucker',
      'cocksucking',
      'cocksucks',
      'cocksuka',
      'cocksukka',
      'cok',
      'cokmuncher',
      'coksucka',
      'coon',
      'cox',
      'crap',
      'cum',
      'cummer',
      'cumming',
      'cums',
      'cumshot',
      'cunilingus',
      'cunillingus',
      'cunnilingus',
      'cunt',
      'cuntlick',
      'cuntlicker',
      'cuntlicking',
      'cunts',
      'cyalis',
      'cyberfuc',
      'cyberfuck',
      'cyberfucked',
      'cyberfucker',
      'cyberfuckers',
      'cyberfucking',
      'd1ck',
      'damn',
      'dick',
      'dickhead',
      'dildo',
      'dildos',
      'dink',
      'dinks',
      'dirsa',
      'dlck',
      'dog-fucker',
      'doggin',
      'dogging',
      'donkeyribber',
      'doosh',
      'duche',
      'dyke',
      'ejaculate',
      'ejaculated',
      'ejaculates',
      'ejaculating',
      'ejaculatings',
      'ejaculation',
      'ejakulate',
      'f u c k',
      'f u c k e r',
      'f4nny',
      'fag',
      'fagging',
      'faggitt',
      'faggot',
      'faggs',
      'fagot',
      'fagots',
      'fags',
      'fanny',
      'fannyflaps',
      'fannyfucker',
      'fanyy',
      'fatass',
      'fcuk',
      'fcuker',
      'fcuking',
      'feck',
      'fecker',
      'felching',
      'fellate',
      'fellatio',
      'fingerfuck',
      'fingerfucked',
      'fingerfucker',
      'fingerfuckers',
      'fingerfucking',
      'fingerfucks',
      'fistfuck',
      'fistfucked',
      'fistfucker',
      'fistfuckers',
      'fistfucking',
      'fistfuckings',
      'fistfucks',
      'flange',
      'fook',
      'fooker',
      'fuck',
      'fucka',
      'fucked',
      'fucker',
      'fuckers',
      'fuckhead',
      'fuckheads',
      'fuckin',
      'fucking',
      'fuckings',
      'fuckingshitmotherfucker',
      'fuckme',
      'fucks',
      'fuckwhit',
      'fuckwit',
      'fudge packer',
      'fudgepacker',
      'fuk',
      'fuker',
      'fukker',
      'fukkin',
      'fuks',
      'fukwhit',
      'fukwit',
      'fux',
      'fux0r',
      'f_u_c_k',
      'gangbang',
      'gangbanged',
      'gangbangs',
      'gaylord',
      'gaysex',
      'goatse',
      'God',
      'god-dam',
      'god-damned',
      'goddamn',
      'goddamned',
      'hardcoresex',
      'hell',
      'heshe',
      'hoar',
      'hoare',
      'hoer',
      'homo',
      'hore',
      'horniest',
      'horny',
      'hotsex',
      'jack-off',
      'jackoff',
      'jap',
      'jerk-off',
      'jism',
      'jiz',
      'jizm',
      'jizz',
      'kawk',
      'knob',
      'knobead',
      'knobed',
      'knobend',
      'knobhead',
      'knobjocky',
      'knobjokey',
      'kock',
      'kondum',
      'kondums',
      'kum',
      'kummer',
      'kumming',
      'kums',
      'kunilingus',
      'l3i+ch',
      'l3itch',
      'labia',
      'lust',
      'lusting',
      'm0f0',
      'm0fo',
      'm45terbate',
      'ma5terb8',
      'ma5terbate',
      'masochist',
      'master-bate',
      'masterb8',
      'masterbat*',
      'masterbat3',
      'masterbate',
      'masterbation',
      'masterbations',
      'masturbate',
      'mo-fo',
      'mof0',
      'mofo',
      'mothafuck',
      'mothafucka',
      'mothafuckas',
      'mothafuckaz',
      'mothafucked',
      'mothafucker',
      'mothafuckers',
      'mothafuckin',
      'mothafucking',
      'mothafuckings',
      'mothafucks',
      'mother fucker',
      'motherfuck',
      'motherfucked',
      'motherfucker',
      'motherfuckers',
      'motherfuckin',
      'motherfucking',
      'motherfuckings',
      'motherfuckka',
      'motherfucks',
      'muff',
      'mutha',
      'muthafecker',
      'muthafuckker',
      'muther',
      'mutherfucker',
      'n1gga',
      'n1gger',
      'nazi',
      'nigg3r',
      'nigg4h',
      'nigga',
      'niggah',
      'niggas',
      'niggaz',
      'nigger',
      'niggers',
      'nob',
      'nob jokey',
      'nobhead',
      'nobjocky',
      'nobjokey',
      'numbnuts',
      'nutsack',
      'orgasim',
      'orgasims',
      'orgasm',
      'orgasms',
      'p0rn',
      'pawn',
      'pecker',
      'penis',
      'penisfucker',
      'phonesex',
      'phuck',
      'phuk',
      'phuked',
      'phuking',
      'phukked',
      'phukking',
      'phuks',
      'phuq',
      'pigfucker',
      'pimpis',
      'piss',
      'pissed',
      'pisser',
      'pissers',
      'pisses',
      'pissflaps',
      'pissin',
      'pissing',
      'pissoff',
      'poop',
      'porn',
      'porno',
      'pornography',
      'pornos',
      'prick',
      'pricks',
      'pron',
      'pube',
      'pusse',
      'pussi',
      'pussies',
      'pussy',
      'pussys',
      'rectum',
      'retard',
      'rimjaw',
      'rimming',
      's hit',
      's.o.b.',
      'sadist',
      'schlong',
      'screwing',
      'scroat',
      'scrote',
      'scrotum',
      'semen',
      'sex',
      'sh!+',
      'sh!t',
      'sh1t',
      'shag',
      'shagger',
      'shaggin',
      'shagging',
      'shemale',
      'shi+',
      'shit',
      'shitdick',
      'shite',
      'shited',
      'shitey',
      'shitfuck',
      'shitfull',
      'shithead',
      'shiting',
      'shitings',
      'shits',
      'shitted',
      'shitter',
      'shitters',
      'shitting',
      'shittings',
      'shitty',
      'skank',
      'slut',
      'sluts',
      'smegma',
      'smut',
      'snatch',
      'son-of-a-bitch',
      'spac',
      'spunk',
      's_h_i_t',
      't1tt1e5',
      't1tties',
      'teets',
      'teez',
      'testical',
      'testicle',
      'tit',
      'titfuck',
      'tits',
      'titt',
      'tittie5',
      'tittiefucker',
      'titties',
      'tittyfuck',
      'tittywank',
      'titwank',
      'tosser',
      'turd',
      'tw4t',
      'twat',
      'twathead',
      'twatty',
      'twunt',
      'twunter',
      'v14gra',
      'v1gra',
      'vagina',
      'viagra',
      'vulva',
      'w00se',
      'wang',
      'wank',
      'wanker',
      'wanky',
      'whoar',
      'whore',
      'willies',
      'willy',
      'xrated',
      'xxx',
    ];

    return arr.some((v: any) => message.includes(v));
  };
  async function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <MainContainer>
      <ContentHeader>
        <ContentTitle>{'Community'}</ContentTitle>
        <ContentCaption>{'Chat with other mentors and mentees'}</ContentCaption>
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
