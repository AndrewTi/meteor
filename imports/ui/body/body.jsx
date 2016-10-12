import React, { Component, PropTypes } from "react";
import { createContainer } from 'meteor/react-meteor-data';

import Search from "./search.jsx";
import Post from "./post.jsx";
import Posts from "../../data/post";

export default class Body extends Component {

    render() {
        return (
            <div className="body">
                <Search />
                <div className="block-post">
                    <Post key="1" header="Hello" text="Lorem ipsum Lorem ipsum Lorem ipsum" comments={[{id: 1, name: "Andrew", text: "lorem"},{id: 2, name: "Andrew", text: "lorem"}]}/>
                    <Post key="2" header="Hello" text="Lorem ipsum Lorem ipsum Lorem ipsum" comments={[{id: 1, name: "Andrew", text: "lorem"},{id: 2, name: "Andrew", text: "lorem"}]}/>
                </div>
            </div>
        );
    }
}