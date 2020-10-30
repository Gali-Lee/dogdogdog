import React from 'react';
import './TestCard.css';
const TestCard = (props) => {

	let {mtId,mtCreateTime,mtTitle,mtContent,mtPlace,mtTime,mtCount,maxCount,mtList} = props.meeting;
	console.log(mtCreateTime);
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
					<p class="dog-card-body-hashtag">#여수 #순천 #광양</p>
					<p class="dog-card-body-nickname">
						작성자: 000<br/>
						
           		         </p>
				</div>

				<p class="dog-card-body-description">
					장소 : {mtPlace}<br/>
					시간 : {mtTime}<br/>
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