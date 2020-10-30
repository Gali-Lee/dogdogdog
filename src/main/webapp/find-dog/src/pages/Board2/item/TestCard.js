import React from 'react';
import './TestCard.css';
const TestCard = (props) => {

	let {mtId,mtCreateTime,mtTitle,mtContent,mtPlace,mtTime,mtDate,mtCount,maxCount,mtList,userName} = props.meeting;
	return (
		<div class="dog-card">
			<div class="dog-card-header" >
				{/* <button class ="dog-button" onClick= {InsertModal} >aa</button>		 */}
				<div class="dog-card-header-is_closed" >
					<div class="dog-card-header-text" > 모집중 </div >
					<div class="dog-card-header-number" > {mtCount} / {maxCount} </div >
				</div >
			</div>
			<div class="dog-card-body">
				<div class="dog-card-body-header">
					<h1 class="dog-card-h1">{mtTitle}</h1>
					<p class="dog-card-body-hashtag">#태그1 #태그2 #태그3</p>
					<p class="dog-card-body-nickname">
						작성자: {userName}<br/>
						
           		         </p>
				</div>

				<p class="dog-card-body-description">
					장소 : {mtPlace}<br/>
					일시 : {mtDate} / {mtTime}<br/>
					기타 : {mtContent}
				</p>

				<div class="dog-card-body-footer">
					임시자리
				<i class="dog-reg_date"> {mtCreateTime} </i>
				</div>
			</div>
		</div>

	);
};

export default TestCard;