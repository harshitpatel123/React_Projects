import React, { useState } from 'react'


export default function Darkmode() {

    const whitestyle = {
        border: "5px solid black",
        backgroundColor: "white",
        color: "black",
        height: "70px",
        paddingTop: "10px"
    }
    const blackstyle = {
        border: "5px solid red",
        backgroundColor: "black",
        color: "white",
        height: "70px",
        paddingTop: "10px"
    }

    const toggletheme = () => {
        if(oldtheme.color == "black"){
            newtheme(blackstyle)
            newtxt("white")
        }
        else{
            newtheme(whitestyle)
            newtxt("black")
        }
    }

    const [oldtheme, newtheme] = useState(whitestyle)
    const [oldtxt, newtxt] = useState("black")

    return (
        <div className='container' style={oldtheme}>
            <p>
                <h2 style={{ float: "left" }}>This is Theme changing Button</h2>
                <button onClick={toggletheme} type="button" className="btn mx-5" style={{ float: "left", backgroundColor:"yellow" }}>{oldtxt}</button>
            </p>
        </div>
    )
}


