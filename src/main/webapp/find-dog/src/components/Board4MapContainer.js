import React, { useEffect, useState } from 'react';

const { kakao } = window;
const Board4MapContainer = ({ searchPlace, setLatLng, setMarkerIdx, markerIdx, now }) => {

	const [place, setPlace] = useState({
		lat: "",
		lng: "",
	})
	const [idx, setIdx] = useState(1);
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log(5, "MapContainer2");
		console.log(200, { searchPlace });
		console.log(500, now);
		//false = marker X, true = marker O
		console.log(600, markerIdx);
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
				lat: latLng.Ha,
				lng: latLng.Ga
			});
			setLatLng(latLng.Ha, latLng.Ga);
		});
		if (markerIdx) {
			console.log("markerIdx O", markerIdx);
			console.log("now.lat : ", now.lat);
			console.log("now.lng : ", now.lng);
			let coords = new kakao.maps.LatLng(now.lat, now.lng);
			console.log("coord", coords.Ga);
			console.log("coord", coords.Ha);

			fetch("http://localhost:8000/board4", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Authorization": localStorage.getItem("Authorization")
				},
				body: JSON.stringify(now)

			}).then((res) => res.json())
				.then((res) => {
					setList(res);
				});
			console.log("리스트", list);
			var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

			for (let i = 0; i < list.length; i++) {
				console.log("리스트for", list[i]);
				var imageSize = new kakao.maps.Size(24,35);
				var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
				var marker = new kakao.maps.Marker({
					map:map,
					position: new kakao.maps.LatLng(list[i].lat,list[i].lng),
					title: list[i].name,
					image: markerImage

				})
			}
			map.setCenter(coords);

		} else {
			console.log("markerIdx X", markerIdx);
			// 키워드로 장소를 검색
			ps.keywordSearch(searchPlace, placesSearchCB);
		}
		// function displayMarker(place) {
		// 	console.log("displayMarker:", place.name);
		// 	let marker = new kakao.maps.Marker({
		// 		position: new kakao.maps.LatLng(place.lat, place.lng)
		// 	});
		// 	marker.setMap(map);

		// }

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


	}, [searchPlace, markerIdx, idx]);
	function showMarker() {
		setIdx(idx + 1);
	}
	//now != null 마커 o

	return (
		<div>
			<div id='myMap' style={{
				width: '500px',
				height: '500px'
			}}>
				{}

			</div>
			<button onClick={showMarker}>리스트보기</button>
		</div>
	);
};

export default Board4MapContainer;