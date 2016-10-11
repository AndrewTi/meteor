import React, { Component } from "react";

import Search from "./search.jsx";
import Post from "./post.jsx";

let posts = [{header:"hello", text: "hello text", comments: {}}];

export default class Body extends Component {

    renderPosts() {
        return posts.map(e => (
            <Post header=e.header text=e.text comments=e.comments/>
        ));
    }

    render() {
        return (
            <div className="body">
                <Search />
                {this.renderPosts()}
            </div>
        );
    }
}