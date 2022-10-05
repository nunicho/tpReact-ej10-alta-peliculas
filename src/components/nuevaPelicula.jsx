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

    // CUANDO EL USUARIO ESCRIBE EN LOS INPUTS
       handleChange= (e) =>{
           
           //COLOCAR LO QUE EL USUARIO ESCRIBE EN EL STATE

           this.setState({
               pelicula: {
                   ...this.state.pelicula,
                   [e.target.name] : e.target.value
               }
           })

        }

        // CUANDO EL USUARIO ENVIA EL METODO
        handleSubmit = e => {
            e.preventDefault();

            //EXTRAER LOS VALORES DEL STATE
            const {titulo,genero, fecha, hora, descripcion} = this.state.pelicula;

            //VALIDAR QUE TODOS LOS CAMPOS ESTEN LLENOS

            if (titulo === '' || genero ==='' || fecha=== '' || hora === '' || descripcion === '' )
            {
                this.setState({
                    error:true
                })
           

            //DETENER LA EJECUCION
            return;
        }

        // GENERAR OBJETO CON DATOS

            const nuevaPelicula = {...this.state.pelicula};
            nuevaPelicula.id= uuid();

            //AGREGAR LA CITA AL STATE DE APP
            this.props.crearNuevaPelicula(nuevaPelicula) 

            //COLOCAR EN EL STATE EL STATEINICIALv(pra que se reinicie el formulario cada vez que se envia)
            this.setState({
                ...stateInicial
            })
        }



    render(){

    // EXTRAER VALOR DEL STATE  
    
    const {error}= this.state;

        return(
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Crea una nuevo registro para una película
                    </h2>

                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> ¡¡Todos los campos son obligatorios!!</div> : null}

                    <form
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Titulo de la Pelicula</label>
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
                            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Pelicula"/>

                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaPelicula;