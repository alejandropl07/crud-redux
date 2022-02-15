import React, {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

import {useDispatch, useSelector}    from    "react-redux";
import {obtenerProductoAction, editarProductoAction}  from "../actions/productosAction";
import { validarFormularioAction, validacionExito, validacionError } from "../actions/validacionAction";

import { useParams } from "react-router-dom";

const EditarProducto    =   ()  =>  {
    const nombreRef =   useRef('');
    const precioRef =   useRef('');

    const dispatch  =   useDispatch();

    const navigate  =   useNavigate();

    const editarProducto    =   (producto)  =>  dispatch(editarProductoAction(producto));

    const   validarFormulario = ()    => dispatch(validarFormularioAction()) ;
    const   exitoValidacion = ()    => dispatch(validacionExito()) ;
    const   errorValidacion = ()    => dispatch(validacionError()) ;

    const params =   useParams();
    const id  = params.id;

    useEffect(()    =>  {
        dispatch(obtenerProductoAction(id));
    },[dispatch,id]);

    // Acceder al state
    const producto = useSelector((state) =>  state.productos.producto); 
    const error = useSelector((state) =>  state.productos.error); 

    if(!producto)   return 'Cargando...';

    const   submitEditarProducto    =   e   =>  {
        e.preventDefault();
        // Validar formulario
        validarFormulario();

        if(nombreRef.current.value.trim() === ''  ||  precioRef.current.value.trim()===''){
            errorValidacion();
            return;
        }

        // Si pasa la validacion
        exitoValidacion();

        //Guardar cambios
        editarProducto(
            {
                id:id,
                nombre:nombreRef.current.value,
                precio:precioRef.current.value,
            }
        );

        //Redireccionar
        navigate('/');
    }

    return(
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Editar Producto</h2>
                    <form
                    onSubmit={submitEditarProducto}>
                        <div className="form-group">
                            <label>Titulo</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Titulo"
                                defaultValue={producto.nombre}
                                ref={nombreRef}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Precio" 
                                defaultValue={producto.precio}
                                ref={precioRef}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                    </form>
                    {error  ? <div  className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div>  :null}
                </div>
            </div>
        </div>
    </div>
    );
}

export default  EditarProducto;