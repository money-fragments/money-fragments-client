import React from 'react';
import styled from 'styled-components';
import MainDetailUi from './MainDetailUi';
const Main = () => {
  return (
    <div>
      <NaviTest>여기에는 Navibar가 들어갑니다</NaviTest>
      <MainDetailUi />
    </div>
  );
};
const NaviTest = styled.header`
  height: 60px;
  background-color: #b2b0b0;
`;
export default Main;
