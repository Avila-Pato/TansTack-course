// Procsamiento para manejos http clasicos minimo de react
// sin usar tantask query...

"use client"
import { useEffect, useState } from 'react'
import './App.css'
import Tanstack from './tanstack/Tanstack'

function App() {
  const [RandomNumber, setRandomNumber] = useState(0)
  const [Loading, setLoading] = useState(false)
  const [RefreshToken, setRefreshToken] = useState(0)
  const [Error, setError] = useState(null)

  useEffect(  ()   =>   {
      setLoading(true)
      setError(null)
     fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
    .then(res => res.text())
    .then((data) => {
      setRandomNumber(Number(data))
    })
    .catch((error) => {
      setError(error.message)
    })
    .finally(() => {
      setLoading(false)
    })
  },[ RefreshToken])

  return (
    < >{
      Error ?
      <h1>{Error}</h1>
      :  <div>
        {
          Loading 
          ? <h1>Loading...</h1>
          : <h1>{RandomNumber}</h1>
        }

      <span style={ {display: "block" , paddingBottom: "32px"}}>.....</span>
      </div>
    }
   
      <div>
          <button onClick={() => setRefreshToken(RefreshToken + 1)}>
            Generar nuevo número
          </button>
      </div>

      <div>
        <Tanstack />
      </div>
    </>
  )
}

export default App
