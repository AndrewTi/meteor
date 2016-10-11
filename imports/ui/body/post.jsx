import React, { Component } from "react";

import Comment from "./comment";


export default class Post extends Component {

    renderComments(data) {
        return data.map((e) => (
            <Comment name={e.name} text={e.text}/>
        ));
    };


    render() {
        return (
            <div className="post">
                <h1 className="header">{this.props.header}</h1>
                <div className="text">{this.props.text}</div>
                <div className="comments">
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}