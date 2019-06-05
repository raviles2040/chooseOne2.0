import React from 'react';

export default class Home extends React.Component {

    render() {

      return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <img className="img-fluid rounded imgBanner" alt="Bootstrap Image Preview" src="http://www.muftiimran.com/wp-content/uploads/2017/03/Sawaal-Kariye-Aur-Jawaab-Haasil-Kariye-1000x200.png" />
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
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" width= "330" height="330" src="https://i.pinimg.com/originals/26/bb/4f/26bb4f08d445790b80e7a1d90dfb65ab.gif" />
                        </div>
                        <div className="col-4 text-left" >
                            <h3 className="text-primary">Sube tus preguntas</h3>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" width= "330" height="330" src="https://media.giphy.com/media/GZd8nPH3TcNSU/giphy.gif" />
                        </div> 
                        <div className="col-4 text-left" >
                            <h3 className="text-primary">Comienza a jugar</h3>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                            <img className="img-fluid rounded img-thumbnail" alt="Bootstrap Image Preview" width= "330" height="330" src="https://blog.socialgest.net/wp-content/uploads/2017/07/SOCIALGEST-GIF-SOCIALGEST-1.gif" />
                        </div>  
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
      );
    }
}