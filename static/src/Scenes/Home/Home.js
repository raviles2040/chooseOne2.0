import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {

    render() {
      return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <img className="img-fluid rounded imgBanner" alt="Bootstrap Image Preview" src="https://www.acurax.com/wp-content/themes/acuraxsite/images/inner_page_bnr.jpg?x26444" />
                    <h2 className="mt-3 text-left text-primary">
                        Hola traviesos y traviesas
                    </h2>
                    <p className="text-left">
                        ¿Qué somos?
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                        Etiam porta sem malesuada magna mollis euismod. 
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                        Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                    </p>
                    <div className="row">
                        <div className="col-4 text-left" >
                            <h3 className="text-primary">Regístrate</h3>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" src="http://escacsbalears.org/wp-content/uploads/2012/11/Adrian-Ponce.jpg" />
                        </div>
                        <div className="col-4 text-left" >
                            <h3 className="text-primary">Sube tus preguntas</h3>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" src="http://escacsbalears.org/wp-content/uploads/2012/11/Adrian-Ponce.jpg" />
                        </div> 
                        <div className="col-4 text-left" >
                            <h3 className="text-primary">Comienza a jugar</h3>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" src="http://escacsbalears.org/wp-content/uploads/2012/11/Adrian-Ponce.jpg" />
                        </div>  
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
      );
    }
}