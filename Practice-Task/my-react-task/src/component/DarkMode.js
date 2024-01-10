import React, { useState } from 'react'


export default function Darkmode() {

    const whitestyle = {
        border: "5px solid black",
        backgroundColor: "white",
        color: "black",
        height: "auto",
        width: "100%",
        borderRadius: "10px",
        paddingTop: "10px",
        margin: "auto",
        marginTop: "100px"
    }
    const blackstyle = {
        border: "5px solid red",
        backgroundColor: "black",
        color: "white",
        height: "auto",
        width: "100%",
        borderRadius: "10px",
        paddingTop: "10px",
        margin: "auto",
        marginTop: "100px"
    }

    const lightbtnstyle = {
        color: "black",
        backgroundColor: "white",
        borderRadius: "4px",
        textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        fontSize: "130%"
    }
    const darkbtnstyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "4px",
        textShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        fontSize: "130%"
    }

    const toggletheme = () => {
        if (oldtheme.color === "black") {
            newtheme(blackstyle)
            newtxt("Light")
            setbtnstyle(lightbtnstyle)
        }
        else {
            newtheme(whitestyle)
            newtxt("Dark")
            setbtnstyle(darkbtnstyle)
        }
    }


    const [oldtheme, newtheme] = useState(whitestyle)
    const [oldtxt, newtxt] = useState("Dark")
    const [btnstyle, setbtnstyle] = useState(darkbtnstyle)

    return (
        <div style={oldtheme}>
            <center>
                <p>
                    <h1>Toggle Switch</h1>
                    <h2>This is Theme changing Button</h2>
                    <button onClick={toggletheme} type="button" style={btnstyle}>{oldtxt}</button>
                </p>
            </center>
        </div>
    )
}


