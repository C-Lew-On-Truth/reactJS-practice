
import React from 'react';
import AudioPlayer from './AudioPlayer.jsx';
import VideoPlayer from './VideoPlayer.jsx'


class MainPage extends React.Component {
  constructor() {
    super();
    this.displayWords = null;
    this.showWords = (words) => {
      this.displayWords = words
    }

  }

  componentDidMount = () => {
    this.displayWords.hidden = true;
  }

  showMessage = () => {
    this.displayWords.hidden = false;
  }

  hideMessage = () => {
    this.displayWords.hidden = true;
  }

  render() {

    const sideVidStyle = {
      display: "flex",
      justifyContent: "space-between",
      margin: "5% auto",
      width: "50%",
      height: "400px",
    }

    const videoHolder = {
      width: "500px",
      height: "400px",
      margin: "5% auto",
    }
    return (
      <div style={{ textAlign: "center" }}>

        <button onClick={this.showMessage}>
          CLICK
          </button>

        <p ref={this.showWords} onClick={this.hideMessage}>
          This will appear after you press "CLICK" button.<br />
            CLICK THIS MESSAGE TO MAKE THIS DISAPPEAR AGAIN!
          </p>

        <div>
          <h1>Plays Music</h1>
          <AudioPlayer />
        </div>
       {/*
        <h1>Video Player</h1>
        <p>Works Fine with "ref"<br></br>
            One video stops when the other video plays  
        </p>
        <div style={sideVidStyle}>
          <VideoPlayer />
        </div>
       */}
        <h1>Video Carousel</h1>
        <p style={{color: "red"}}>
          Same ref code style that I used with Video player does not work
          </p>
        <div style={videoHolder}>
            <VideoPlayer/>
        </div>


      </div>
    )
  }
}

export default MainPage;