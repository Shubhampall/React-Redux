import { Add_To_Cart, Remove_To_Cart } from '../Constants';

export const addToCart = (data) => {
	console.warn(data);
	return {
		type: Add_To_Cart,
		data: data,
	};
};

export const removeToCart = () => {
	console.warn('Action');
	return {
		type: Remove_To_Cart,
	};
};
