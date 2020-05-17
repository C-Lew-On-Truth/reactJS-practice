import React from 'react';
import './SlideStyle.css';

class RightArrow extends React.Component {
    render() {
        return(
            <div className="nextArrow" onClick={this.props.goToNextSlide}>
                <div>Next</div>
            </div>
        )
    }
}

export default RightArrow