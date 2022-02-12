import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
  } from "../types";

  // Crear nuevo producto. Función principal
export  function crearNuevoProductoAction(producto) {
    return(dispatch)    =>  {
        dispatch(nuevoProducto());

        dispatch(agregarProductoExito(producto));
    }
}

export  const nuevoProducto =   ()  =>  ({
    type:   AGREGAR_PRODUCTO
});

export  const agregarProductoExito =   (producto)  =>  ({
    type:   AGREGAR_PRODUCTO_EXITO,
    payload:    producto
});