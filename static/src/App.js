import React,{Component} from 'react'
import './App.css'
import Login from './Scenes/Login/Login'
import MenuAppBar from './Components/NavBar/navbar'
import Home from './Scenes/Home/Home'
import QuestionComponent from './Scenes/QuestionComponent/QuestionComponent'
import RandomQuestions from './Scenes/LoadQuestions/RandomQuestions'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Question from './Scenes/Question/Question'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            userData: {
                username:''
            }
        }
    }

    componentWillMount() {
        var userdatajson = localStorage.getItem('userdata');
        userdatajson = JSON.parse(userdatajson);

        if (userdatajson) {
            this.setUserData(userdatajson);
        }

    }

    setUserData = (currentUser) => {
        this.setState({
            userData:currentUser
        })
    };
    getUserData = () => {
        return this.state.userData
    };
    closeSession = (callback) => {
        this.setState({
            userData: {username: ''}
        })
        callback();
        localStorage.removeItem('userdata');
    };
    render() {
        let userIsLoged = this.state.userData.username !== '';
        return (
            <Switch>
                <div className="App">
                    <MenuAppBar userIsLoged={userIsLoged} closeSession={this.closeSession}/>
                    <Route exact path="/" component={Home}/>
                    {!userIsLoged && <Route exact path='/QuestionComponent' component={Home}/>}
                    {userIsLoged && <Route exact path='/QuestionComponent' render={() =>
                        <QuestionComponent getUserData={this.getUserData}/>
                    }/>}
                    {!userIsLoged && <Route exact path='/RandomQuestions' component={Question}/>}
                    {userIsLoged && <Route exact path='/RandomQuestions' render={() =>
                        <Question getUserData={this.getUserData}/>
                    }/>}
                    <Route exact path='/login' render={() =>
                        <Login setUserData={this.setUserData}/>
                    }/>
                </div>
            </Switch>
        )
    }
}

export default App
