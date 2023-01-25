import React from 'react';
import styled from 'styled-components';
import SearchPlace from './SearchPlace';

interface IListUpProps {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
}
const ListUp = ({ setPlace }: IListUpProps) => {
  return (
    <>
      <ListContainer>
        <SearchPlace setPlace={setPlace} />
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
  background-color: ${(props) => props.theme.colors.mono60};
  border-radius: 15px;
`;
export default ListUp;
