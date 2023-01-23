import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Maps from './Maps';

const Main = () => {
  return (
    <MainPageContainer>
      <Header />
      <Maps></Maps>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;

export default Main;
