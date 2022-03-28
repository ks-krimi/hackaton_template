import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import { LiveContext } from '../../context'

function Video() {
  const {
    data,
    me,
    name,
    callAccepted,
    myRecord,
    userRecord,
    callEnded,
    stream,
    call
  } = useContext(LiveContext)

  return (
    <>
      <Typography variant="body1" color="textSecondary">
        Hello, this is your socket ID: {me}
      </Typography>
      {data.notification && (
        <Typography variant="caption" color="textSecondary">
          Notification: {data.notification}
        </Typography>
      )}
      {stream && (
        <video
          style={{ maxWidth: 450 }}
          autoPlay
          playsInline
          muted
          ref={myRecord}
        />
      )}
      {callAccepted && !callEnded && (
        <video
          style={{ maxWidth: 450 }}
          autoPlay
          playsInline
          ref={userRecord}
        />
      )}
    </>
  )
}

export default Video
