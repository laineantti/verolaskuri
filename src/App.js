import React from 'react'
import { useState } from 'react'


function App() {
  //array destructuring 
  const [bruttopalkka, setBruttopalkka] = useState(0)
  const [veroprosentti, setVeroprosentti] = useState(0)
  const [veronmäärä, setVeronmäärä] = useState(0)

  const laskeVeronmaara = (event) => {
    let vero = bruttopalkka * veroprosentti / 100
    setVeronmäärä(vero)
  }

  const palkkaMuuttunut = (event) => {
    setBruttopalkka(event.target.value)
    laskeVeronmaara()
  }

  const veroprosMuuttunut = (event) => {
    setVeroprosentti(event.target.value)
    laskeVeronmaara()
  }

  //JSX  //angular
  return (
    <div>
      <input onChange={(event) => palkkaMuuttunut(event)} value={bruttopalkka}></input>
      <input onChange={(event) => veroprosMuuttunut(event)} value={veroprosentti}></input>
      <p>{veronmäärä}</p>
    </div>
  )
}

export default App