import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { eliminarProductoAction } from "../actions/productosAction";

const Producto  =   ({producto})  =>{
    const dispatch  = useDispatch();

    const confirmarEliminarProducto = (id)  =>  {
        // Confirmacion de Sweet Alert

        Swal.fire({
            title: 'Está seguro?',
            text: "No podrá revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado.',
                'success'
              )
            console.log(id);
            dispatch(eliminarProductoAction(id));
            }
          })

        
    }

    return(
        <tr>
            <td>{producto.nombre}</td>
            <td>   <span    className="font-weight-bold">$ {producto.precio}</span></td>
            <td className="acciones">
                <Link   to={`/productos/editar/${producto.id}`} className="btn btn-primary mr-2">Editar</Link>
                <button className="btn btn-danger"
                onClick={() => confirmarEliminarProducto(producto.id)}>
                    Eliminar
                    </button>
                </td>
        </tr>
    );
}

export default Producto;