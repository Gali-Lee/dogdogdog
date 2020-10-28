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
		content: ""
	});
	const [board3Image, setBoard3Image]= useState({
		id: "",
		image: ""
	})

	const uploadImg = async (e) => {
		//console.log(e.target.files);
		const file=e.target.files[0];
		const base64= await convertBase64(file);
		console.log(1,base64);
		setBoard3Image({image : base64});
	}
	const convertBase64=(file)=>{

		return new Promise((resolve,reject)=>{

			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = ()=>{
				resolve(fileReader.result);
			};
			fileReader.onerror= (error)=>{
				reject(error);
			};
		})
	}
	function inputHandle(e) {
		setBoard3({
			...board3,
			[e.target.name]: e.target.value,
		});
	}
	function submitPost(e) {
		e.preventDefault();
		console.log("submitPost() 실행");

		fetch("http://localhost:8000/board3/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(board3)
		})
			.then(res => {
				console.log("res :",res);
				res.text();
			})
			.then(res => {
				if (res === "ok") {
					alert("글이 등록되었습니다.");
					history.goBack();
				}
			})
	}

	return (
		<div>
			<form>
				<select
					name="catagory"
					value={board3.catagory}
					onChange={inputHandle}>
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
				<input
					type="text"
					onChange={inputHandle}
					name="sex"
					value={board3.sex}
					placeholder="성별을 입력하세요"
				/>
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
					type="file" 
					// multiple
					// accept="image/jpeg, image/jpg"
					 onChange={(e)=>{uploadImg(e);
					}}
					// name="image"
					// value={board3.image}
				/>
				<input
					type="file" 
					// multiple
					// accept="image/jpeg, image/jpg"
					 onChange={(e)=>{uploadImg(e);
					}}
					// name="image"
					// value={board3.image}
				/>
				<input
					type="file" 
					// multiple
					// accept="image/jpeg, image/jpg"
					 onChange={(e)=>{uploadImg(e);
					}}
					// name="image"
					// value={board3.image}
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