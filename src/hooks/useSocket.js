import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

function useSocket() {
  const [data, setData] = useState({ id: '', notification: '' })

  useEffect(() => {
    const socket = io('http://localhost:8000')

    socket.on('connect', () => {
      setData((data) => ({ ...data, id: socket.id }))
    })

    socket.on('notification', ({ message }) => {
      setData((data) => ({ ...data, notification: message }))
    })
  }, [])

  return data
}

export default useSocket
