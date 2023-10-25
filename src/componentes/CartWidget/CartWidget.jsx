import './CartWidget.css';

const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src="./img/carrito.png" alt="Carrito de compras" />
        <strong className='numeroDeCompras' >7</strong>
    </div>
  )
}

export default CartWidget