import React, { useState } from 'react';
import styled from 'styled-components';
import ListUp from './ListUp';
import Maps from './Maps';
import SearchIcon from './SearchIcon';
const Main = () => {
  const [isOpenListUp, setIsOpenListUp] = useState(false);
  const [place, setPlace] = useState('');
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [clickedItem, setClickedItem] = useState<IMarkers>();

  return (
    <MainPageContainer>
      <SearchIcon
        setIsOpenListUp={setIsOpenListUp}
        isOpenListUp={isOpenListUp}
      />
      <MapContainer>
        <Maps
          searchPlace={place}
          setMarkers={setMarkers}
          markers={markers}
          clickedItem={clickedItem}
        />
        {isOpenListUp && (
          <ListUp
            setPlace={setPlace}
            list={markers}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
          />
        )}
      </MapContainer>
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
