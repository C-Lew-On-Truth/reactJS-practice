import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import PixieLogo from './media/pixie-logo.png'

class EmailConfirm extends React.Component {
  state = {
    pageLoaded: false
  }

  componentDidMount = () => {
    setInterval(() => this.setState({ pageLoaded: !this.state.pageLoaded }), 1000)
  }
  render() {
    return (
      <div className="pageHolder">
        <div className={`confirmHolder confirmBorder1 ${this.state.pageLoaded ? 'confirmBorder1' : 'confirmBorder2'}`}>
          <img src={PixieLogo} />
          <p>
            You have successfully downloaded the Pixie App!
          </p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<EmailConfirm />, document.getElementById('root'));


