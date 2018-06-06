import React from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/dogs">Dogs</Link>
                    <Link to="/penguins">Penguins</Link>
                </div>
                {this.props.children}
            </React.Fragment>
        );
    }
}