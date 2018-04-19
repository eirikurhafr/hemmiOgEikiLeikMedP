import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper.js';

import styles from './NavigationBar-module.css';

const NavigationBar = () => {

		return (

			<div>
				<nav className={styles.navBar}>
                    <NavigationBarLinkWrapper>

						<NavLink
                    		to="/piss"
                    		activeClassName="active"
							className={styles.navLink}>cart</NavLink>

						<NavLink
                    		to="/offers"
                    		activeClassName="active"
							className={styles.navLink}>cart</NavLink>

						<NavLink
                    		to="/menu"
                    		activeClassName="active"
							className={styles.navLink}>cart</NavLink>

						<NavLink
                    		to="/cart"
                    		activeClassName="active"
							className={styles.navLink}>cart</NavLink>

					</NavigationBarLinkWrapper>

				</nav>

			</div>
		)

}

export default NavigationBar;
