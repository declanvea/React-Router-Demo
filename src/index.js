import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dogs from './animals/dogs';
import Penguins from './animals/penguins';
import BaseLayout from './BaseLayout';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <BaseLayout>
                <Route exact path="/" component={App} />
                <Route path="/dogs" component={Dogs} />
                <Route path="/penguins" component={Penguins} />
            </BaseLayout>
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
