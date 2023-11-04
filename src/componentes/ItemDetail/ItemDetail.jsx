/* eslint-disable react/prop-types */
import { useState ,useContext} from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import {CarritoContext} from '../../context/CarritoContext';


const ItemDetail = ({id, nombre, stock, precio, img}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad)=> {

    setAgregarCantidad(cantidad);
    //console.log('Productos agregados ' + cantidad);
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad)
  }

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>


        {
          agregarCantidad > 0 ? (<Link to="/cart" >Terminar Compra</Link>) : ( <Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} /> )
        }

    </div>

  )
}

export default ItemDetail