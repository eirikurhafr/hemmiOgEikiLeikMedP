import { GET_ALL_PIZZAS, GET_PIZZA_DETAILS } from '../Constants/pizzaConstants';

import fetch from 'isomorphic-fetch';


const allPizzas = [
		{ "id": 1, "name": "Senior Salsa", "description": "Pizza with pepperoni, salsa and chili", "price": 1350, "image": "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 2, "name": "Chilanoz", "description": "Pizza with pepperoni, jalapeno, cream cheese, mushrooms and black pepper", "price": 1450, "image": "https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 3, "name": "Mojo dojo", "description": "Pizza with pepperoni, bananas and chili", "price": 1300, "image": "https://www.dominos.is/media/1067/media-6920-festival1.png?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 4, "name": "Shrooms", "description": "Pizza with pepperoni and mushrooms", "price": 1200, "image": "https://www.dominos.is/media/1038/media-6891-caliente0.png?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 5, "name": "Mikado", "description": "Pizza with ham and anchovies", "price": 1000, "image": "https://www.dominos.is/media/1098/media-6951-dominos_surprise.png?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 6, "name": "Hayao Miyazaki!", "description": "Pizza with double pepperoni and double 'love' cheese", "price": 1500, "image": "https://www.dominos.is/media/1003/media-6856-prima.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 7, "name": "Tycoon", "description": "Pizza with ham and pineapple", "price": 1200, "image": "https://www.dominos.is/media/1111/media-6964-texas_bbq.png?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 8, "name": "Cheese Delight!", "description": "Pizza with mozzarella, cheddar, cream cheese, pepper cheese and strawberry jam", "price": 2000, "image": "https://www.dominos.is/media/1006/media-6859-eldorado.jpg?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 9, "name": "Chicago", "description": "Pizza with pepperoni and bacon", "price": 1200, "image": "https://www.dominos.is/media/1119/media-6972-meetandcheese.png?width=400&format=jpg&quality=50&bgcolor=fff" },
		{ "id": 10, "name": "El Mariachi", "description": "Pizza with salami, tabasco and tequila on the side!", "price": 2150, "image": "https://www.dominos.is/media/1096/media-6949-dominos_deluxe.png?width=400&format=jpg&quality=50&bgcolor=fff" }
];

export const getAllPizzas = (pizzas) => {

	return {
		type: GET_ALL_PIZZAS,
		payload: allPizzas
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