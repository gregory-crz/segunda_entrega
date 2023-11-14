/* eslint-disable react/prop-types */
import { useState ,useContext} from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import {CarritoContext} from '../../context/CarritoContext';


const ItemDetail = ({id, nombre, stock, precio, img, desc}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad)=> {

    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio,desc};
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='contenedorItem'>
        <h2> {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p> {desc} </p>

        {
          agregarCantidad > 0 ? (<Link to="/cart" >Terminar Compra</Link>) : ( <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} /> )
        }


    </div>

  )
}

export default ItemDetail