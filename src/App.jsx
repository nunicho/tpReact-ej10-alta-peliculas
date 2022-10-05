import './style.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import NuevaPelicula from './components/nuevaPelicula';
import ListaPeliculas from './components/listaPeliculas';
import './App.css'

class App extends Component {
  state ={
    peliculas: []    

  }
    componentDidMount(){
      const peliculasLS = localStorage.getItem('peliculas');
      if(peliculasLS){
          this.setState({
            peliculas : JSON.parse(peliculasLS)
          })
      }
    }


  componentDidUpdate(){
    localStorage.setItem('peliculas', JSON.stringify(this.state.peliculas))
  }

  crearNuevaPelicula = datos => {

    const peliculas = [...this.state.peliculas, datos]



    this.setState({
      peliculas: peliculas
    })
  }


      eliminarPelicula = id =>{
    
          const peliculasActuales = [...this.state.peliculas]

        
        const peliculas = peliculasActuales.filter(pelicula => pelicula.id !== id);

        
        this.setState({
          peliculas
        })

      }

  render(){
    return (
      <div className="container fondoPrincipal">
        <Header
        titulo='Administrador de Películas'
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaPelicula
            crearNuevaPelicula ={this.crearNuevaPelicula}
            />
          </div>

            <div className="mt-5 col-md-10 mx-auto">
            <ListaPeliculas
              peliculas={this.state.peliculas}
              eliminarPelicula={this.eliminarPelicula}
              />
            </div>
        </div>
      </div>   
    );
  }
}

export default App;