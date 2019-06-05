import React, { Component } from 'react'
import axios from 'axios'

class Question extends Component {
    constructor (props) {
        super(props)
        this.state = {
            questions: [],
            index: 0
        }
    }

    componentWillMount () {
        axios.get('http://localhost:3001/api/questions/')
            .then(result => {
                debugger
                console.log(result.data)
                this.setState({
                    questions: result.data
                })
            })
            .catch(error => {

            })
    }

    voteHandler = (e) => {
        let currentTarget = e.target.name
        let opt = e.target.getAttribute('option') === '1' ? 'optionOne': 'optionTwo';
        console.log("TCL: Question -> voteHandler -> opt", opt)
        
        let  questionData = this.state.questions.filter(element => element._id === currentTarget)

        questionData[0][opt].votes = questionData[0][opt].votes + 1;
        axios.put(`http://localhost:3001/api/questions/vote/${currentTarget}/${opt}`)
            .then(
                result => {
                    debugger;
                    this.setState(prevState => ({
                        index: prevState.index +1
                        })
                    )
                }
            )
            .catch(
                error => {

                }
            )

    }

    render () {
        let questions = this.state.questions.map(element => {
            return (
                <div className="container-fluid">
                    <div className="row mb-5 mt-4">
                        <div className="col-md-12">
                            <h1 className="text-center text-primary">
                                {element.question}
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <span>
                                        <p>Votos: {element.optionOne.votes} </p>
                                        <a onClick={this.voteHandler} name={element._id} option="1">
                                            <img className="img-thumbnail img-fluid" alt="Bootstrap Image Preview"  name={element._id} option="1"
                                                 src={'http://localhost:3001/img/' + element.optionOne.image}/>
                                        </a>
                                    </span>
                                </div>
                                <div className="col-md-6">
                                <span>
                                    <p>Votos: {element.optionTwo.votes}</p>
                                    <a  onClick={this.voteHandler}>
                                        <img className="img-thumbnail img-fluid" alt="Bootstrap Image Preview"  name={element._id} option="2"
                                             src={'http://localhost:3001/img/' + element.optionTwo.image}/>
                                    </a>
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {questions[this.state.index]}
            </div>
        )
    }
}

export default Question