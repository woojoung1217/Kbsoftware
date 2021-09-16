
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude,
      lon = position.coords.longitude;
      // 지도를 생성합니다

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
        var map = new kakao.maps.Map(mapContainer, mapOption);
        var markerPosition  = new kakao.maps.LatLng(lat, lon); 
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 마커가 표시될 위치입니다 
        });
  }


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude,
      lon = position.coords.longitude;
      // 지도를 생성합니다

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(lat, lon), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
        var markerPosition  = new kakao.maps.LatLng(37.2047173 ,127.0733380); 
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 마커가 표시될 위치입니다 
        });
  }
