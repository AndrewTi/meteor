import React, { Component } from "react";


export default class Comment extends Component {

    render() {
        return (
            <div className="Comment">
                <h1 className="header">{this.props.name}</h1>
                <div className="text">{this.props.comment}</div>
            </div>
        );
    }
};