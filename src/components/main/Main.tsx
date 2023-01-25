import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ListUp from './ListUp';
import Maps from './Maps';
const Main = () => {
  const [isOpenListUp, setIsOpenListUp] = useState(false);
  const [place, setPlace] = useState('');

  return (
    <MainPageContainer>
      <Header setIsOpenListUp={setIsOpenListUp} isOpenListUp={isOpenListUp} />
      <MapContainer>
        <Maps searchPlace={place} />
        {isOpenListUp && <ListUp setPlace={setPlace} />}
      </MapContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;
const MapContainer = styled.div`
  /* width: 100%; */
  position: relative;
`;

export default Main;
