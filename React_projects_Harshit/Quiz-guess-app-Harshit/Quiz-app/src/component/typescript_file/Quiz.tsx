import React, { useState } from 'react'
import StartPage from './StartPage'
import Questions from './Questions';



export default function Quiz() {

  const [start, setstart] = useState<boolean>(true)
  let setkey:number = 0;  // using key to reset the useState values 


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
    setkey++;
    return (
      <div>
        <center>
        <Questions key={setkey} />
        <button onClick={() => setstart(true)} style={{float:"right"}}>ReStart</button>
        </center>
      </div>
    )
  }
}
