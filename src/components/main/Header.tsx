import React from 'react';
import styled from 'styled-components';
import { H1, H6 } from 'components/common';
const Header = () => {
  return (
    <Top>
      <H1>로고</H1>
      <button>
        <H6>로그인/회원가입</H6>
      </button>
    </Top>
  );
};

const Top = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.mono0};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header;
