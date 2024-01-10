import React, { useState } from 'react'

export default function SubmitForm() {


  const [answer, setanswer] = useState("")
  const [status, setstatus] = useState("")
  const [err, seterr] = useState(false)

  if (status === "success") {
    return (
      <center>
        <div>
          <h1>Welcome {answer.toUpperCase()}</h1>
          <h1>Enjoy your Website</h1>
          <br /><br />
          <button onClick={()=>{setstatus("")}}>Log out</button>
        </div>
      </center>
    )
  }

  async function HandleSubmit(e) {
    e.preventDefault() 
    try {
      await checkUser(answer)
      setstatus("success")
      seterr("")
    }
    catch (err1) {
      seterr(err1.message)
      console.log(err1.message)
    }

  }

  function HandleOnChange(e) {
    setanswer(e.target.value)

  }

  return (
    <div>
      <center>
        <h1>Sign In Form</h1>
        <br />
        <form onSubmit={HandleSubmit}>
          <label htmlFor="">USER NAME : &nbsp;&nbsp;</label>
          <input value={answer} onChange={HandleOnChange} type="text" />
          <br /><br />
          <button disabled={answer.length === 0}>Log In</button>
          <br /><br />
          <h2>{err}</h2>
        </form>
      </center>
    </div>
  )
}

function checkUser(answer) {
  const userarr = ['harshit', 'parth', 'kirtan', 'sagar', 'meet']

  return new Promise((resolve, reject) => {
    let isUser = userarr.findIndex((value) => value === answer)
    if (isUser > -1) {
      resolve()
    }
    else {
      reject(new Error("Username not found !!"))
    }
  })
}