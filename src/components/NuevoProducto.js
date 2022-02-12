import { useState } from "react";
import React from "react";

// Redux
import { crearNuevoProductoAction } from "../actions/productosAction";
import { useDispatch } from "react-redux";

const NuevoProducto    =   ()  =>  {
    const   [nombre,guardarNombre]  =   useState('');
    const   [precio,guardarPrecio]  =   useState('');

    //Crear nuevo producto
    const   dispatch    =   useDispatch();
    const   agregarProducto = (producto)    => dispatch(crearNuevoProductoAction(producto)) ;

    //Agregar nuevo producto
    const submitNuevoProducto=  e   =>{
        e.preventDefault();

        agregarProducto({
            nombre,
            precio
        });

        //Validar
        if(nombre.trim() === ''  ||  precio.trim()===''){
            console.log("Error en los datos");
            return;
        }

        //Si pasa la validadacion

        //Crear el nuevo producto

        //Redireccionar
    }

    return(
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form   onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro"
                                    value={nombre} 
                                    onChange={e=>guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro" 
                                    value={precio}
                                    onChange={e=>guardarPrecio(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  NuevoProducto;