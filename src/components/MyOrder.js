import React, { useContext } from 'react';
import OrderItem from './OrderItem';
import AppContext from '../context/AppContext';
import '../assets/css/MyOrder.css';
import arrow from '../assets/images/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">Mi orden</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, i) => (
					<OrderItem product={product} key={`orderItem-${i}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
