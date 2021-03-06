import React, { Component } from 'react';
import axios from 'axios';
import {SnackbarProvider, withSnackbar} from "notistack";

class QuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.state = {
            question: '',
            title1: '',
            title2: '',
            img1: <img alt="" height="320" width="300" id="img1" src="https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>,
            img2: <img alt="" height="320" width="300" id="img2" src="https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>,
            votes: 0,
            imgs: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

submitHandle = (e)=>{
    e.preventDefault();
    const data = {
        question: this.state.question,
        optionOne: {
            title: this.state.title1,
            image: this.state.img1.props.src,
            votes: this.state.votes
        },
        optionTwo: {
            title: this.state.title2,
            image: this.state.img2.props.src,
            votes: this.state.votes
        },
        createdBy: this.setUserData.props.getUserData()._id
    }
    axios.post('http://localhost:3001/api/questions', data)
        .then(res => {
            console.log(res);  
           
            this.saveImage('opt1', res.data._id,this.state.imgs[0])
            this.saveImage('opt2', res.data._id, this.state.imgs[1])
            this.setState({
                question: '',
                title1: '',
                title2: '',
                img1: <img alt="" height="320" width="300" id="img1" src="https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>,
                img2: <img alt="" height="320" width="300" id="img2" src="https://www.grandjunctionmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"/>,
                votes: 0
            });
            this.showMessage("Se ha creado la pregunta de manera correcta", 'success');
        })
        .catch(err => {
            this.showMessage("Ha ocurrido un error", 'error');
        console.log(err);  
    });
};

saveImage = (option, id,file) => {
    const url = `http://localhost:3001/api/questions/img/${id}/${option}`;
   
    const formData = new FormData();
    formData.append('file',file)
    axios.put(url, formData)
    .then(result => {
       
    })
    .catch(error => {
       
    })
}

handleChange(e) {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
}

showMessage = (message, type) => {
    this.props.enqueueSnackbar(message, {variant: type})
}

readImage = e => {
    const that = this;
    if (e.target.files[0]) {
        var reader = new FileReader();
        const imgName = e.target.name;

        reader.onload = function (e) {
            that.setState({
                [imgName]: <img  alt="" height="320" width="300" id={imgName} src={e.target.result}/>
            })
        };

        reader.readAsDataURL(e.target.files[0]);
        const imgs = [...this.state.imgs]
        imgs.push(e.target.files[0])
        this.setState({
            imgs
        })
    }
}



    render () {
        return (
            <div className="container-fluid">
                <form onSubmit={this.submitHandle}>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">

                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <h3 className="text-left">Inserta una pregunta</h3>
                                        <input type="text" className="form-control" id="questionText" placeholder="Inserta tu pregunta" name="question" 
                                        onChange={this.handleChange} value={this.state.question}/>
                                    </div> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <h3 className="text-center">Opción 1</h3>

                                    <div class="form-group">
                                        <h4 className="text-left">Título</h4>
                                        <input type="text" className="form-control" placeholder="Opción 1"
                                        name="title1" onChange={this.handleChange} value={this.state.title1}/>
                                    </div>

                                    <div className="image-upload">
                                        <label htmlFor="file-input">{this.state.img1}</label>
                                        <input id="file-input" onChange={this.readImage} name={"img1"} type="file"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <h3 className="text-center">Opción 2</h3>

                                    <div class="form-group">
                                        <h4 className="text-left">Título</h4>
                                        <input type="text" className="form-control" placeholder="Opción 2"
                                        name="title2" onChange={this.handleChange} value={this.state.title2}/>
                                    </div>

                                    <div className="image-upload">
                                        <label htmlFor="file-input1">{this.state.img2}</label>
                                        <input id="file-input1" onChange={this.readImage} name={"img2"} type="file"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary btn-lg btn-block mb-3" >Enviar pregunta</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </form>
            </div>
        )
    }
}




const MySceneQuestion = withSnackbar(QuestionComponent)

function IntegrationNotistack (props) {
    return (
        <SnackbarProvider maxSnack={8}>
            <MySceneQuestion setUserData={props}/>
        </SnackbarProvider>
    )
}

export default IntegrationNotistack