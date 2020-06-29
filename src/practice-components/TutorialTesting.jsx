import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import '../styles/tutorial-testing.css'


class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

Greeting.defaultProps = {
    name: 'Stranger'
}

class TutorialTesting extends React.Component {
    render() {
        return (
            <Greeting/>
        )
    }
}





export default TutorialTesting