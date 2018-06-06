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
                <div className="center">
                    <img src={this.props.src} alt={this.props.alt} />
                </div>
            </React.Fragment>
        );
    }
}