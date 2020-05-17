import React from 'react';
import './SlideStyle.css';
import Slides from './SlideAssets.jsx';

class Slide extends React.Component {
    constructor(props) {
        super(props)
        this.state = { landing: Slides }
    }
    render() {
        return (
            <section>
                {
                    this.state.landing.map((s, index) =>
                        <div className={
                            index === this.props.activeIndex ? 'active' : 'inactive'}
                        key={index}>
                           <img src={s.picture}/>
                        </div>
                    )}
            </section>
        )
    }
}

export default Slide