import React, { useEffect, useState } from 'react';
import PopUpMemo from './PopupMemo';
const { kakao } = window;

interface IMarker {
  markers: number | string;
}
const MapContainer = () => {
  // 팝업 메모 visible
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [markers, setMarkers] = useState<IMarker[]>([]);

  const getMapPickMarker = () => {
    const container = document.getElementById('map-container'); //지도를 담을 영역의 DOM 레퍼런스
    const content = document.getElementById('overlay-container');
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.502318725608795, 127.04444559443071), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도를 클릭했을때 클릭한 위치에 마커를 추가하도록 지도에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
      // 클릭한 위치에 마커를 표시합니다
      addMarker(mouseEvent.latLng);
    });

    // 마커를 생성하고 지도위에 표시하는 함수입니다
    function addMarker(position: any) {
      setIsVisible(true);
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: position,
        clickable: true,
      });
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
        zIndex: -1,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      // 생성된 마커를 배열에 추가합니다
      setMarkers([...markers, marker]);
      overlay.setMap(map);
    }
  };

  useEffect(() => {
    getMapPickMarker();
  }, []);

  return (
    <>
      <div id="map-container" style={{ width: '100vw', height: '100vh' }} />
      <div id="overlay-container" style={{ position: 'absolute' }}>
        {isVisible && <PopUpMemo />}
      </div>
    </>
  );
};
export default MapContainer;
