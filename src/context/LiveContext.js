import { createContext, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

export const LiveContext = createContext()

const socket = io('http://localhost:8000/live')

export function LiveProvider({ children }) {
  const [data, setData] = useState({notification: '' })
  const [stream, setStream] = useState(null)
  const [me, setMe] = useState('')
  const [call, setCall] = useState({})
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState('')

  const myRecord = useRef()
  const userRecord = useRef()
  const connexionRef = useRef()

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((currentSteam) => {
        setStream(currentSteam)
        if ('srcObject' in myRecord.current) {
          myRecord.current.srcObject = currentSteam
        } else {
          myRecord.current.src = window.URL.createObjectURL(currentSteam)
        }
      })

    socket.on('notification', ({ message }) => {
      setData((data) => ({ ...data, notification: message }))
    })

    socket.on('me', (id) => {
      setMe(id)
    })

    socket.on('calluser', ({ signal, from, name }) => {
      setCall({ isReceivedCall: true, signal, from, name })
    })
  }, [])

  const answerCall = () => {
    setCallAccepted(true)
    const peer = new Peer({ initiator: false, trickle: false, stream })
    peer.on('signal', (data) => {
      socket.emit('answerCall', { to: call.from, signal: data })
    })

    peer.on('stream', (currentSteam) => {
      if ('srcObject' in userRecord.current) {
        userRecord.current.srcObject = currentSteam
      } else {
        userRecord.current.src = window.URL.createObjectURL(currentSteam)
      }
    })

    peer.signal(call.signal)

    connexionRef.current = peer
  }

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })
    peer.on('signal', (data) => {
      socket.emit('calluser', {
        userToCall: id,
        signalData: data,
        from: me,
        name
      })
    })

    peer.on('stream', (currentSteam) => {
      if ('srcObject' in userRecord.current) {
        userRecord.current.srcObject = currentSteam
      } else {
        userRecord.current.src = window.URL.createObjectURL(currentSteam)
      }
    })

    socket.on('callaccepted', (signal) => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connexionRef.current = peer
  }

  const leaveUser = () => {
    setCallEnded(true)
    connexionRef.current.destroy()
    window.location.reload()
  }

  return (
    <LiveContext.Provider
      value={{
        data,
        stream,
        me,
        call,
        callAccepted,
        callEnded,
        name,
        setName,
        myRecord,
        userRecord,
        answerCall,
        callUser,
        leaveUser
      }}
    >
      {children}
    </LiveContext.Provider>
  )
}

LiveProvider.prototype = {
  children: PropTypes.node
}
