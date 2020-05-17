import React from 'react';
import ClubJams from '../videos/club-jammin.mp4';
import SundayVid from '../videos/Sunday-Skate-Movie.mp4';
import BuffaloDemo from '../videos/Channel-4-Sabres-PKG.mp4';


//import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';

//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class VideoCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sunVidControl: null,
            buffVidControl: null,
        }
        this.onSunVidPlay = this.onSunVidPlay.bind(this);
        this.onBuffVidPlay = this.onBuffVidPlay.bind(this)
    }

    sunVidPlay = (sunVid) => {
        this.setState(
            {
                sunVidControl: sunVid
            }
        )
    }

    buffVidPlay = (buffVid) => {
        this.setState(
            {
                buffVidControl: buffVid
            }
        )
    }

    onSunVidPlay = () => {
        this.state.buffVidControl.pause()
    }

    onBuffVidPlay = () => {
        this.state.sunVidControl.pause()
    }

    render() {

        return (
            <div>
                <Carousel
                className="videoHolder"
                    arrows
                    slidesPerPage={1}
                 >
                    <div>       
                    <video
                        ref={this.sunVidPlay}
                        onPlay={this.onSunVidPlay}
                        controls
                    >
                        <source src={SundayVid} />
                    </video>
                    </div>

                    <div>
                    <video
                        ref={this.buffVidPlay}
                        onPlay={this.onBuffVidPlay}
                        controls
                    >
                        <source src={BuffaloDemo} />
                    </video>
                    </div>

                </Carousel >
            </div>
        )
    }
}

export default VideoCarousel