import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from '../SignIn/SignIn';
import { Dashboard } from '../Dashboard/Dashboard';
import { NotFound } from '../NotFound/NotFound';

export const Home = () => (
    <Switch>
        <Route exact path="/" component={SignIn}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route component={NotFound}></Route>
    </Switch>
); 