import React from 'react'
import { MyContext } from './MyContext'

export default function Heading_context({ size, children }) {

    return (
        <>
        <MyContext.Provider value={size}>
            {children}
        </MyContext.Provider>
        </>
    )

}
