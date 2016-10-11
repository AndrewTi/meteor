import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <div className="button">
                <a className="link" href={this.props.url}>
                    {this.props.text}
                </a>
            </div>
        );
    };
};