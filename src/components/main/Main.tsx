import React from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';

const Main = () => {
  return (
    <MainPageContainer>
      <Top>로고자리</Top>
      <MapContainer></MapContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;
const Top = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.colors.mono0};
`;

export default Main;
