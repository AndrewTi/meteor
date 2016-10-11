import React, { Component } from "react";

import Button from "./button.jsx";

export default class Head extends Component {
    getButtons() {
        return [
            {_id: 1, text: "Home", url: "#"},
            {_id: 2, text: "Photo", url: "#"},
            {_id: 3, text: "Contact", url: "#"}
        ]
    }

    renderButton() {
        return this.getButtons().map((e) => (
            <Button key={e._id} text={e.text} url={e.url}/>
        ));
    };

    render() {
        return (
            <div className="menu">
                <div className="buttons">
                    {this.renderButton()}
                </div>
            </div>
        );
    };

}