import React, {createRef} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart/Cart';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path = '/Login' component={Login} />
                    <Route exact path = '/SignUp' component={SignUp} />
                    <Route exact path = '/Cart' component={Cart} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;