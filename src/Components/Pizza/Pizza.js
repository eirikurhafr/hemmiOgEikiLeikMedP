import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { styles } from './Pizza-module.css';

const Pizza = ({pizza}) => {

	const { id, name, price, image } = pizza;
	let str = '/menu/' + id;

	return (
		<div className={styles.pizzaWrapper}> 
			<Link to={str}>

				prump
			</Link>
		</div>
	)
}

Pizza.propTypes = {

	pizza: PropTypes.shape({

		name: PropTypes.string,
		price: PropTypes.number,
		description: PropTypes.string,
		image: PropTypes.string

	})
}

export default Pizza;