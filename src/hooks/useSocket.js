import { useEffect } from 'react'
import { io } from 'socket.io-client'

function useSocket() {
  useEffect(() => {
    const socket = io('http://192.168.43.160:8000')

    socket.on('connect', () => {
      console.log('On connection', socket.id)
    })

    socket.on('message', ({ type, data }) => {
      console.log('On message', JSON.parse(data))
    })
  }, [])
}

export default useSocket
