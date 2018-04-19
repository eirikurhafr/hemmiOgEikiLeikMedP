import React from 'react';
import { connect } from 'react-redux';

import styles from './Menu-module.css';

import { getAllPizzas } from '../../Actions/pizzaActions'

import Pizza from '../Pizza/Pizza.js';
import Offers from '../Offers/Offers.js'

class Menu extends React.Component {

	render() {		
		return (
			
			<div>
				<Offers
					pizzas = {getAllPizzas().payload}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		pizza: state.pizza
	}
}

export default connect(mapStateToProps, { getAllPizzas }) (Menu);