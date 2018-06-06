import React from 'react';
import Untitled from './Untitled.png';

export default class Penguins extends React.Component {
    render() {
        return (
            <div className="center">
                <img 
                src={Untitled}
                alt="penguins"
                />
            </div>
        );
    }
}