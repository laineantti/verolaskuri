import React from "react"
import { useState } from "react"

function App() {
  //array destructuring
  const [bruttopalkka, setBruttopalkka] = useState(0)
  const [veroprosentti, setVeroprosentti] = useState(0)

  const laskeVeronmaara = (event) => {
    return (bruttopalkka * veroprosentti) / 100
  }

  const palkkaMuuttunut = (event) => {
    setBruttopalkka(event.target.value)
  }

  const veroprosMuuttunut = (event) => {
    setVeroprosentti(event.target.value)
  }

  //JSX  //angular
  return (
    <div>
      <input
        onChange={(event) => palkkaMuuttunut(event)}
        value={bruttopalkka}
      ></input>
      <input
        onChange={(event) => veroprosMuuttunut(event)}
        value={veroprosentti}
      ></input>
      <p>{laskeVeronmaara()}</p>
    </div>
  )
}

export default App