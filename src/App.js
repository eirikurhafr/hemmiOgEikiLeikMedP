import React, { Component } from 'react';
import styles from './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import Menu from './Components/Menu/Menu.js';
import Cart from './Components/Cart/Cart.js';
import Pizza from './Components/Pizza/Pizza.js'
import PizzaDetail from './Components/PizzaDetail/PizzaDetail.js';
import Offers from './Components/Offers/Offers.js';

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

                    <Switch>

                        <Route
                            path="/menu/:pizzaId"
                            component={PizzaDetail}
                        />
                        <Route
                            path="/menu"
                            component={Menu}
                        />
                        <Route
                            path="/cart"
                            component={Cart}
                        />

                    </Switch>

                </p>
            </div>
        );
    }
}

export default App;
