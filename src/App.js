import React from 'react';
import Header from './container/Header';
import Content from './container/Content';
import './App.css';


function App() {
  return (
    <div className="App text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/img/background.jpg'})`}}>
      <div className="background-blur"></div>
      <div className="arcadia"><h1>ARCADIA</h1></div>
      <Header />
      <Content />
    </div>
  );
}

export default App;
