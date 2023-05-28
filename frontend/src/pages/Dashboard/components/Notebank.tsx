import React, { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import { Eye, MagnifyingGlass, SquaresFour } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  _deleteNotes,
  _getNotes,
  _updateNotes,
} from '../../../Store/Thunk/notes';
import { appTypography } from '../../../config/styles';

import dummyBanner_1 from '../../../assets/banner_defaults/banner_b_1.png';
import dummyBanner_2 from '../../../assets/banner_defaults/banner_b_5.png';
import dummyBanner_3 from '../../../assets/banner_defaults/banner_g_1.png';
import dummyBanner_4 from '../../../assets/banner_defaults/banner_g_5.png';
import dummyBanner_5 from '../../../assets/banner_defaults/banner_o_1.png';
import dummyBanner_6 from '../../../assets/banner_defaults/banner_o_4.png';
import dummyBanner_7 from '../../../assets/banner_defaults/banner_p_1.png';
import dummyBanner_8 from '../../../assets/banner_defaults/banner_p_3.png';
import dummyBanner_9 from '../../../assets/banner_defaults/banner_y_3.png';
import dummyBanner_10 from '../../../assets/banner_defaults/banner_y_5.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-block-end: 24px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e3e6;
  border-radius: 8px;
  justify-content: space-between;
  width: 800px;
`;

const SearchBtn = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 90%;
  margin: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const SearchIcon = styled(MagnifyingGlass)`
  width: 24px;
  height: 24px;
`;

const FourSquareIcon = styled(SquaresFour)`
  width: 24px;
  height: 24px;
`;

const FilterBtn = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const InterestContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SingleInterest = styled.p`
  border: 1px solid #e1e3e6;
  border-radius: 32px;
  padding: 12px 43px;
  cursor: pointer;
  background-color: ${({ isActive, theme }: { isActive: any; theme: any }) =>
    isActive ? '#9e4cdc' : 'initial'};
  color: ${({ isActive, theme }: { isActive: any; theme: any }) =>
    isActive ? theme.app.shades.white : theme.app.typography['900']};
`;

const DocumentsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: 360px;
  min-height: 360px;
  gap: 12px;
`;

const SingleDocCard = styled.a`
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-decoration: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  height: 100%;
`;

const DocDesc = styled.p(({ theme }) => ({
  ...appTypography.paraSmall.regular,
  color: theme.app.typography['500'],
  textAlign: 'center',
}));

const DocHeading = styled.p(({ theme }) => ({
  ...appTypography.paraMed.regular,
  color: theme.app.typography['900'],
  textAlign: 'center',
}));

const DocInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 256px;
`;

const DocImage = styled.div<{
  src: string;
}>`
  width: 256px;
  height: 173px;
  background: url(${({ src }) => src});
  background-size: cover;
  background-position: center;

  border-radius: 12px;
`;

const DeleteBtn = styled.div(({ theme }) => ({
  ...appTypography.paraSmall.regular,
  //   background: theme.app.error['100'],
  //   color: theme.app.error['500'],
  color: 'black',
  textAlign: 'center',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  textDecoration: 'none',
  borderRadius: '16px',
  padding: '8px',
}));

function Notebank() {
  const userDetails = useSelector((state: any) => state?.appdata?.user);
  const [currentTab, setCurrentTab] = useState('All');

  const interestList = ['All', ...userDetails?.interests];

  const allNotes = useSelector((state: any) => state?.notes?.notes);
  console.log(allNotes);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(_getNotes({ allNotes: true }));
  }, []);

  function handleTabChange(type: string) {
    setCurrentTab(type);
    dispatch(
      _getNotes({
        category: type === 'All' ? null : type,
        allNotes: type === 'All' ? true : false,
      }),
    );
  }

  async function handleDelete(noteId: any) {
    const res = await dispatch(
      _deleteNotes({ noteId, userId: userDetails?._id }),
    );
  }

  const getRandomBanner = useMemo(() => {
    const banners = [
      dummyBanner_1,
      dummyBanner_2,
      dummyBanner_3,
      dummyBanner_4,
      dummyBanner_5,
      dummyBanner_6,
      dummyBanner_7,
      dummyBanner_8,
      dummyBanner_9,
      dummyBanner_10,
    ];
    const randomIndex = Math.floor(Math.random() * banners.length);
    return banners[randomIndex];
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchChange(e: any) {
    const _searchQuery = e.target.value;
    setSearchQuery(_searchQuery);
  }

  const [filteredNotes, setFilteredNotes] = useState(allNotes);

  useEffect(() => {
    if (searchQuery.length > 0) {
      //   dispatch(_getNotes({searchQuery}));
      setFilteredNotes(
        allNotes?.filter((note: any) =>
          note?.noteTitle?.toLowerCase().includes(searchQuery?.toLowerCase()),
        ),
      );
    } else {
      setFilteredNotes(allNotes);
    }
  }, [searchQuery, allNotes]);

  console.log(allNotes);

  return (
    <Container>
      <SearchContainer>
        <SearchBox>
          <SearchInput placeholder="Search" onChange={handleSearchChange} />

          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </SearchBox>

        <FilterBtn>
          <FourSquareIcon />
        </FilterBtn>
      </SearchContainer>

      <InterestContainer>
        {interestList?.map((interesttext: any, index: number) => (
          <SingleInterest
            isActive={currentTab === interesttext}
            onClick={() => handleTabChange(interesttext)}
            key={index}
          >
            {interesttext}
          </SingleInterest>
        ))}
      </InterestContainer>

      <DocumentsContainer>
        {filteredNotes?.map((note: any, index: number) => (
          <SingleDocCard
            // href={note.fileUrl}
            // target="_blank"
            key={index}
            onClick={async () => {
              if (userDetails?._id !== note?.userId) {
                let res = await dispatch(
                  _updateNotes({
                    noteId: note._id,
                    userId: userDetails?._id,
                    viewCount: note.viewCount + 1,
                    noteTitle: note.noteTitle,
                    category: note.category,
                    description: note.description,
                    tags: note.tags,
                  }),
                ).unwrap();
                console.log(res);
                await dispatch(_getNotes({ allNotes: true }));
              }
            }}
          >
            <DocImage src={getRandomBanner} />

            <DocInfo>
              <DocHeading>{note.noteTitle}</DocHeading>
              <DocDesc>{note.description}</DocDesc>
            </DocInfo>

            <DeleteBtn>
              <div>Views: {note.viewCount}</div>
              <div>Readability score: {note.readabilityScore}</div>
              <div>Quality: {note.quality}</div>
            </DeleteBtn>
          </SingleDocCard>
        ))}
      </DocumentsContainer>
    </Container>
  );
}

export default Notebank;
