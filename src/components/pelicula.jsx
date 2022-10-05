import React from 'react';


const Pelicula = ({pelicula, eliminarPelicula}) => (
    <div className="media mt-3 col-12 col-md-4 col-lg-3 border">
        <div className="media-body">
            <h3 className="mt-0 tituloPelicula">{pelicula.titulo}</h3>
            <p className="card-text"><span>Genero:</span>{pelicula.genero}</p>
            <p className="card-text"><span>Fecha de estreno:</span>{pelicula.fecha}</p>
            <p className="card-text"><span>Duración:</span>{pelicula.hora}</p>
            <p className="card-text"><span>Sintomas</span></p>
            <p className="card-text">{pelicula.descripcion}</p>

            <button
            className="btn btn-danger"
            onClick={()=>eliminarPelicula(pelicula.id)}>Borrar &times;</button>
            
        </div>
    </div>

);

export default Pelicula;