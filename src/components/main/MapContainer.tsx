import React, { useEffect, useState } from 'react';
const { kakao } = window;

const MapContainer = () => {
  const [marker, setMarker] = useState<string | number>('');

  const getMapPickMarker = () => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.502318725608795, 127.04444559443071), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    const marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });
    setMarker(marker);
    marker.setMap(map);

    // 마커 등록 이벤트 리스너
    kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      const msg = '클릭한 위치의 위도는 ' + latlng.getLat();
      console.log(msg);
    });
  };

  useEffect(() => {
    getMapPickMarker();
  }, []);

  return <div id="map" style={{ width: '100vw', height: '100vh' }} />;
};

export default MapContainer;
