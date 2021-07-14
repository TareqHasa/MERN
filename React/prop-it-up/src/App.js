import './App.css';
import  PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Tareq" lastName="Hasan" age={28} hairColor="brown"/>
      <PersonCard firstName="Wadee" lastName="Awwad" age={27} hairColor="Brown"/>
      <PersonCard firstName="Layth" lastName="Irshaid" age={23} hairColor="Brown"/>
      <PersonCard firstName="Ahmad" lastName="Bzour" age={30} hairColor="Black"/>
      <PersonCard firstName="Nizam" lastName="Jawabra" age={29} hairColor="brown"/>
    </div>
  );
}

export default App;
