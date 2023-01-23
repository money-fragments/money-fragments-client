import React from 'react';
import styled from 'styled-components';
import Maps from './Maps';

const Main = () => {
  return (
    <MainPageContainer>
      <Top>로고자리</Top>
      <Maps></Maps>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;
const Top = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.mono0};
`;

export default Main;
