import React, { useContext } from 'react'
import {MyContext} from './MyContext'

export default function Inner_context({children}) {
    const temp = useContext(MyContext) 
    switch(temp){
        case 1:{
            return (
                <div>
                    <h1>This is Heading 1</h1>
                    <h1>{children}</h1>
                </div>
            ) 
        }
        case 2:{
            return (
                <div>
                    <h2>This is Heading 2</h2>
                    <h2>{children}</h2>
                </div>
            ) 
        }
        case 3:{
            return (
                <div>
                    <h3>This is Heading 3</h3>
                    <h3>{children}</h3>
                </div>
            ) 
        }
        case 4:{
            return (
                <div>
                    <h4>This is Heading 4</h4>
                    <h4>{children}</h4>
                </div>
            ) 
        }
    }

}
