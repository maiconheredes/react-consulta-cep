import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class AppBrowserRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                </Switch>
            </BrowserRouter>
        );
    };
}

export default AppBrowserRouter;
