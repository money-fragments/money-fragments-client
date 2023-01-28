import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomButton } from 'components/common/CustomButton';

interface ISearchPlaceProps {
  setPlace: React.Dispatch<React.SetStateAction<string>>;
}
const SearchPlace = ({ setPlace }: ISearchPlaceProps) => {
  const [inputText, setInputText] = useState('');
  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handlePlaceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText('');
  };
  return (
    <>
      <PlaceForm className="inputForm" onSubmit={handlePlaceSubmit}>
        <PlaceInput
          placeholder="예) 버거킹, 강남역"
          onChange={onChangeInputText}
          value={inputText}
        />
        <SearchBtn type="submit">검색</SearchBtn>
      </PlaceForm>
    </>
  );
};

const PlaceForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;
`;
const PlaceInput = styled.input`
  width: 80%;
`;
const SearchBtn = styled(CustomButton)`
  width: 60px;
  height: 35px;
  border-radius: 17px;
  border-style: none;
  background-color: ${(props) => props.theme.colors.brand50};
`;
export default SearchPlace;
