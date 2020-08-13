import React from 'react';
import '../styles/praccy-one.css'
import chick from '../media/FriedChicken.jpg';
import pisa from '../media/Pizza.jpg';
import spaghetti from '../media/Spaghetti.jpg';
import taco from '../media/Tacos.jpg';

class PraccyOne extends React.Component {
    state = {
        chicken: chick,
        pizza: pisa,
        tacos: taco,
        changePic: true,
    }

    changePics = event => {

        let target = event.currentTarget.className

        if (target === 'pic1' && this.state.changePic) {
            this.setState({ chicken: pisa, })
        } else if (target === 'pic2' && this.state.changePic) {
            this.setState({ pizza: chick })
        } else if (target === 'pic3') {
            this.setState({ tacos: spaghetti, changePic: false })
        }
    }

    render() {

        return (
            <div className='mainDiv'>
                <div className='pic1' name='chicken' onMouseDown={this.changePics}>
                    <img src={this.state.chicken} alt='' draggable={false} />
                </div>
                <div className='pic2' name='pizza' onClick={this.changePics}>
                    <img src={this.state.pizza} alt='' draggable={false} />
                </div>
                <div className='pic3' onClick={this.changePics}>
                    <img src={this.state.tacos} alt='' draggable={false} />
                </div>
            </div>
        )
    }
}

export default PraccyOne