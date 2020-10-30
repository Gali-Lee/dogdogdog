import React, { useState } from 'react';
import ModalSetting from './item/ModalSetting';


const ModalPage = () => {



	//아래는 모달 함수.
	const [modalVisible, setModalVisible] = useState(false)
	const openModal = () => { setModalVisible(true) }
	const closeModal = () => { setModalVisible(false) }


	return (
		<React.Fragment>
			모달 테스트 공간
			<button onClick={openModal}>open</button>
			{
				//모달 default 셋팅
				modalVisible && <ModalSetting
					visible={modalVisible}
					closable={true}
					maskClosable={true}
					onClose={closeModal}>

					{/* =====모달 내용=====*/}
					{/* 제목(mtTitle), 모임인원(maxCount),시간(mtTime),장소(mtPlace),기타(mtContent)  */}
					<form action="http://localhost:8000/board2/" method="post">
						<h5>모임 개설</h5>
						제목 : <input></input><br />
						최대인원 : <input></input><br />
						장소 : <input></input><br />
						시간 : <input></input><br />
						<textarea></textarea><br />
						<button type="submit">등록</button>
					</form>





				</ModalSetting>
			}




		</React.Fragment>
	);
};

export default ModalPage;