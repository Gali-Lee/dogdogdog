
import './App.css';
import Header from './components/Header';
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
