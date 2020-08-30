import React from 'react';
import { createStore } from 'redux'



class ReduxPraccy extends React.Component {

    render() {

        let counter = (state = 0, action) => {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1
                case 'DECREMENT':
                    return state - 1
                default:
                    return state
            }
        }

        let store = createStore(counter)

        store.subscribe(() => console.log(store.getState()))
        store.dispatch({type: 'INCREMENT'})
        store.dispatch({type: 'DECREMENT'})

        return (

            <div>
                <header>REDUX</header>

                <div>{this.counter}</div>
            </div>
        )
    }
}

export default ReduxPraccy