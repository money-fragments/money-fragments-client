import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ListUp from './ListUp';
import Maps from './Maps';

import { IMarkers } from './Maps';

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
    </MainPageContainer>
  );
};

const MainPageContainer = styled.main``;
const MapContainer = styled.div`
  position: relative;
`;

export default Main;
