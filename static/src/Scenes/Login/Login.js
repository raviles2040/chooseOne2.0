import React, { Component } from 'react'
import utils from '../../Components/Utils/utils'
import axios from 'axios'
import { validateAll } from 'indicative'
import { Redirect } from 'react-router-dom'
import { SnackbarProvider, withSnackbar } from 'notistack'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            userData: {},
            errors: {},
            status: false,
            loader: null,
            showLogin: true
        }
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.registerHandler = this.registerHandler.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }

    handleRegisterSubmit = (event) => {
        utils.showLoader(this)
        event.preventDefault()
        //Validating User
        // Take the input data from state
        const data = this.state.userData
        const that = this
        const rules = {
            username: 'required|string',
            email: 'required|email',
            password: 'required|string|min:6|confirmed', // confirmed will check for the password confirmation
        }
        const messages = {
            required: 'This {{ field }} is required.',
            'email.email': 'The email is invalid.',
            'password.confirmed': 'The  password does not match'
        }
        validateAll(data, rules, messages)
            .then(() => {
                this.registerHandler() // If fields are validated then will record user
            })
            .catch(errors => {
                console.log(errors)
                // show errors to user
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                errors.forEach(error => that.props.enqueueSnackbar(error.message, {variant: 'error'}))
                utils.hideLoader(this)
            })
    }

    registerHandler = () => {
        const data = {...this.state.userData}
        axios.post('http://localhost:3001/api/user/', data)
            .then(result => {
                if (result.data === null) {
                    this.setState({
                        loader: null
                    })
                    return this.showMessage('Ha ocurrido un error', 'error')
                }
                this.showMessage('Bievenido ' + result.data.username, 'success')
                this.props.setUserData.setUserData(result.data)
                this.setState({
                    route: <Redirect to="/"/>
                })
            })
            .catch(error => {
                this.setState({
                    loader: null
                })
            })

    }

    showMessage = (message, type) => {
        this.props.enqueueSnackbar(message, {variant: type})
    }

    handleInputChange = (event) => {
        const userData = {...this.state.userData}
        const input = event.target
        userData[input.name] = input.value
        this.setState({userData})
    }

    handleLoginSubmit = (event) => {
        utils.showLoader(this)
        event.preventDefault()
        const data = this.state.userData
        axios.post('http://localhost:3001/api/user/login', data)
            .then(result => {
                    if (result.data === null) {
                        this.setState({
                            loader: null
                        })
                        return this.showMessage('Ha ocurrido un error', 'error')
                    }
                    this.props.setUserData.setUserData(result.data)
                    this.setState({
                        route: <Redirect to="/"/>
                    })
                }
            )
            .catch(error => console.log(error))
    }

    createCountHandler = () => {
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
        }))
    }

    render () {
        const enabled = this.state.status
        const showLogin = (<div className="login">
            <form className="form-signin" onSubmit={this.handleLoginSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <div className="form-grup">
                    <input className="form-control" placeholder="Username" name="username"
                           onChange={this.handleInputChange}/>
                </div>
                <br/>
                <div className="form-grup">
                    <input type="password" className="form-control" placeholder="Password" name="password"
                           onChange={this.handleInputChange}/>
                </div>
                <br/>
                <button className="btn btn-custom btn-lg bg-success  btn-block" type="submit">Log In</button>
                <button className="btn btn-custom btn-lg bg-primary  btn-block" onClick={this.createCountHandler}>Create
                    account
                </button>
                <p className="mt-5 mb-3 text-muted">© 2019-2020</p>
            </form>
        </div>)

        const showRegister = (
            <div className="login">
                <form className="form-signin" onSubmit={this.handleRegisterSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
                    <div className="form-grup">
                        <input className="form-control" placeholder="Username" type="text" name="username"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className="form-grup">
                        <input className="form-control" placeholder="Email" type="text" name="email"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className="form-grup">
                        <input className="form-control" type="password" placeholder="Password" type="password"
                               name="password"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className="form-grup">
                        <input className="form-control" type="password" placeholder="Password (confirm)" type="password"
                               name="password_confirmation"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>

                    <button className="btn btn-custom btn-lg  bg-success  btn-block" disabled={enabled}
                            type="submit">Sign
                        up
                    </button>
                    <button className="btn btn-custom btn-lg bg-primary  btn-block"
                            onClick={this.createCountHandler}>Log in
                        with
                        account
                    </button>
                    <p className="mt-5 mb-3 text-muted">© 2019-2020</p>
                </form>
            </div>)
        return (
            <div id="container">
                {this.state.loader}
                {this.state.route}
                {!this.state.showLogin && showRegister}
                {this.state.showLogin && showLogin}
            </div>
        )
    }
}

const MySceneLogin = withSnackbar(Login)

function IntegrationNotistack (props) {
    return (
        <SnackbarProvider maxSnack={8}>
            <MySceneLogin setUserData={props}/>
        </SnackbarProvider>
    )
}

export default IntegrationNotistack