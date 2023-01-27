import { Content } from 'components/common';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  Map,
  MapMarker,
  CustomOverlayMap,
  ZoomControl,
} from 'react-kakao-maps-sdk';
import { MapProps } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainDetailUi from './MainDetailUi';
import PopUpMemo from './PopupMemo';
import useUserExpenses from 'hooks/useUserExpenses';

interface IMapsProps {
  searchPlace: string;
  markers: IMarkers[];
  setMarkers: React.Dispatch<React.SetStateAction<IMarkers[]>>;
  clickedItem: IMarkers | undefined;
}

const Maps = ({
  searchPlace,
  setMarkers,
  markers,
  clickedItem,
}: IMapsProps) => {
  const auth = getAuth();
  const location = useLocation();
  const [info, setInfo] = useState<IMarkers>();
  const [map, setMap] = useState<kakao.maps.Map>();
  const [isPopupMemoOpen, setIsPopupMemoOpen] = useState(false);
  const [isDetailUiOpen, setIsDetailUiOpen] = useState(false);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  const [state, setState] = useState<MapProps>({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });

  const { data } = useUserExpenses(
    auth.currentUser?.uid!,
    new Date().getFullYear().toString()
  );

  // 유져의 현재 위치를 받아올 수 있으면 현재 위치로 지도를 이동시키고, 없으면 서울로 이동시킨다.
  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isPanto: true,
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // 지출 내역을 클릭하면 그 지출 내역의 위치로 지도를 이동시킨다.
  useEffect(() => {
    if (location.state?.expense.placeInfo) {
      setMarkers([location.state.expense.placeInfo]);
      setState({
        center: {
          lat: location.state.expense.placeInfo.position.lat,
          lng: location.state.expense.placeInfo.position.lng,
        },
        isPanto: true,
      });
    }
  }, [location]);

  // 유져의 지출 내역을 받아오면 지도에 마커를 표시한다.
  useEffect(() => {
    if (markers.length === 0) {
      if (data) {
        setMarkers(data.map((expense: Expense) => expense.placeInfo));
      }
    }
  }, [data]);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(searchPlace, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let newMarkers = [];
        for (let i = 0; i < data.length; i++) {
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
        center={state.center}
        isPanto={state.isPanto}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={3}
        onCreate={setMap}
      >
        <ZoomControl position={kakao.maps.ControlPosition.TOPRIGHT} />
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => {
              setInfo(marker);
              setIsPopupMemoOpen(false);
            }}
            onMouseOver={() => setIsInfoWindowOpen(true)}
            infoWindowOptions={{ zIndex: 0 }}
          >
            {clickedItem?.content === marker.content && info && (
              <>
                <InfoWindow onClick={() => setIsPopupMemoOpen(true)}>
                  <InfoContent>{marker?.content}</InfoContent>
                </InfoWindow>
                <CustomOverlayMap
                  position={marker.position}
                  clickable={true}
                  zIndex={1}
                  yAnchor={1}
                >
                  {isPopupMemoOpen && (
                    <PopUpMemo
                      setIsPopupMemoOpen={setIsPopupMemoOpen}
                      setIsDetailUiOpen={setIsDetailUiOpen}
                      content={marker.content}
                      info={info}
                    ></PopUpMemo>
                  )}
                </CustomOverlayMap>
                <CustomOverlayMap
                  position={marker.position}
                  clickable={true}
                  zIndex={2}
                  yAnchor={1}
                >
                  {isDetailUiOpen && (
                    <MainDetailUi
                      setIsDetailUiOpen={setIsDetailUiOpen}
                      content={marker.content}
                      info={info}
                    />
                  )}
                </CustomOverlayMap>
              </>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  );
};

const InfoWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InfoContent = styled(Content)`
  margin: 2px 0 2px 2px;
`;
export default Maps;
