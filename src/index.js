import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Untitled from './animals/Untitled.png';
import BaseLayout from './BaseLayout';

const homeSrc = "https://www.panamacitybeachhomesforsale.com/wp-content/uploads/2016/12/House_Cleaning_service_Great_falls_Virginia.jpg";
const dogSrc = "http://cdn-img.health.com/sites/default/files/styles/large_16_9/public/styles/main/public/gettyimages-522881398.jpg?itok=0g33xDwx";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route 
                exact path="/" 
                render={props => <BaseLayout {...props} alt="home" src={homeSrc} /> }
            />
            <Route 
                path="/dogs" 
                render={props => <BaseLayout {...props} alt="puppies" src={dogSrc} /> } 
            />
            <Route 
                path="/penguins" 
                render={props => <BaseLayout {...props} alt="penguins" src={Untitled} /> }
            />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
