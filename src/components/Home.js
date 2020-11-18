import React from 'react';

const Home = (props) => {
	console.warn('home', props);
	return (
		<div>
			<h1>Home Component</h1>
			<div className="cart-wrapper">
				<div className="img-wrapper item">
					<img src="http://fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
				</div>
				<div className="text-wrapper item">
					<span>I-PHONE</span>
					<span>Price :$1000.00</span>
				</div>
				<div className="btn-wrapper item">
					<button
						onClick={() => props.addToCartHandler({ price: 1000, nam: 'iphone11' })}
					>
						Add To Card
					</button>
					<button className="remove-color" onClick={() => props.removeToCartHandler()}>
						Remove To Card
					</button>
				</div>
			</div>
		</div>
	);
};
export default Home;
