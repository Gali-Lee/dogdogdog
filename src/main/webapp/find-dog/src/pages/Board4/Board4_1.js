import React, { useState } from 'react';
import Board4MapContainer from '../../components/Board4MapContainer';

const Board4_1 = () => {
	const [inputText, setInputText] = useState("");
	const [place, setPlace] = useState("");
	const [now,setNow] = useState("");
	//marker ox
	const [markerIdx, setMarkerIdx] = useState(false);

	const onChange = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMarkerIdx(false);
		setNow("");
		setPlace(inputText);
		console.log(1, place);
		setInputText("");
	};
	function setLatLng(lat,lng){
		setNow({
			lat:lat,
			lng:lng
		})
	}
	function test(){
		setMarkerIdx(true);
	}
	function show(){
		test();
	}
	function re(){
		setMarkerIdx(false);
	}
	return (
		<div>
			<input
					placeholder="Search Place..."
					onChange={onChange}
					value={inputText}
			/>
			<button onClick={handleSubmit}>위치 검색</button>
			<Board4MapContainer searchPlace={place} now={now} setMarkerIdx={setMarkerIdx} markerIdx={markerIdx} setLatLng={setLatLng}></Board4MapContainer>
			<button onClick={show}>여기서 찾기 </button>
			<button onClick={re}>다시찾기</button>

		</div>
	);
};

export default Board4_1;