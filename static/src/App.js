import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Scenes/Login/Login'
import QuestionComponent from './Scenes/QuestionComponent/QuestionComponent'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App () {
    return (
        <Router>
            <div className="App">
                <Route path="/QuestionComponent" component={QuestionComponent}/>
                <Route path="/Login" component={Login}/>
            </div>
        </Router>
    )
}

export default App
