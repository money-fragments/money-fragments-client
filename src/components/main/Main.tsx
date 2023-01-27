import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ListUp from './ListUp';
import Maps from './Maps';
import MainDetailUi from './MainDetailUi';

const Main = () => {
  const [isOpenListUp, setIsOpenListUp] = useState(false);
  const [place, setPlace] = useState('');
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  return (
    <MainPageContainer>
      <Header setIsOpenListUp={setIsOpenListUp} isOpenListUp={isOpenListUp} />
      <MapContainer>
        <Maps searchPlace={place} setMarkers={setMarkers} markers={markers} />
        {isOpenListUp && <ListUp setPlace={setPlace} list={markers} />}
      </MapContainer>
      <MainDetailUi />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;
const MapContainer = styled.div`
  position: fixed;
  height: calc(100vh - 60px);
  width: 100%;
`;

export default Main;
