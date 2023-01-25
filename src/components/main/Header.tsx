import React from 'react';
import styled from 'styled-components';
import { H1, H6 } from 'components/common';
import GlobalStyle from 'styles/GlobalStyle';
import { FaSearchLocation } from 'react-icons/fa';

interface IHeaderProps {
  setIsOpenListUp: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenListUp: boolean;
}

const Header = ({ setIsOpenListUp, isOpenListUp }: IHeaderProps) => {
  return (
    <>
      <GlobalStyle />
      <Top>
        <H1>로고</H1>
        <FaSearchLocation
          style={{ width: '30px', height: '30px' }}
          onClick={() => setIsOpenListUp(!isOpenListUp)}
        />
        <CustomBtn>
          <H6>로그인/회원가입</H6>
        </CustomBtn>
      </Top>
    </>
  );
};

const Top = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.mono0};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomBtn = styled.button`
  width: 150px;
  height: 40px;
  margin-right: 45px;
  background-color: ${(props) => props.theme.colors.brand0};
  border-style: none;
  border-radius: 27px;
`;

export default Header;
