import './App.css';
import React,{useState} from 'react';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

const App=()=> {
  const [currentColor, setCurrentColor] = useState([]);
  const newBox = (newColor) => {
    setCurrentColor([...currentColor, newColor]);
  }
  return (
    <div className="App">
      <BoxForm onNewColor = {newBox}/>
      <DisplayBox color = {currentColor} />
    </div>
  );
}

export default App;
