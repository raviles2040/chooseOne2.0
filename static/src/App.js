import React from 'react'
import logo from './logo.svg'
import './App.css'
import Login from './Scenes/Login/Login'
import MenuAppBar from './Components/NavBar/navbar'
import Home from './Scenes/Home/Home'
import QuestionComponent from './Scenes/QuestionComponent/QuestionComponent'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

function App () {
    return (
        <Switch>
          <div className="App">
            <MenuAppBar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/QuestionComponent" component={QuestionComponent}/>
            <Route exact path="/Login" component={Login}/>
          </div>
        </Switch>
    )
}

export default App
