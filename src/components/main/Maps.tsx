import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import PopUpMemo from './PopupMemo';
interface IMarkers {
  position: {
    lat: number;
    lng: number;
  };
}

const Maps = () => {
  const [markers, setMarkers] = useState<IMarkers[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupMemoOpen, setIsPopupMemoOpen] = useState(false);
  return (
    <>
      <Map
        center={{ lat: 37.50231872560879, lng: 127.04444559443071 }}
        style={{ width: '100%', height: '90vh' }}
        level={3} // 지도의 확대 레벨
        // onClick={(_target, mouseEvent) => {
        // setMarkers([
        //   ...markers,
        //   {
        //     position: {
        //       lat: mouseEvent.latLng.getLat(),
        //       lng: mouseEvent.latLng.getLng(),
        //     },
        //   },
        // ]);
        // }}
      >
        {/* {isVisible &&
          markers.map((marker, index) => (
            <MapMarker
              key={`${marker.position}-${index}`}
              position={marker.position} // 마커를 표시할 위치
              onClick={() => setIsPopupMemoOpen(true)}
            />
          ))} */}
        <MapMarker
          position={{ lat: 37.50231872560879, lng: 127.04444559443071 }}
          onClick={() => setIsPopupMemoOpen(true)}
        />
        {isPopupMemoOpen && (
          <CustomOverlayMap
            position={{ lat: 37.50231872560879, lng: 127.04444559443071 }}
          >
            <PopUpMemo setIsPopupMemoOpen={setIsPopupMemoOpen}></PopUpMemo>
          </CustomOverlayMap>
        )}
      </Map>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <button onClick={() => setIsVisible(false)}>마커 감추기</button>
        <button onClick={() => setIsVisible(true)}>마커 보이기</button>
      </div>
    </>
  );
};

export default Maps;
