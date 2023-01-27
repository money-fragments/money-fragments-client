import React from 'react';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import SearchPlace from './SearchPlace';
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
  z-index: 3;
  top: 60px;
  left: 10px;
  width: 300px;
  height: 100%;
  max-height: 600px;
  overflow-y: scroll;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;
const ListAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ListUp;
