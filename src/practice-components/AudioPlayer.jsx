import React from 'react';
import MarvinGaye from '../music/Got-To-Give-lt-Up-Marvin-Gaye.mp3'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioPlayer: null,
            isPlaying: false,
        }
    }
    
    onReady = (argRef) => {
        this.setState(
            {
                audioPlayer: argRef
            }
        )
    }

    playAudio = () => {
        this.state.audioPlayer.play()
    }

    stopAudio = () => {
       this.state.audioPlayer.pause() 

    }

    onPlay = () => {
        this.setState({
            isPlaying: true,
        })
        console.log('playing now')
    }

    onPause = () => {
        this.setState({
            isPlaying: false,
        })
        console.log('Stopped Playing')
    }

    render() {

        return (

            <div>
                <audio 
                ref={this.onReady}
                onPlay={this.onPlay}
                onPause={this.onPause}
                >
                    <source src={MarvinGaye} />
                </audio>

                <button onClick={this.playAudio}>
                    Play
                </button>

                <button onClick={this.stopAudio} disabled={ !this.state.isPlaying}>
                    Stop
                </button>

            </div>
        );
    };
};

export default AudioPlayer