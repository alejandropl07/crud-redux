import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO_ERROR,
    ELIMINAR_PRODUCTO_EXITO,
    OBTENER_PRODUCTO_ELIMINAR,
  } from "../types";

  import clienteAxios from "../config/axios";

  // Crear nuevo producto. Función principal
export  function crearNuevoProductoAction(producto) {
    return(dispatch)    =>  {
        dispatch(nuevoProducto());

        //Insertar en la API
        clienteAxios.post('/libros', producto)
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


export  function obtenerProductosAction() {
    return(dispatch)    =>  {
        dispatch(obtenerProductosComienzo());

        //Consultar la API
        clienteAxios.get('/libros')
        .then(respuesta =>  {
            dispatch(descargaProductosExito(respuesta.data))
        })
        .catch(error    =>{
            dispatch(descargaProductosError())
        })
        
    }
}


export  const obtenerProductosComienzo =   ()  =>  ({
    type:   COMENZAR_DESCARGA_PRODUCTOS,
});

export  const descargaProductosExito =   (productos)  =>  ({
    type:   DESCARGA_PRODUCTOS_EXITO,
    payload:    productos,
});

export  const descargaProductosError =   ()  =>  ({
    type:   DESCARGA_PRODUCTOS_ERROR,
});


export  function eliminarProductoAction(id) {
    return(dispatch)    =>  {
        dispatch(obtenerProductoEliminar());

        //Eliminar en la API
        clienteAxios.delete(`/libros/${id}`)
        .then(respuesta =>  {
            dispatch(eliminarProductoExito(id))
        })
        .catch(error    =>{
            dispatch(eliminarProductoError())
        })
        
    }
}

export  const obtenerProductoEliminar =   ()  =>  ({
    type:   OBTENER_PRODUCTO_ELIMINAR,
});

export  const eliminarProductoExito =   (id)  =>  ({
    type:   ELIMINAR_PRODUCTO_EXITO,
    payload:    id,
});

export  const eliminarProductoError =   ()  =>  ({
    type:   ELIMINAR_PRODUCTO_ERROR,
});