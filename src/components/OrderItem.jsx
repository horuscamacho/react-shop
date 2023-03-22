import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png'
import AppContext from "@context/AppContext";
const OrderItem = ({product, indexValue}) => {
	const { removeFromCart } = useContext(AppContext)
	const handleRemove = (item, index) => {
		removeFromCart(item, index);
	};
	return (

		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price},00</p>
			<img
				onClick={() => handleRemove(product, indexValue)}
				src={close}
				alt="close"
			/>
		</div>
	);
}

export default OrderItem;
