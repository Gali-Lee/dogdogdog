import React, { useEffect, useState } from 'react';

const { kakao } = window;
const Board4MapContainer = ({ searchPlace, setLatLng, markerIdx, setCount, count, now }) => {


	const [place, setPlace] = useState({
		lat: "",
		lng: "",
	})

	useEffect(() => {
		console.log(5, "MapContainer2");
		console.log(200, { searchPlace });
		console.log(500, now);
		//false = marker X, true = marker O
		console.log(600, markerIdx);
		console.log("count", count);
		console.log("now", now);
		

		const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(35.157579, 129.059402),
			level: 6
		};
		const map = new kakao.maps.Map(container, options);
		const ps = new kakao.maps.services.Places();

		//지도 위치 옮길 때마다 지도 중심좌표 place에 저장
		kakao.maps.event.addListener(map, 'center_changed', function () {
			let level = map.getLevel();
			let latLng = map.getCenter();
			console.log(10, level);
			console.log(11, latLng);
			setPlace({
				lat: latLng.Ga,
				lng: latLng.Ha
			});
			setLatLng(latLng.Ga, latLng.Ha);
		});
		if (markerIdx) {
			console.log("markerIdx O", markerIdx);
			console.log("now.lat : ",now.lat);
			console.log("now.lng : ",now.lng);
			let coords = new kakao.maps.LatLng(now.lat, now.lng);
			map.setCenter(coords);
		} else {
			console.log("markerIdx X", markerIdx);
			// 키워드로 장소를 검색
			ps.keywordSearch(searchPlace, placesSearchCB);
		}


		// 키워드 검색 완료 시 호출되는 콜백함수
		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
				// LatLngBounds 객체에 좌표를 추가
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				// 검색된 장소 위치를 기준으로 지도 범위를 재설정
				console.log(4, (bounds.da + bounds.ia) / 2);
				console.log(5, (bounds.ka + bounds.ja) / 2);
				map.setBounds(bounds);
			}
		}


	}, [searchPlace, count]);

	//now != null 마커 o

	return (
		<div id='myMap' style={{
			width: '500px',
			height: '500px'
		}}>
			{}

		</div>
	);
};

export default Board4MapContainer;