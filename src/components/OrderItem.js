import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../assets/css/OrderItem.css';
import cartuchera from '../assets/images/cartuchera.jpg'
import close from '../assets/images/icon_close.png'

const OrderItem = ({product}) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={cartuchera} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img className="cerrandoProd" src={close} alt="close" onClick={() => handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
