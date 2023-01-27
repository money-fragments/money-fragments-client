import React from 'react';
import styled from 'styled-components';
import PlaceItem from './PlaceItem';
import SearchPlace from './SearchPlace';
interface IListUpProps {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  clickedItem: IMarkers | undefined;
  setClickedItem: React.Dispatch<React.SetStateAction<IMarkers | undefined>>;
  list: IMarkers[];
}
const ListUp = ({
  setPlace,
  list,
  clickedItem,
  setClickedItem,
}: IListUpProps) => {
  return (
    <>
      <ListContainer>
        <div>
          <SearchPlace setPlace={setPlace} />
        </div>
        <ListAlign>
          <PlaceItem
            list={list}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
          />
        </ListAlign>
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: 30px;
  left: 30px;
  width: 380px;
  height: 100%;
  max-height: 600px;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const ListAlign = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
export default ListUp;
