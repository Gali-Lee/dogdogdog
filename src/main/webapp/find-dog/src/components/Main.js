import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Board1 from '../pages/Board1/Board1';
import Board2 from '../pages/Board2/Board2';
import Board3 from '../pages/Board3/Board3';
import DetailBoard3 from '../pages/Board3/DetailBoard3';
import ModifyBoard3 from '../pages/Board3/ModifyBoard3';
import WriteBoard3 from '../pages/Board3/WriteBoard3';
import Join from '../pages/join/Join';
import DogJoin from '../pages/join/DogJoin';
const Main = () => {
	return (
		<div>
			<switch>
				<Route path="/login" exact={true} component={Login} />
				<Route path="/join" exact={true} component={Join} />
				<Route path="/joindog" exact={true} component={DogJoin} />
				<Route path="/board1" exact={true} component={Board1} />
				<Route path="/board2" exact={true} component={Board2} />
				<Route path="/board3" exact={true} component={Board3} />
				<Route path="/board3/detail/:id" exact={true} component={DetailBoard3} />
				<Route path="/board3/modify/:id" exact={true} component={ModifyBoard3} />
				<Route path="/board3/write" exact={true} component={WriteBoard3} />
				<Route path="/map" exact={true} component={Map} />
			</switch>
			<right/>
		</div>
	);
};

export default Main;