import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ModifyBoard3 = (props) => {

	const id = props.match.params.id;
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id:"",
		catagory:"", 
		name: "", 
		bread: "", 
		age: "", 
		sex: "", 
		date: "",
		place: "", 
		image1: "", 
		image2: "", 
		content: ""
	});
	useEffect(() => {

		fetch("http://localhost:8000/board3/" + id, {
			method: "GET",

		}).then((res) => res.json())
			.then((res) => {
				setBoard3(res);

			});
	}, []);

	const uploadImg = async (e) => {
		const file = e.target.files[0];
		setBoard3(prevState => {
			return {
				...prevState,
				[e.target.name]: file
			};
		});
	}

	function inputHandle(e) {

		setBoard3((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}
	function selectHandle(e) {
		setBoard3((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}

	function submitModify(e) {
		e.preventDefault();

		console.log("submitModify() 실행");

		const formData = new FormData();

		//formData.append("id", board3.id);

		formData.append("catagory", board3.catagory);
		formData.append("name", board3.name);
		formData.append("bread", board3.bread);
		formData.append("age", board3.age);
		formData.append("sex", board3.sex);
		formData.append("place", board3.place);
		//formData.append("lat", location.lat);
		//formData.append("lng", location.lng);
		formData.append("content", board3.content);
		formData.append("image1", board3.image1);
		formData.append("image2", board3.image2);
		formData.append("date",board3.date);
		
		fetch("http://localhost:8000/board3/" + id, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(board3)
		})
			.then(res => res.text())
			.then(res => {
				if (res === "ok") {
					alert("글이 수정되었습니다.");
					history.push("/board3/detail/"+id);
				}
			})
	}
	return (
		<div>
			<form encType="multipart/form-data">
				<input
					type="file"
					name="image1"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<input
					type="file"
					name="image2"
					onChange={(e) => {
						uploadImg(e);
					}}
				/>
				<br />
				<select
					name="catagory"
					value={board3.catagory}
					onChange={selectHandle}>
					<option selected value="선택안함">선택안함</option>
					<option value="실종">실종</option>
					<option value="제보">제보</option>
				</select>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="name"
					value={board3.name}
					placeholder="반려동물의 이름을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="bread"
					value={board3.bread}
					placeholder="견종을 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="age"
					value={board3.age}
					placeholder="나이를 입력하세요"
				/>
				<br />
				<select
					name="sex"
					value={board3.sex}
					onChange={selectHandle}>
					<option selected value="선택안함">선택안함</option>
					<option value="여자">여자</option>
					<option value="남자">남자</option>
				</select>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="content"
					value={board3.content}
					placeholder="내용을 입력하세요"
				/>
				<br />
				<input 
					type="date"
					onChange={inputHandle} 
					value={board3.date} 
					name="date" />
				<br />
				{/* <input
					type="text"
					onChange={onChange}
					name="place"
					value={inputText}
					placeholder="장소를 입력하세요"
				/> 
				<button onClick={handleSubmit}>검색</button>
				<br />
				{visible ? <MapContainer searchPlace={place} latLng={setLatLng} /> : null}
				<br />
				{visible ? <button onClick={savePlace}>장소 저장</button> : null}
				<br /> */}
				<button onClick={submitModify}>수정</button>
			</form>
		</div>
	);
};

export default ModifyBoard3;