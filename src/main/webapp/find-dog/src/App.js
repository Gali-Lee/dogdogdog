
import './App.css';
import Header from './components/Header';
import React, { useEffect } from 'react';
import { login } from './store';
import { useDispatch } from 'react-redux';
import Main from './components/Main';
import Footer from './components/Footer';
import Lside from './components/Lside';
import Rside from './components/Rside';
import styled from 'styled-components';

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
    console.log(jwtToken);
  });

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
