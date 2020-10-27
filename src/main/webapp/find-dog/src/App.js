
import './App.css';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Board1 from './pages/Board1/Board1';
import Board2 from './pages/Board2/Board2';
import Board3 from './pages/Board3/Board3';
import Login from './pages/login/Login';
import Map from './pages/map/Map'
import Join from './pages/join/Join';
import PetJoin from './pages/join/PetJoin';
import React, { useEffect } from 'react';
import { login } from './store';
import { useDispatch } from 'react-redux';
/* 건들지 마시오!
**************************
***************************
**************************
*******건들지 마시오***********
*************************
*************************
**************************
***********************
************************
*/

function App() {

  //로그인 상태관리
  const dispatch = useDispatch();

  useEffect(() => {
    let jwtToken = localStorage.getItem("Authorization");
    if (jwtToken !== null) {
      dispatch(login());
    }
  }, []);

  return (
    <div>
      <Header />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/join" exact={true} component={Join} />
      <Route path="/petjoin" exact={true} component={PetJoin} />
      <Route path="/board1" exact={true} component={Board1} />
      <Route path="/board2" exact={true} component={Board2} />
      <Route path="/board3" exact={true} component={Board3} />
      <Route path="/map" exact={true} component={Map} />

    </div>
  );
}

export default App;
