import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SearchPlace from './SearchPlace';
const Main = () => {
  return (
    <MainPageContainer>
      <Header />
      <SearchPlace />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;

export default Main;
