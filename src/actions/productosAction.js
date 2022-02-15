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
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR,
  } from "../types";

  import clienteAxios from "../config/axios";
  import Swal from "sweetalert2";

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



// Obtener producto a editar

export  function obtenerProductoAction(id) {
    return(dispatch)    =>  {
        dispatch(obtenerProductoEditar());

        clienteAxios.get(`/libros/${id}`)
        .then(respuesta =>  {
            dispatch(editarProductoExito(respuesta.data))
        })
        .catch(error    =>{
            dispatch(editarProductoError())
        })
        
    }
}

export  const obtenerProductoEditar =   ()  =>  ({
    type:   OBTENER_PRODUCTO_EDITAR,
});

export  const editarProductoExito =   (producto)  =>  ({
    type:   PRODUCTO_EDITAR_EXITO,
    payload:    producto,
});

export  const editarProductoError =   ()  =>  ({
    type:   PRODUCTO_EDITAR_ERROR,
});




// Editar producto

export  function editarProductoAction(producto) {
    return(dispatch)    =>  {
        dispatch(comenzarProductoEditar());

        clienteAxios.put(`/libros/${producto.id}`, producto)
        .then(respuesta =>  {
            dispatch(productoEditadoExito(respuesta.data))

            Swal.fire(
                'Almacenado',
                'El producto se actualizó correctamente',
                'success'
            )
        })
        .catch(error    =>{
            dispatch(productoEditadoError())
        })
        
    }
}

export  const comenzarProductoEditar =   ()  =>  ({
    type:   COMENZAR_EDICION_PRODUCTO,
});

export  const productoEditadoExito =   (producto)  =>  ({
    type:   PRODUCTO_EDITADO_EXITO,
    payload:    producto,
});

export  const productoEditadoError =   ()  =>  ({
    type:   PRODUCTO_EDITADO_ERROR,
});