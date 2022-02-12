import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Crear nuevo producto. Función principal
export  function crearNuevoProductoAction(producto) {
    return(dispatch)    =>  {
        dispatch(nuevoProducto());

        //Insertar en la API
        clienteAxios.post('/librosa', producto)
        .then(respuesta =>  {
            console.log(respuesta);
            dispatch(agregarProductoExito(producto))
        })
        .catch(error    =>{
            console.log(error);
            dispatch(agregarProductoError(error))
        })
        
    }
}

export  const nuevoProducto =   ()  =>  ({
    type:   AGREGAR_PRODUCTO
});

export  const agregarProductoExito =   (producto)  =>  ({
    type:   AGREGAR_PRODUCTO_EXITO,
    payload:    producto
});

export  const agregarProductoError =   (error)  =>  ({
    type:   AGREGAR_PRODUCTO_ERROR,
    payload:    error
});