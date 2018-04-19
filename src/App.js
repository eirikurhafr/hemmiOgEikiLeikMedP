import React, { Component } from 'react';
import styles from './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div
                className={styles.App}
            >
                <header
                    className={styles.AppHeader}
                >

                    <img
                        src={'http://www.visir.is/i/065102AD6F9E2DB091415EC113C503E41CCFBBB7C4BD3E9679066029F8104AA4_713x0.jpg'}
                        className={styles.AppLogo}
                        alt="logo"
                    />
                </header>

                    <h1
                        className={styles.AppTitle}
                    >
                        Welcome to React
                    </h1>
                <p className={styles.AppIntro}>

                    <NavigationBar/>

                </p>
            </div>
        );
    }
}

export default App;
