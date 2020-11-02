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
		place: "", 
		// image1: "", 
		// image2: "", 
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

	// const uploadImg = async (e) => {
	// 	//console.log(e.target.files);
	// 	const file = e.target.files[0];
	// 	const base64 = await convertBase64(file);
	// 	console.log(1, base64);
	// 	//setBoard3Image({ image: base64 });
	// 	setBoard3(prevState => {
	// 		return { ...prevState,
	// 			[e.target.name]: base64 };
	// 	});
	// }
	// const convertBase64 = (file) => {
	// 	return new Promise((resolve, reject) => {

	// 		const fileReader = new FileReader();
	// 		fileReader.readAsDataURL(file);

	// 		fileReader.onload = () => {
	// 			resolve(fileReader.result);
	// 		};
	// 		fileReader.onerror = (error) => {
	// 			reject(error);
	// 		};
	// 	})
	// }

	function inputHandle(e) {

		setBoard3((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	}

	function submitModify(e) {
		e.preventDefault();
		console.log("submitModify() 실행");

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
			<form>
				<select
					name="catagory"
					value={board3.catagory}
					onChange={inputHandle}>
					<option value="실종">실종</option>
					<option value="제보">제보</option>
				</select>
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
					onChange={inputHandle}>
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
				{/* <input
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
				/> */}
				<br/>
				<input
					type="text"
					onChange={inputHandle}
					name="content"
					value={board3.content}
					placeholder="내용을 입력하세요"
				/>
				<br />
				<button onClick={submitModify}>수정</button>
			</form>
		</div>
	);
};

export default ModifyBoard3;