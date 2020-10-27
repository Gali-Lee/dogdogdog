
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
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import Main from './components/Main';
import Footer from './components/Footer';
import Lside from './components/Lside';
import Rside from './components/Rside';
import styled from 'styled-components';


>>>>>>> ff8e6961c3a48804ce6c1fae05f4c93a25c896cf
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
const MainListStyle = styled.div`
display : grid;
  grid-template-columns: auto auto auto;
`;
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
      <MainListStyle>
        <Lside />
        <Main />
        <Rside />
      </MainListStyle>
      <Footer />
    </div>
  );
}

export default App;
