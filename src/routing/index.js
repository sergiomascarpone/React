import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../modules/Login';
import Dashboard from '../modules/Dashboard/';

const AppRouter = () => {
    return (
        <Router>

            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={Dashboard} />

        </Router>
    )

}
export default AppRouter;