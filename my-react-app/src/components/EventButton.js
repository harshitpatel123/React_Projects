import React from 'react'

function ButtonComp({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}

function Formcomp() {
    return (
        // this submit event of form reload  the page every time the send button is clicked
        // now we stop that using e.preventDefault
        <form onSubmit={(e)=>{
            e.preventDefault()
            alert("submitting the form")
        }}>
            <input type="text" placeholder='Enter text' />
            <button>Send</button>
        </form>
    )
}


export default function EventButton() {
    return (
        <>
            <div onClick={() => { alert("div is clicked") }} style={{ border: "2px solid black",padding:"5px" }}>
                <ButtonComp onClick={() => alert("dancing")}>
                    Dance
                </ButtonComp>
            </div>
            <br /><br />
            <Formcomp />
        </>
    )
}
