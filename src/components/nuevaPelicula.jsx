import React, {Component} from 'react';
import uuid from 'react-uuid';


const stateInicial = {
    pelicula:{
        titulo:'',
        genero:'',
        fecha:'',
        hora:'',
        descripcion:''
    },
    error:false
}



class NuevaPelicula extends Component {
    state={  ...stateInicial    }


       handleChange= (e) =>{
           
 

           this.setState({
               pelicula: {
                   ...this.state.pelicula,
                   [e.target.name] : e.target.value
               }
           })

        }

   
        handleSubmit = e => {
            e.preventDefault();

           
            const {titulo,genero, fecha, hora, descripcion} = this.state.pelicula;

       

            if (titulo === '' || genero ==='' || fecha=== '' || hora === '' || descripcion === '' )
            {
                this.setState({
                    error:true
                })
           

         
            return;
        }

  

            const nuevaPelicula = {...this.state.pelicula};
            nuevaPelicula.id= uuid();

       
            this.props.crearNuevaPelicula(nuevaPelicula) 

          
            this.setState({
                ...stateInicial
            })
        }



    render(){


    
    const {error}= this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Crea una nuevo registro para una película
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> ¡Completar todos los campos!</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Título de la Película</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Título de la película"
                                    name="titulo"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.titulo}
                                    />
                            </div>
                        </div>

                        
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Género</label>
                            <div className="col-sm-8 col-lg-10">
                                <select 
                                    type="text"
                                    className="form-control"
                                    placeholder="Genero de la peli"
                                    name="genero"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.genero}
                                    >
                                        <option value=''>--Seleccionar género--</option>
                                        <option value='comedia'>Comedia</option>
                                        <option value='drama'>Drama</option>
                                        <option value='infantil'>Infantil</option>
                                        </select>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha de estreno</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.fecha}
                                    />
                            </div>
                        
                            <label className="col-sm-4 col-lg-2 col-form-label">Duración</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.hora}
                                    />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Descripción</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingresa una descripción"
                                    name="descripcion"
                                    onChange={this.handleChange}
                                    value={this.state.pelicula.descripcion}
                                    >
                                </textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <input type="submit" className="py-3 mt-2 btn btn-info btn-block" value="Agregar una Película"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaPelicula;