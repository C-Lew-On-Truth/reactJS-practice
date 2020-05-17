import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import SlideShow from './carousel-component-1/SlideShow.jsx';
//import CarouselSlider from './components2/Carousel.jsx';
//import ClockDemo from './clock-component/ClockDemo.jsx';
//import VideoTest from './practice-components/VideoTest.jsx';
//import VideoPlayer from './practice-components/VideoPlayer.jsx';
import MainPage from './practice-components/MainPage.jsx';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


ReactDOM.render(
  <MainPage />,
  document.getElementById('root')
);