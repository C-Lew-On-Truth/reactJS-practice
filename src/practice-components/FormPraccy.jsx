import React from 'react';
import '../styles/form.css'

const defaultForm = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: ''
}
class FormPraccy extends React.Component {
    state = defaultForm

    inputValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    infoOffical = () => {
        let emailError = ''
        let nameError = ''
        let passwordError = ''

        if (!this.state.name) {
            nameError = 'Write your fucking name!'
        }

        if (!this.state.email.includes('@')) {
            emailError = 'Are you stupid?'
        }

        if (this.state.password < 5) {
            passwordError = 'Your Password is too damn short!'
        }

        if (emailError || nameError || passwordError) {
            this.setState({ emailError, nameError, passwordError })
            return false
        }

        return true

    }

    takeSubmit = event => {
        event.preventDefault()
        const takeInfo = this.infoOffical()
      if (takeInfo) {
        console.log(this.state)
        this.setState(defaultForm)
      }
    }

    render() {

        return (
            <div className='form'>
                <form onSubmit={this.takeSubmit} >
                    <div>
                        <input
                            name='name'
                            placeholder='name'
                            value={this.state.name}
                            onChange={this.inputValue}
                        />
                    </div>
                    <div>{this.state.nameError}</div>
                    <div>
                        <input
                            name='email'
                            placeholder='email'
                            value={this.state.email}
                            onChange={this.inputValue}
                        />

                    </div>
                    <div>{this.state.emailError}</div>
                    <div>
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={this.state.password}
                            onChange={this.inputValue}
                        />
                    </div>
                    <div>{this.state.passwordError}</div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default FormPraccy