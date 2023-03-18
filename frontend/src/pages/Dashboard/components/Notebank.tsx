import React from 'react'
import styled from 'styled-components';
import {MagnifyingGlass,SquaresFour} from 'phosphor-react';

const Container =styled.div`
display: flex;
flex-direction: column;
gap:40px;

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
`;

const DocumentsContainer =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const SingleDocCard =styled.div`
padding: 24px;
border-radius: 12px;
display: flex;
flex-direction: column;
gap: 24px;
`;

const DocDesc =styled.p`
font-weight: 400;
font-size: 14px;
line-height: 16px;
`;

const DocHeading =styled.p`
font-weight: 500;
font-size: 18px;
line-height: 21px;
`;

const DocInfo =styled.div`
display: flex;
flex-direction: column;
gap: 4px;
width: 256px;

`;

const DocImage =styled.div`
width: 256px;
height: 173px;
background: #DEDEDE;
border-radius: 12px;
`;




function Notebank() {

const interestList  =[
'All','Interest 1','Interest 1','Interest 1'

];


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
    interestList.map((interesttext)=>(
        <SingleInterest>{interesttext}</SingleInterest>
    ))
}
</InterestContainer>

<DocumentsContainer>
<SingleDocCard>
    <DocImage/>

    <DocInfo>
        <DocHeading>
        Headline
        </DocHeading>
        <DocDesc>
        Please add your content here. Keep it short and simple. And smile :) 
        </DocDesc>
    </DocInfo>
</SingleDocCard>
</DocumentsContainer>

    </Container>
  )
}

export default Notebank