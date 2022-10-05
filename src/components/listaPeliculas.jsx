import React from 'react';
import Pelicula from './pelicula';

const ListaPeliculas = ({peliculas, eliminarPelicula})=>{

    const mensaje = Object.keys(peliculas).length === 0 ? 'No hay películas': 'Administra las películas aquí';
    return (
       <div className="card mt-2 py-5">
           <div className="card-body">
               <h2 className="card-tittle text-center">{mensaje}</h2>
               <div>
               <div className="lista-peliculas row">
                     {peliculas.map(pelicula=>(
                        <Pelicula
                        key={pelicula.id}
                        pelicula={pelicula}
                        eliminarPelicula={eliminarPelicula}/>
                   ))}
               </div>
               </div>
           </div>
       </div>
    )
};

export default ListaPeliculas;