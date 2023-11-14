/* eslint-disable react/prop-types */
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='cardProducto'>
      
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>Precio $ {precio} </p>
        <p>Cod {id} </p>
        <p>Stock: {stock} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>

    </div>
  )
}

export default Item