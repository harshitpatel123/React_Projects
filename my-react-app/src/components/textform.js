import React,{useState} from 'react'

export default function Textform(props) {
    function onclickuppercase(){
        const newtext = text.toUpperCase()
        setText(newtext)
    }

    function handleOnChange(event){
        setText(event.target.value)
    }

    const [text,setText] = useState("this is previous text of variable 'text'")

    return (
        <div className='container'>
            <h1>{props.heading} + {text}</h1>
            <div className="form-floating">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <btm className="btn btn-primary" onClick={onclickuppercase}>Conver to UpperCase</btm>
            </div>
        </div>
    )
}
