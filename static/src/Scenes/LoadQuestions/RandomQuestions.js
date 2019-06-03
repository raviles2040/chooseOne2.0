import React from 'react';

export default class RandomQuestions extends React.Component {

    render() {
      return (
        <div className="container-fluid">
            <div className="row mb-5 mt-4">
                <div className="col-md-12">
                    <h1 className="text-center text-primary">
                        ¿Qué Ponsesito prefieres?
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-thumbnail img-fluid" alt="Bootstrap Image Preview" src="http://www.winterchess.com/fotos/jugadores/90-ponce.jpg" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-thumbnail img-fluid" alt="Bootstrap Image Preview" src="http://www.winterchess.com/fotos/jugadores/97-ponce.jpg" />
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
      );
    }
}