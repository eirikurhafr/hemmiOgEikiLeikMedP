import React from 'react';

import styles from './NavigationBarLinkWrapper-module.css';

const NavigationBarLinkWrapper = ({ children }) => {
    return (
        <div className="nav-link-wrapper">

            {children}
        </div>
    )
};

export default NavigationBarLinkWrapper;
