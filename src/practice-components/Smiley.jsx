import React from 'react'
import Smiley from '../media/smileyFace2.jpg';

class Follower extends React.Component {
    render() {
      const mouse = this.props.mouse
      return (
        <img src={Smiley} style={{height: '100px',width: '100px', position: 'absolute', left: mouse.x, top: mouse.y}} />
      )
    }
  }
  
  class Leader extends React.Component {
    constructor(props) {
      super(props)
      this.handleLeaderMove = this.handleLeaderMove.bind(this)
      this.state = {x: 0, y: 0}
    }
  
    handleLeaderMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
  
    render() {
      return (
        <div>
          <div style={{height: '100vh'}} onMouseMove={this.handleLeaderMove}></div>
  
          <Follower mouse={this.state}/>
        </div>
      )
    }
  }
  
  
  
  
  class SmileFace extends React.Component {
    render() {
      return (
        <div>
          <Leader />
        </div>
      )
    }
  }
  
  export default SmileFace