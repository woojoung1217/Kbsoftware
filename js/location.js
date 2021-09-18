// 1. 기본위치를 --카카오로 -- 설정 (필수)
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
  mapOption = { 
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 5 // 지도의 확대 레벨 
}; 
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 (내 위치를 받아오기 위함)
if (navigator.geolocation) {
// GeoLocation을 이용해서 접속 위치를 얻어옵니다
navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도
    var locPosition = new kakao.maps.LatLng(lat, lon) 
    // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    // 마커와 인포윈도우를 표시합니다
    displayMarker(locPosition);
  });
} 

// 지도에 마커를 표시하는 함수입니다
function displayMarker(locPosition) {
// 마커를 생성합니다.
var marker = new kakao.maps.Marker({  
    map: map, 
}); 
// 지도 중심좌표를 접속위치로 변경합니다
map.setCenter(locPosition);      
}    


// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다

var marker = new kakao.maps.Marker({ 
  // 지도 중심좌표에 마커를 생성합니다 
  position: map.getCenter() 
}); 
// 지도에 마커를 표시합니다
marker.setMap(map);
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng; 
    // 마커 위치를 클릭한 위치로 옮깁니다
    marker.setPosition(latlng);
});