import React from 'react';
import '../styles/video-test.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Vid1 from '../videos/Channel-4-Sabres-PKG.mp4';
import Vid2 from '../videos/Sunday-Skate-Movie.mp4';
import Vid3 from '../videos/SPOR_original.mp4';

class VideoTest extends React.Component {
    constructor(props) {
        super(props)
        this.vid1 = React.createRef()
        this.vid2 = React.createRef()
        this.vid3 = React.createRef()
    }


    onlyVid1 = () => {
        if (this.vid1.current) {
            this.vid2.current.pause() || this.vid3.current.pause()
        }
    }

    onlyVid2 = () => {
        if (this.vid2.current) {
            this.vid1.current.pause() || this.vid3.current.pause()
        }
    }

    onlyVid3 = () => {
        if (this.vid3.current) {
            this.vid1.current.pause() || this.vid2.current.pause()
        }
    }

    render() {
        return (
            <div className="carousel">
            
                    <div>
                     
                        <video
                            onPlay={this.onlyVid1}
                            ref={this.vid1}
                            src={Vid1}
                            controls
                        />
                    </div>

                    <div>
                        <video
                            onPlay={this.onlyVid2}
                            ref={this.vid2}
                            src={Vid2}
                            controls
                        />
                    </div>

                    <div>
                        <video
                            onPlay={this.onlyVid3}
                            ref={this.vid3}
                            src={Vid3}
                            controls
                        />
                    </div>
         
            </div>

        )
    }
}

export default VideoTest