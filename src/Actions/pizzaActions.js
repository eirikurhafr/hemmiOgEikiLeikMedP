import { GET_ALL_PIZZAS, GET_PIZZA_DETAILS } from '../Constants/pizzaConstants';

import fetch from 'isomorphic-fetch';

import jsonFile from './pizza.json';

export const getAllPizzas = () => {

	console.log(jsonFile.menu);

	return {
		type: GET_ALL_PIZZAS,
		payload: jsonFile.menu
	}
}

export const getPizzaDetails = (id) => {
	let str = 'http://localhost:3500/api/pizzas/' + id;
	return dispatch => fetch(str).then(json => json.json()).then(data => dispatch(getPizzaDetailsSuccess(data)));
}							//líklega nota template literals hér ^

const getPizzaDetailsSuccess = (data) => {
	return {
		type: GET_PIZZA_DETAILS,
		payload: data
	}
}