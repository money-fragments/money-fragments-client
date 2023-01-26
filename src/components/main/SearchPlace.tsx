import { Content } from 'components/common';
import React, { useState } from 'react';
import styled from 'styled-components';

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
          placeholder="간단한 장소, 지명을 입력해주세요. ex) 강남역, 버거킹"
          onChange={onChangeInputText}
          value={inputText}
        />
        <CustomBtn type="submit">
          <Content>검색</Content>
        </CustomBtn>
      </PlaceForm>
    </>
  );
};

const PlaceForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const PlaceInput = styled.input`
  width: 80%;
`;
const CustomBtn = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 17px;
  border-style: none;
  background-color: ${(props) => props.theme.colors.brand0};
`;
export default SearchPlace;
