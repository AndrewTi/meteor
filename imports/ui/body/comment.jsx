import React, { Component } from "react";


export default class Comment extends Component {

    render() {
        return (
            <div className="Comment">
                <h3 className="header">{this.props.name}</h3>
                <div className="text">{this.props.text}</div>
            </div>
        );
    }
};