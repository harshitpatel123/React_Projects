import React, { useState } from 'react'



export default function MainGame() {

    
    const [gamecomplete, setgamecomplete] = useState<boolean>(false)
    const [hint, sethint] = useState<string>('')
    const [answer, setanswer] = useState<number>(0)
    const [pcguess, setpcguess] = useState<number>(Math.floor(Math.random() * 20 + 1))


    function HandleCheckGuess() {
        if(answer > pcguess){
            sethint("Lower...")
        }
        else if(answer < pcguess){
            sethint("Higher...")
        }
        else if(answer == pcguess){
            setgamecomplete(true)
        }
    }

    function HandleOnChange(e) {
        setanswer(e.target.value)
    }

    if (gamecomplete) {
        return (
            <div>
                <h1>WOW !!!</h1>
                <br />
                <h1>You Win</h1>
                <h3>Press restart To Replay The Game</h3> 
            </div>
        )
    }
    else {

        return (
            <div>
                <center>
                    <h2>Computer Has Decided A Number Between 1 TO 20</h2>
                    <h2>Enter Your Guess</h2>
                    <input value={answer} onChange={HandleOnChange} type="number" /><br />
                    <button onClick={HandleCheckGuess} >Check</button>
                    <br /><br />
                    <h3>{hint}</h3>
                </center>
            </div>
        )
    }
}
