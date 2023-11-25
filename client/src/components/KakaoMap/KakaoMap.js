import React, { useEffect, useRef } from "react";
import * as S from "./styled";
const { kakao } = window;

const KakaoMap = ({
  isRegister,
  position,
  myPosition,
  onAddressUpdate,
  onPositionUpdate,
  search,
  moveLocationPosition,
  moveMyPosition,
}) => {
  const markerRef = useRef(null);
  const myMarkerRef = useRef(null);

  useEffect(() => {
    const [latitude, longitude] = position.split(",").map(parseFloat);
    const locationPosition = new kakao.maps.LatLng(latitude, longitude);
    var mapContainer = document.getElementById("map");
    var mapOption = {
      center: locationPosition,
      level: 2,
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
    const marker = new kakao.maps.Marker();
    var circle;

    if (!isRegister) {
      circle = new kakao.maps.Circle({
        center: locationPosition,
        radius: 30,
        strokeWeight: 5,
        strokeColor: "#75B8FA",
        strokeOpacity: 1,
        strokeStyle: "dashed",
        fillColor: "#CFE7FF",
        fillOpacity: 0.3,
      });
      circle.setMap(map);

      if (markerRef.current) {
        markerRef.current.setPosition(locationPosition);
        markerRef.current.setMap(map);
      } else {
        marker.setPosition(locationPosition);
        marker.setMap(map);
        markerRef.current = marker;
      }
    }

    if (search) {
      function placesSearchCB(data, status) {
        if (status === kakao.maps.services.Status.OK) {
          var bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      }

      var ps = new kakao.maps.services.Places();
      ps.keywordSearch(search, placesSearchCB);
    }

    if (onPositionUpdate) {
      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        onPositionUpdate(mouseEvent.latLng);
        marker.setPosition(mouseEvent.latLng);
        marker.setMap(map);
      });
    }

    if (onAddressUpdate) {
      const searchDetailAddrFromCoords = (coords, callback) => {
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
      };

      searchDetailAddrFromCoords(locationPosition, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const roadAddr = !!result[0].road_address
            ? result[0].road_address.address_name
            : "";
          const lotAddr = result[0].address.address_name;
          const addr = [roadAddr, lotAddr];
          onAddressUpdate(addr);
        }
      });
    }

    if (myPosition) {
      const [myLatitude, myLongitude] = myPosition.split(",").map(parseFloat);
      const myPositionLatLng = new kakao.maps.LatLng(myLatitude, myLongitude);

      var coContent =
        "<div style='background-color: black; color: white; padding: 7px; border-radius: 10px;'>현재 위치</div>";
      var coPosition = myPositionLatLng;
      var customOverlay = new kakao.maps.CustomOverlay({
        position: coPosition,
        content: coContent,
        xAnchor: 0.5,
        yAnchor: 2.5,
      });

      if (!myMarkerRef.current) {
        const myMarker = new kakao.maps.Marker({
          position: myPositionLatLng,
        });
        myMarkerRef.current = myMarker;
        customOverlay.setMap(map);
      } else {
        const myMarker = new kakao.maps.Marker({
          position: myPositionLatLng,
        });
        myMarkerRef.current = myMarker;
        customOverlay.setMap(map);
      }
      myMarkerRef.current.setPosition(myPositionLatLng);
      myMarkerRef.current.setMap(map);

      if (moveMyPosition) {
        map.setCenter(myPositionLatLng);
      }
    }

    if (moveLocationPosition) {
      map.setCenter(locationPosition);
    }
  }, [
    position,
    myPosition,
    search,
    moveLocationPosition,
    moveMyPosition,
    isRegister,
  ]);

  return <S.Container id='map'></S.Container>;
};

export default KakaoMap;
