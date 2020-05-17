import React from 'react';
import './SlideStyle.css';
import Slide from './Slide.jsx';
import Slides from './SlideAssets.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';




class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: Slides.length,
        }

    }
    goToPrevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length

        if (index < 1) {
            index = length - 1
        } else {
            index--
        }

        this.setState({
            activeIndex: index,
        })
    }

    goToNextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;

        if (index === length - 1) {
            index = 0
        } else {
            index++
        }

        this.setState({
            activeIndex: index,
        })
    }

    render() {
        return (


                <div className='slider'>
                    <div className='slider-items'>
                        <LeftArrow
                            className="backArrow"
                            goToPrevSlide={() => { this.goToPrevSlide() }}
                        />
                        <div className="slider-text">
                            <Slide activeIndex={this.state.activeIndex}
                                goToNextSlide={() => this.goToNextSlide()}
                            />
                        </div>
                        <RightArrow
                        
                            goToNextSlide={() => { this.goToNextSlide() }}
                        />
                    </div>
                </div>
          


        )
    }
}

export default SlideShow