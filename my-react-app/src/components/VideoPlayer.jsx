import React , {useState , useRef , useEffect} from 'react'
import snakeVid from "../components/snakeVid.mp4"

function PlayVideo({src,isPlaying}){
    const videoref = useRef(null)
    

    useEffect(()=>{
        if(isPlaying){
            videoref.current.play()
        }
        else{
            videoref.current.pause()
        }
    })

    return (
        <video ref={videoref} src={src} height={"10%"} width={"20%"} ></video>
    )
}



export default function VideoPlayer() {

    const [isPlaying,setisPlaying] = useState(false)

  return (
    <div>
        <PlayVideo isPlaying={isPlaying} src={snakeVid} />
        <br />
      <button onClick={()=> setisPlaying(!isPlaying)}>{ isPlaying ? "Pause" : "Play" }</button>
    </div>
  )
}
