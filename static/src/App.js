import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Scenes/Login/Login';
import RandomQuestions from './Scenes/LoadQuestions/RandomQuestions';
import NavBar from './Components/NavBar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RandomQuestions />
      {/* <Login/> */}
    </div>
  );
}

export default App;
