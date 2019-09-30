import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../modules/Login';
import Dashboard from '../modules/Dashboard/';
import store from '../redux';
import { Provider } from 'react-redux'

const AppRouter = () => {
    return (
        <Provider store={store}>
            <Router>

                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />

            </Router>
        </Provider>
    )

}
export default AppRouter;