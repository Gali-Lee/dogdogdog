import React, { useState, useEffect } from 'react';
import ModalSetting from './ModalSetting';
import './MemberList.css';

const MemberList = (props) => {
	let { mtId, userName } = props;
	const [mtmList, setMtmList] = useState([]);
	// @GetMapping("/board2/mList/{id}")



	useEffect(() => {
		fetch("http://localhost:8000/board2/mList/" + mtId).then(res => res.json()).then(
			res => {
				setMtmList(res);
			}
		);
	}, [])



	const mtm = {
		mtName: userName,
		mt: mtId,
	};


	const submitInsert = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/board2/mList", {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8"
			},
			body: JSON.stringify(mtm)
		}).then(res => res.text()).then(
			res => alert(res)

		);
		// window.location.reload(); //페이지 새로고침
	}


	//모달
	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }





	return (
		<div>
			<button onClick={openModal} className="box-b">상세보기</button>
			<button onClick={submitInsert} className="box-b">참가</button>

			{
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>

					{/* <div style={{ border: "3px solid blue" }}> */}
					<div className="box">
						<h5 >참가자</h5>
						<ul>
							{mtmList.map(
								member =>
									<li><span>1</span>{member}</li>
							)}
						</ul>
						<button className="box-b" >수정</button>
						{userName === localStorage.user ? <button className="box-b">삭제</button> : null}
					</div>





				</ModalSetting>
			}
		</div>
	)






};

export default MemberList;