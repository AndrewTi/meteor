import React, { Component } from "react";

import Comment from "./comment.jsx";


export default class Post extends Component {

    render() {
        return (
            <div className="post">
                <h1 className="header">{this.props.header}</h1>
                <div className="text">{this.props.text}</div>
                <div className="block-comments">
                    <h2 className="header">Comments</h2>
                    {this.props.comments.map((e) => (
                        <Comment key={e.id} name={e.name} text={e.text}/>
                    ))}
                </div>
            </div>
        );
    }
}