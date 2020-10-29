import React, { useState } from 'react';
import {axios} from 'axios';
const Lside = () => {
	// const [img, setImage] = useState(null);

	// const onChange = (e) => {
	// 	setImage(e.target.files[0]);
	// }

	// const onClick = async () => {
	// 	const formData = new FormData();
	// 	formData.append('img', img);
	// 	// 서버의 upload API 호출
	// 	const res = await axios.post("/api/upload", formData);
	// 	console.log(res);
	// }
	return (
		<div>
			{/* <input type="img" onChange={onChange} />
			<button onClick={onClick}>제출</button> */}
		</div>
	);
};

export default Lside;