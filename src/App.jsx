import './style.css'
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import NuevaPelicula from './components/nuevaPelicula';
import ListaPeliculas from './components/listaPeliculas';

class App extends Component {
  state ={
    peliculas: []    

  }

  //CUANDO LA APLICACION CARGA
    componentDidMount(){
      const peliculasLS = localStorage.getItem('peliculas');
      if(peliculasLS){
          this.setState({
            peliculas : JSON.parse(peliculasLS)
          })
      }
    }

  // CUANDO ELEMINAMOS O AGREGAMOS UNA NUEVA CITA

  componentDidUpdate(){
    localStorage.setItem('peliculas', JSON.stringify(this.state.peliculas))
  }

  crearNuevaPelicula = datos => {
    //COPIAR EL STATE ACTUAL
    const peliculas = [...this.state.peliculas, datos]

    // AGREGAR EL NUEVO STATE

    this.setState({
      peliculas: peliculas
    })
  }

    //ELIMINA LAS CITAS DEL STATE
      eliminarPelicula = id =>{
        //HACER UNA COPIA DEL STATE
          const peliculasActuales = [...this.state.peliculas]

        //UTILIZAR FILTER PARA SACAR EL ELEMENTO ID DEL ARRAY
        const peliculas = peliculasActuales.filter(pelicula => pelicula.id !== id);

        //ACTUALIZAR EL STATE
        this.setState({
          peliculas
        })

      }

  render(){
    return (
      <div className="container">
        <Header
        titulo='Administrador de Peliculas'
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