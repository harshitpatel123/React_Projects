import React, { useEffect, useState } from 'react'

export default function useCheckOnline() {

    const [isOnline,setisOnline] = useState(true)

    useEffect(()=>{
        function HandleOnline(){
            setisOnline(true)
        }
        function HandleOffline(){
            setisOnline(false)
        }

        window.addEventListener('online',HandleOnline)
        window.addEventListener('offline',HandleOffline)
        
        return ()=>{
            window.removeEventListener('online',HandleOnline)
            window.removeEventListener('offline',HandleOffline)
        }
    },[])

  return isOnline
}
