import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login/Login';
import Board1 from '../pages/Board1/Board1';
import Board2 from '../pages/Board2/Board2';
import Board3 from '../pages/Board3/Board3';
import DetailBoard3 from '../pages/Board3/DetailBoard3';
import ModifyBoard3 from '../pages/Board3/ModifyBoard3';
import WriteBoard3 from '../pages/Board3/WriteBoard3';
import Join from '../pages/join/Join';
import DogJoin from '../pages/join/DogJoin';
import MapPage from '../pages/map/MapPage';
import MapContainer from './MapContainer';
import SearchPlace from '../pages/map/SearchPlace';
import ModalPage from '../pages/Board2/ModalPage';
import Board4_1 from '../pages/Board4/Board4_1';
import Wanted from './Wanted';

const Main = () => {
	return (
		<div>
			<Switch>
				<Route path="/login" exact={true} component={Login} />
				<Route path="/join" exact={true} component={Join} />
				<Route path="/joindog" exact={true} component={DogJoin} />
				<Route path="/board1" exact={true} component={Board1} />
				<Route path="/board2" exact={true} component={Board2} />
				<Route path="/board2/modal" exact={true} component={ModalPage} />
				<Route path="/board3" exact={true} component={Board3} />
				<Route path="/board3/detail/:id" exact={true} component={DetailBoard3} />
				<Route path="/board3/modify/:id" exact={true} component={ModifyBoard3} />
				<Route path="/board3/write" exact={true} component={WriteBoard3} />
				<Route path="/map" exact={true} component={Board4_1} />
				<Route path="/wanted/:id" eexact={true} component={Wanted}/>
			</Switch>
			<right/>
		</div>
	);
};

export default Main;