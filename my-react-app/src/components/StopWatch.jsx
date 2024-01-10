import React , {useState,useRef,useEffect} from 'react'

export default function StopWatch() {

    const [start,setstart] = useState(null)
    const [now,setnow] = useState(null)
    const intervalRef = useRef(null)


    function HandleOnstart(){
        setstart(Date.now())
        setnow(Date.now())
        
        intervalRef.current = setInterval(() => {
            setnow(Date.now())
        }, 10);
    }

    function HandleOnstop(){
        clearInterval(intervalRef.current)
    }

    let secondpassed = 0;
    if(start != null){
        secondpassed = (now - start)/1000 ;
    }
    

  return (
    <div>
      <h2>StopWatch</h2>
      <h4>Time : {secondpassed.toFixed(2)}</h4>
      <button onClick={HandleOnstart}>Start</button>
      <button onClick={HandleOnstop}>Stop</button>
    </div>
  )
}
