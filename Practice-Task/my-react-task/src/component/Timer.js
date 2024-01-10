import React, { useState, useEffect } from 'react'

export default function Timer() {


    const [nowtime, setnowtime] = useState("")
    const [testbool, settestbool] = useState(false)
    const [btntext,setbtntext] = useState("Start Timer")




    function HandleStartTime() {
        
        if(!testbool){
            settestbool(true)
            setbtntext("Stop")
        }
        else{
            settestbool(false)
            setbtntext("Start Timer")
        }
    }

    return (
        <div>
            <h1>Timer</h1>
            <input value={nowtime} onChange={(e) => setnowtime(e.target.value)} placeholder="Enter Time" type='number' />
            <button onClick={HandleStartTime} >{btntext}</button>
            <br /><br />
            
            {testbool && <HandleSetTimer nowtime1={nowtime} />}
        </div>
    )
}

function HandleSetTimer({ nowtime1 }) {
    const timervalue = Number(nowtime1)
    const [remaintime, setremaintime] = useState(timervalue)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setremaintime((prevTime) => {
                if (prevTime > 0) {
                  return prevTime - 1;
                } else {
                  clearInterval(interval); // Stop the timer when remaintime reaches 0
                  return 0;
                }
              });
        }, 1000);
        return () => clearInterval(interval);
    });

    return <h1>Remaining Time : {remaintime}</h1>
}
