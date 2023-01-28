import { Content } from 'components/common';
import { CustomButton } from 'components/common/CustomButton';
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

interface IMapsProps {
  searchPlace: string;
  markers: IMarkers[];
  setMarkers: React.Dispatch<React.SetStateAction<IMarkers[]>>;
  clickedItem: IMarkers | undefined;
  setClickedItem: React.Dispatch<React.SetStateAction<IMarkers | undefined>>;
}

const Maps = ({
  searchPlace,
  setMarkers,
  markers,
  clickedItem,
  setClickedItem,
}: IMapsProps) => {
  const location = useLocation();
  const [info, setInfo] = useState<IMarkers>();
  const [map, setMap] = useState<kakao.maps.Map>();
  const [isShowMemo, setIsShowMemo] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [state, setState] = useState<MapProps>({
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    isPanto: true,
  });

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
      setClickedItem(location.state.expense.placeInfo);
    }
  }, [location]);

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
            onMouseOver={() => {
              setClickedItem(marker);
            }}
            infoWindowOptions={{ zIndex: 0 }}
          />

          // </MapMarker>
        ))}
        {clickedItem && (
          <CustomOverlayMap
            position={clickedItem.position}
            clickable={true}
            zIndex={2}
            yAnchor={1}
          >
            <InfoContent
              onClick={() => {
                setIsShowMemo(true);
                setInfo(clickedItem);
              }}
            >
              {clickedItem.content}
              <CustomButton
                width="100px"
                backgroundColor="black60"
                color="white100"
              >
                메모작성하기
              </CustomButton>
            </InfoContent>
          </CustomOverlayMap>
        )}
        {isShowMemo && info && (
          <CustomOverlayMap
            position={info.position}
            clickable={true}
            zIndex={2}
            yAnchor={1}
          >
            <PopUpMemo
              setIsShowMemo={setIsShowMemo}
              setIsShowDetail={setIsShowDetail}
              content={info?.content}
              info={clickedItem!}
            />
          </CustomOverlayMap>
        )}
        {isShowDetail && clickedItem && (
          <CustomOverlayMap
            position={clickedItem.position}
            clickable={true}
            zIndex={2}
            yAnchor={1}
          >
            <MainDetailUi
              setIsShowDetail={setIsShowDetail}
              clickedItem={clickedItem}
            />
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
};

// {clickedItem?.content === marker.content && info && (
//   <>
//     <InfoWindow onClick={() => setIsPopupMemoOpen(true)}>
//       <InfoContent>{marker?.content}</InfoContent>
//     </InfoWindow>
//     <CustomOverlayMap
//       position={marker.position}
//       clickable={true}
//       zIndex={1}
//       yAnchor={1}
//     >
//       {isPopupMemoOpen && (
//         <PopUpMemo
//           setIsPopupMemoOpen={setIsPopupMemoOpen}
//           setIsDetailUiOpen={setIsDetailUiOpen}
//           content={marker.content}
//           info={info}
//         ></PopUpMemo>
//       )}
//     </CustomOverlayMap>
//     <CustomOverlayMap
//       position={marker.position}
//       clickable={true}
//       zIndex={2}
//       yAnchor={1}
//     >
//       {isDetailUiOpen && (
//         <MainDetailUi
//           setIsDetailUiOpen={setIsDetailUiOpen}
//           content={marker.content}
//           info={info}
//         />
//       )}
//     </CustomOverlayMap>
//   </>
// )}

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 48px;
  width: auto;
  background-color: ${(props) => props.theme.colors.brand0};
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export default Maps;
