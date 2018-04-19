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
                    		to="/"
                    		activeClassName={styles.navLinkActive}
							className={styles.navLink}>???
						</NavLink>

						<NavLink
                    		to="/menu"
                    		activeClassName={styles.navLinkActive}
							className={styles.navLink}>menu
						</NavLink>

						<NavLink
                    		to="/cart"
                    		activeClassName={styles.navLinkActive}
							className={styles.navLink}>cart
						</NavLink>

					</NavigationBarLinkWrapper>

				</nav>

			</div>
		)
}

export default NavigationBar;
