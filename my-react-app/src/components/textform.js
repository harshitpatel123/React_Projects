import React, { useState } from 'react'

export default function Textform(props) {
    function onclickuppercase() {
        const newtext = text.toUpperCase()
        setText(newtext)
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    function extractemail() {
        const textarr = text.split(" ")
        const newtext1 = textarr.filter(x => x.endsWith("@gmail.com"))
        const newtext2 = textarr.filter(x => x.endsWith("@GMAIL.COM"))
        setemail(newtext1.toString() + " , " + newtext2.toString())
    }

    const [text, setText] = useState("this is previous text of variable 'text'")
    const [emailblank, setemail] = useState("No Email found")

    return (
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="form-floating">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <btm className="btn btn-primary mx-2 my-2" onClick={onclickuppercase}>Conver to UpperCase</btm>
                <btm className="btn btn-primary mx-2 my-2" onClick={extractemail}>Extract Email</btm>
            </div>
            <div className="container my-3">
                    <h3>Your text summary : {text.split(" ").length} words , {text.length} characters</h3>
            </div>
            <div className="container">
                <h2>Your Emails are : {emailblank}</h2>
            </div>
        </div>
    )
}
