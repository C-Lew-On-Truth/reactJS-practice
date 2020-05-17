import React from 'react';
import './SlideStyle.css';

class LeftArrow extends React.Component {
    render() {
        return(
            <div className="backArrow" onClick={this.props.goToPrevSlide}>
                <div>Prev</div>
            </div>
        )
    }
}

export default LeftArrow