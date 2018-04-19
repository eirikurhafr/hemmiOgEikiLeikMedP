import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './Offers.css';

import Pizza from '../Pizza/Pizza.js'

const Offers = ({pizzas}) => {

	return(
		<div className={styles.pizzaList}>

			{pizzas.map(
				p => <Pizza
					key = {p.id}
					pizza = {p}
				/>
			)}
		</div>
	);
};

Offers.propTypes = {
	pizzas: PropTypes.any
};

export default Offers;