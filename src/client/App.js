import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

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
        <source src="../assets/webm/city-sideways.webm" type='video/webm; codecs="vp8, vorbis"' />
      </video>
    </React.Fragment>
  )
}
