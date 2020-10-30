import React, { useState } from 'react';
import ModalSetting from './item/ModalSetting';


const ModalPage = () => {

		const [meeting,setMeeting] =useState({
			mtTitle : "",
			maxCount :"",
			mtPlace : "",
			mtTime : "",
			mtContent : "",
		});
		const submitInsert = (e) => {
			e.preventDefault();
			fetch("http://localhost:8000/board2",{
				method : "POST",
				headers : {
					"Content-Type": "application/json; charset=utf-8"
				},
				body : JSON.stringify(meeting)
			}).then(res=> res.text()).then(
				res=> alert(res)
			);
		}

		const changeValue = (e) => {
		setMeeting({
			...meeting,
			[e.target.name]: e.target.value
		});
	}


	//아래는 모달 설정들.
	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }


	return (
		<div>
			<button onClick={openModal}>신규개설</button>
			{
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>
					{/* =====모달 바디 시작=====*/}
					{/* 제목(mtTitle), 모임인원(maxCount),시간(mtTime),장소(mtPlace),기타(mtContent)  */}
					<form action="http://localhost:8000/board2/" method="post">
						<h5>모임 개설</h5>
						제목 : <input onChange={changeValue} value={meeting.mtTitle} name="mtTitle"/><br />
						최대인원 : <input onChange={changeValue} value={meeting.maxCount} name="maxCount"/><br />
						장소 : <input onChange={changeValue} value={meeting.mtPlace} name="mtPlace"/><br />
						시간 : <input onChange={changeValue} value={meeting.mtTime} name="mtTime"/><br />
						<textarea onChange={changeValue} value={meeting.mtContent} name="mtContent"></textarea><br />
						<button onClick={submitInsert}>등록</button>
					</form>


				</ModalSetting>
			}
		</div>
	);
};

export default ModalPage;