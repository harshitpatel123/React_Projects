import React from 'react'
import useCheckOnline from './useCheckOnline'

export default function OnlineStatus() {
    const isOnline = useCheckOnline()

  return (
    <div>
        <br /><br />
        <h1>
      {isOnline ? '✅ Online ' : '❌ Disconnected'}
        </h1>
    </div>
  )
}
