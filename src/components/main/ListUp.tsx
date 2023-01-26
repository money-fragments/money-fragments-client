import React from 'react';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import SearchPlace from './SearchPlace';
import { IMarkers } from './Maps';
interface IListUpProps {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  list: IMarkers[];
}
const ListUp = ({ setPlace, list }: IListUpProps) => {
  return (
    <>
      <ListContainer>
        <SearchPlace setPlace={setPlace} />
        <ListAlign>
          <PlaceItem list={list} />
        </ListAlign>
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
  max-height: 90%;
  overflow: scroll;
  background-color: ${(props) => props.theme.colors.mono60};
  border-radius: 15px;
`;
const ListAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ListUp;
