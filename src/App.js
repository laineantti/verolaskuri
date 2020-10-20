import React from 'react';
import { useState } from 'react';
//import './App.css';
//lukumäärä???

//type inference
var laskuri="moi!";

function App() {
  //array destructuring
  const [laskuri,setLaskuri]=useState(0);

  const hassuFunktio(x)=> {
    x++;
  }

  const nappiaPainettu = ()=>{

    setLaskuri(laskuri+1);
    console.log(laskuri)
  }
  //JSX
  return (
    <div>
        <button onClick={nappiaPainettu}>Paina minua {laskuri}</button>
    </div>
  );
}

export default App;
