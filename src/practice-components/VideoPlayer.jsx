import React from 'react';
import '../styles/video-styles.css';
import ClubJams from '../videos/club-jammin.mp4';
import BuffGoof from '../videos/BuffaloGoofin.mov';


class VideoPlayer extends React.Component {
    constructor() {
        super();
        this.state = {
            videoPlayer: null,
            videoPlayer2: null,
        }
    }

    onReady = (vidEvent) => {
        this.setState(
            {
                videoPlayer: vidEvent
            }
        )
    }

    onReady2 = (vidEvent2) => {
        this.setState(
            {
                videoPlayer2: vidEvent2
            }
        )
    }

    videoPlays = () => {  
        this.state.videoPlayer2.pause()
    };

    videoPlays2 = () => { 
        this.state.videoPlayer.pause()
    };

    render() {

        return (
            <div className="videoHolder">

                <div> 
                <video   
                    ref={this.onReady}
                    onPlay={this.videoPlays}
                    controls
                >
                    <source src={BuffGoof} />
                </video>
                </div>

                <div>
                <video   
                    ref={this.onReady2}
                    onPlay={this.videoPlays2}
                    controls
                >
                    <source src={ClubJams} />
                </video>
                </div>

            </div>
        )
    }
}

export default VideoPlayer