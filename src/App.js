import React from 'react';
//import './App.css';
// lukumäärä???

var laskuri=0;

function App() {
  
  const nappiaPainettu = ()=>{
    
    laskuri++;
    console.log("Painoit nappia")
  }
  //JSX
  return (
    <div>
        <button onClick={nappiaPainettu}>Paina minua</button>
    </div>
  );
}

export default App;
