import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import AddPlayer from './components/AddPlayer';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Router>
        <Main path="/"/>
        <AddPlayer path="/players/addplayer"/>
      </Router>
    </div>
  );
}

export default App;
