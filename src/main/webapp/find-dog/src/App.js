
import './App.css';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Board1 from './pages/Board1/Board1';
import Board2 from './pages/Board2/Board2';
import Board3 from './pages/Board3/Board3';

// 건들지 마시오!

function App() {
  return (
    <div>
      <Header />
      <Route path="/board1" exact={true} component={Board1} />
      <Route path="/board2" exact={true} component={Board2} />
      <Route path="/board3" exact={true} component={Board3} />

    </div>
  );
}

export default App;
