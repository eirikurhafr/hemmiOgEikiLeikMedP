import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Pizza-module.css';

const Pizza = ({pizza}) => {

	const { id, name, price, image } = pizza;
	let str = '/menu/' + id;

	return (
		<div> 
			<Link to={str}>
				<div className="div">
					<img 
						className={styles.AppLogo}
						src={image} 
					/>
					<div className="div">{name}</div>
					<div className="div">{price}</div>
				</div>
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