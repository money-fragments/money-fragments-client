import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomButton } from 'components/common/CustomButton';
import { CustomInput } from 'components/common/CustomInput';
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
          placeholder="간단한 장소, 지명을 입력해주세요. ex) 버거킹 언주역"
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
  align-items: center;
  margin: 10px;
`;
const PlaceInput = styled(CustomInput)`
  width: 80%;
  margin-right: 10px;
  ::placeholder {
    font-size: 12px;
  }
`;
const SearchBtn = styled(CustomButton)`
  width: 60px;
  height: 35px;
  color: ${(props) => props.theme.colors.white60};
  border-radius: 17px;
  border-style: none;
  background-color: ${(props) => props.theme.colors.brand50};
`;
export default SearchPlace;
