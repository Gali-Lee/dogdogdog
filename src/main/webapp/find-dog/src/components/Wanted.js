import React, { useState, useEffect } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const SectionStyle = styled.div`
background-color:white;
`;
const Section1Style = styled.div`
display: grid;
grid-template-columns: auto;
color: red;
border: 2px solid black;
background-color:white;
font-size: 65px;
font-weight:bold;
text-shadow: 3px 3px black;
text-align: center;
`;
const Section2Style = styled.div`
display: grid;
grid-template-columns: auto auto;
background-color:white;
border:2px solid black;
margin: 30px 80px;
`;
const Section3Style = styled.div`
display: grid;
background-color: red;
color: white;
text-align: center;
`;
const TextStyle = styled.div`
display: inline-block;
background-color: rgba(192,192,192,0.5);
position: relative;
/* 겹치듯이 사용할려면 무조건 렐러티브 */
top: 10px;
left: 50px;
`;

const Wanted = (props) => {

	const id = props.match.params.id;
	const history = useHistory();

	const [board3, setBoard3] = useState({
		id: "",
		catagory: "",
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
				domtoimage.toBlob(
					document.getElementById('wanted')
					, { width: 1080, height: 1080 })
					.then(function (blob) {
						saveAs(blob, 'myImage.png');
						history.push("/board3/detail/" + id);
					});
			});
	}, []);



	return (
		<div>
			<SectionStyle id="wanted">
				<Section1Style>강아지를 찾습니다</Section1Style>
				<Section2Style>
					<TextStyle>여러분의 제보가 큰힘이 됩니다.</TextStyle>
					<div><img src={"\\src\\images\\"+board3.image1} alt="" height="200px" /></div>
					<div><img src={"\\src\\images\\"+board3.image2} alt="" height="200px" /></div>
				</Section2Style>
				<Section3Style>
					<div>{board3.bread} ({board3.sex}/{board3.age}살)</div>
					<div>10월 22일, 하양읍 무학로길 동산아파트 근처</div>
				</Section3Style>
				<div>날짜 : 2020년 08월 07일</div>
				<div>장소 : 경기도 평택시 서탄면 사리길 (진위역 뒤쪽 마을)</div>
				<div>특징 : 얼굴이 많이 눌린 둥근 아이 이고 털이 이중모처럼 되어있습니다.</div>
				<div>{board3.content}</div>
			</SectionStyle>
		</div>
	);
};

export default Wanted;