import React from 'react';
import styled from 'styled-components';
import SearchPlace from './SearchPlace';
interface ISearchPlaceProps {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
}
const ListUp = ({ setPlace }: ISearchPlaceProps) => {
  return (
    <>
      <ListContainer>
        <SearchPlace setPlace={setPlace} />
        <ul>
          <li>장소명</li>
        </ul>
        <ul>
          <li>장소명</li>
        </ul>
        <ul>
          <li>장소명</li>
        </ul>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 60px;
  left: 10px;
  width: 300px;
  min-height: 600px;
  max-height: fit-content;
  background-color: ${(props) => props.theme.colors.brand0};
  border-radius: 15px;
`;
export default ListUp;
