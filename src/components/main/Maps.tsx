import { Content } from 'components/common';
import React, { useEffect, useState } from 'react';
import {
  Map,
  MapMarker,
  CustomOverlayMap,
  ZoomControl,
  MapTypeControl,
} from 'react-kakao-maps-sdk';
import { MapProps } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import PopUpMemo from './PopupMemo';

interface IMapsProps {
  searchPlace: string;
  markers: IMarkers[];
  setMarkers: React.Dispatch<React.SetStateAction<IMarkers[]>>;
}
export interface IMarkers {
  position: { lat: number; lng: number };
  content?: string;
  address?: string;
}

const Maps = ({ searchPlace, setMarkers, markers }: IMapsProps) => {
  const [info, setInfo] = useState<IMarkers>();
  const [map, setMap] = useState<kakao.maps.Map>();
  const [isPopupMemoOpen, setIsPopupMemoOpen] = useState(false);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const [state, setState] = useState<MapProps>({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let newMarkers = [];
        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          newMarkers.push({
            position: {
              lat: data[i].y as unknown as number,
              lng: data[i].x as unknown as number,
            },
            content: data[i].place_name,
            address: data[i].address_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(newMarkers);
        map.setBounds(bounds);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    });
  }, [searchPlace]);

  return (
    <>
      <Map
        // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: '100%',
          height: '100vh',
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        <MapTypeControl position={kakao.maps.ControlPosition.TOPRIGHT} />

        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => {
              setInfo(marker);
              setIsPopupMemoOpen(false);
            }}
          >
            {info && info.content === marker.content && (
              <CustomOverlayMap position={marker.position} clickable={true}>
                <div>
                  <InfoWindow onClick={() => setIsPopupMemoOpen(true)}>
                    {info.content}📝
                  </InfoWindow>
                  {isPopupMemoOpen && (
                    <PopUpMemo
                      // 여기 프롭으로 marker.content를 넘겨주면??
                      // 그걸 어디서 사셨나요에 넣어주면??
                      setIsPopupMemoOpen={setIsPopupMemoOpen}
                      content={marker.content}
                    ></PopUpMemo>
                  )}
                </div>
              </CustomOverlayMap>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  );
};

const InfoWindow = styled(Content)`
  width: fit-content;
`;
export default Maps;
