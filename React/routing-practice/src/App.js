import './App.css';
import { Router } from '@reach/router';
import Hello from './components/Hello';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Hello path="/:val"/>
        <Hello path="/:val/:color/:background"/>
        <Home path="/home"/>
      </Router>
    </div>
  );
}

export default App;
