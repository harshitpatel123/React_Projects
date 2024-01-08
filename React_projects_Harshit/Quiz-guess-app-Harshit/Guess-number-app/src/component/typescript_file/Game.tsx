import React, { useState } from 'react'
import StartPage from './StartPage'
import MainGame from './MainGame'


export default function Game() {

  const [start, setstart] = useState<boolean>(true)
  let tempkey:number = 0;


  if (start) {
    return (
      <div>
        <center>
        <StartPage />
        <button onClick={() => setstart(false)}>Start</button>
        </center>
      </div>
    )
  }
  else {
    tempkey++;
    return (
      <div>
        <center>
        <MainGame key={tempkey}/>
        <button onClick={() => setstart(true)} style={{float:"right"}}>ReStart</button>
        </center>
      </div>
    )
  }
}
