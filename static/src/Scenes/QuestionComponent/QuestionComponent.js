import React, { Component } from 'react'
import axios from 'axios'
import FormData from 'form-data'

class QuestionComponent extends Component {
    constructor () {
        super()
        this.state = {
            questionData: {},
            selectedFile: null,
            loaded: 0
        }
    }

    handleInputChange = (event) => {
        const questionData = {...this.state.questionData}
        const input = event.target
        const inputValue = input.type === 'file' ? input.files[0] : input.value
        questionData[input.name] = inputValue
        this.setState({questionData})
    }

    createQuestion = (e) => {
        e.preventDefault()
        debugger
        const data = new FormData()
        const option1 = this.state.questionData.option1
        const option2 = this.state.questionData.option2
        data.append('option1', option1, option1.fileName)
        data.append('option2',option2, option2.fileName )
        axios.post('http://localhost:3001/api/questions', data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
        })
            .then(result => {
                debugger
            })
            .catch(error => {

            })
    }

    render () {
        return (
            <div id="container">
                <div>
                    <h1>Crear pregunta </h1>
                    <div className="form-grup">
                        <input className="form-control" type="password" placeholder="Pregunta" type="text"
                               name="questionTitle"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className="form-grup">
                        <span>Opcion 1</span>
                        <input className="form-control" type="file" placeholder="Password (confirm)"
                               name="option1"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <div className="form-grup">
                        <span>Opcion 2</span>
                        <input className="form-control" type="file" placeholder="Password (confirm)"
                               name="option2"
                               onChange={this.handleInputChange}/>
                    </div>
                    <br/>
                    <button onClick={this.createQuestion} className="btn btn-custom btn-lg bg-primary  btn-block"> Crear
                        pregunta
                    </button>
                </div>
            </div>
        )
    }
}

export default QuestionComponent