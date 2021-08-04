import './App.css';

import Main from './views/Main';
import { Router } from '@reach/router';
import AddAuthor from './components/AddAuthor';
import Update from './views/Update';
function App() {

  return (
    <div className="App">
      <h1>Favorite author</h1>
      <Router>
        <Main path="/"/>
        <AddAuthor path="/new"/>
        <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
