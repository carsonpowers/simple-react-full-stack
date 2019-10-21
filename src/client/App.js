import React, { useState, useEffect } from 'react'
import './app.css'
// import R from 'ramda'
// import Effects from './Effects'

export default function Example() {
  // const [username, setUsername] = useState(null)
  // const { getUsername } = Effects

  // useEffect(() => getUsername(setUsername))

  // const Message = () => (username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>)

  const Message = props => {
    const { name } = props
    return (
      <ul className="message">
        {name.split('').map(letter => (
          <li>{letter}</li>
        ))}
      </ul>
    )
  }

  return (
    <React.Fragment>
      <Message name="CARSON POWERS" />
      <video id="vid" playsInline autoPlay loop muted>
        <source src="../assets/webm/rainy-window.webm" type='video/webm; codecs="vp8, vorbis"' />
      </video>
      <div className="overlay" />
    </React.Fragment>
  )
}
