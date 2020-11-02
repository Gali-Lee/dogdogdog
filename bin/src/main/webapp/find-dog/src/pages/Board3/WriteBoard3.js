import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const WriteBoard3 = () => {

	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "",
		catagory: "",
		name: "",
		bread: "",
		age: "",
		sex: "",
		place: "",
		content: "",
		image1: "",
		image2: ""
	});

	const uploadImg = async (e) => {
		const file = e.target.files[0];
		setBoard3(prevState => {
			return {
				...prevState,
				[e.target.name]: file
			};
		});
	}

	// 이미지 base64 로 변환해서 올리는 방법
	/*
	const uploadImg = async (e) => {
		console.log(e.target.files);
		const file = e.target.files[0];
		const base64 = await convertBase64(file);
		console.log(1, base64);
		setBoard3Image({ image: base64 });
		setBoard3(prevState => {
			return {
				...prevState,
				[e.target.name]: base64;
			};
		});
	}
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {

			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};
			fileReader.onerror = (error) => {
				reject(error);
			};
		})
	}
	*/
	function inputHandle(e) {
		setBoard3((prevState) => {// 함수형으로 쓰는 이유 : setstate 두번쓸때 값을 들고오기 우ㅐㅎ서 
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

	function submitPost(e) {

		e.preventDefault();

		console.log("submitPost() 실행");

		const formData = new FormData();

		//formData.append("id", board3.id);
		
		formData.append("catagory", board3.catagory);
		formData.append("name", board3.name);
		formData.append("bread", board3.bread);
		formData.append("age", board3.age);
		formData.append("sex", board3.sex);
		formData.append("place", board3.place);
		formData.append("content", board3.content);
		formData.append("image1", board3.image1);
		formData.append("image2", board3.image2);
		console.log(formData);

		fetch("http://localhost:8000/board3/post", {
			method: "POST",
			headers: {
				// "Content-Type": "application/json; charset=utf-8"
			},
			body: formData
		})
			.then(res => {
				res.text();
			})
			.then(res => {
				if (res === "ok") {
					alert("글이 등록되었습니다.");
				};
			});
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
					name="place"
					value={board3.place}
					placeholder="장소를 입력하세요"
				/>
				<br />
				<input
					type="text"
					onChange={inputHandle}
					name="content"
					value={board3.content}
					placeholder="내용을 입력하세요"
				/>
				<br />
				<button onClick={submitPost}>등록</button>
			</form>
		</div>
	);
};

export default WriteBoard3;