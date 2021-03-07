import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';

const Refresh = () => {
    localStorage.clear();
    sessionStorage.clear();
    function shopButton() {
        return(
        <Router>
            <Switch>
                <Route path="/shop">
                    <Shop></Shop>
                </Route>
            </Switch>
        </Router>
        )
    }
    const style = {
        fontSize: '20px',
        color: 'white',
        textDecoration: 'none',
        padding: '10px'
    }
    return (
        <div>

            <div style={{ textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>All things refreshed.<br />Wanna Go to the shop ?</h1>
                <button className='button'> <Link to="/shop" style={style}> Shop </Link></button>
            </div>

        </div>
    );
};

export default Refresh;