import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Tasks from './Components/Tasks';
import Details from './Components/Details';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Tasks} />
                <Route path="/details" component={Details} />
            </Switch>
        </BrowserRouter>
    );
}
