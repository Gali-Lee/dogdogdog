import React, { useState } from 'react';
import styled from 'styled-components';
import MapContainer3 from '../../components/MapContainer3'
const FormStyle = styled.form`
  display: grid;
  justify-items: auto;
  font-family: 'Sam3KRFont';
`;
const InputBoxStyle = styled.div`
display:grid;
grid-template-columns: auto auto;
`;
const InputStyle = styled.input`
  height: 45px;
  width: 80%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;
const SelectStyle = styled.select`
  height: 45px;
  width: 80%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid #003458;
  border-radius: 6px;
`;
const ButtonStyle = styled.button`
  background-color: #003458;
  color: white;
  width: 80px;
  height: 45px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 6px;
  border: 0px;
  cursor: pointer;
`;
const Board1Write = () => {
	const [board1, setBoard1] = useState({
		id: "", //번호
		image1: "",//이미지1
		image2: "",//이미지2
		title: "",//제목
		catagory: "",//실종, 제보
		place: "",//발견장소
		content: "",//내용

	});
	const uploadImg = async (e) => {
		const file = e.target.files[0];
		setBoard1(prevState => {
			return {
				...prevState,
				[e.target.name]: file
			};
		});
	}
	function inputHandle(e) {
		setBoard1((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}
	function selectHandle(e) {
		setBoard1((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}

	function submitPost(e) {

		e.preventDefault();

		console.log("submitPost() 실행");

		const formData = new FormData();

		//formData.append("id", board3.id);

		formData.append("catagory", board1.catagory);
		formData.append("title", board1.title);
		formData.append("place", board1.place);
		formData.append("content", board1.content);
		formData.append("image1", board1.image1);
		formData.append("image2", board1.image2);
		formData.append("user", localStorage.user);
		formData.append("lat", location.lat);
		formData.append("lng", location.lng);

		fetch("http://localhost:8000/board1/write", {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem("Authorization"),
			},
			body: formData
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("글이 등록되었습니다.");
				} else {
				};
			});
	}
	function setLatLng(lat, lng) {
		console.log(30, lat);
		console.log(30, lng);
		setLocation({
			lat: lat,
			lng: lng
		});
	}
	function showMap() {
		setVisible(true);
	}
	function savePlace() {
		setVisible(false);
		console.log(1000, location);
	}
	const [place, setPlace] = useState("");
	const [visible, setVisible] = useState(false);
	const [location, setLocation] = useState({
		title: "",
		lat: "",
		lng: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		setPlace(board1.place);
		console.log(1, place);
		showMap();
	};

	return (
		<div>
			<FormStyle encType="multipart/form-data">
				<label>사진 첨부</label>
				<br />
				<InputStyle
					type="file"
					name="image1"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<InputStyle
					type="file"
					name="image2"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<label>제목</label>
				<InputStyle
					type="text"
					onChange={inputHandle}
					name="title"
					value={board1.title}
					placeholder="제목을 입력하세요"
				/>
				<br />
				<label>카테고리</label>
				<SelectStyle
					name="catagory"
					value={board1.catagory}
					onChange={selectHandle}>
					<option selected value="선택안함">선택안함</option>
					<option value="산책로">산책로</option>
					<option value="카페">카페</option>
					<option value="기타">기타</option>
				</SelectStyle>
				<br />
				<label>내용을 입력하세요</label>
				<textarea
					onChange={inputHandle}
					name="content">{board1.content}</textarea>
				<br />

				<label>위치</label>
				<InputBoxStyle>
					<InputStyle
						type="text"
						onChange={inputHandle}
						name="place"
						value={board1.place}
						placeholder="장소를 입력하세요"
					/><button onClick={handleSubmit}>검색</button>
				</InputBoxStyle>

				{visible ? <MapContainer3 searchPlace={place} latLng={setLatLng} /> : null}
				<br />
				{visible ? <button onClick={savePlace}>장소 저장</button> : null}
				<br />
				<br />

				<ButtonStyle onClick={submitPost}>등록</ButtonStyle>
			</FormStyle>
		</div>
	);
};

export default Board1Write;