import React, { Component } from "react";


export default class Comment extends Component {

    changeText(event) {
        this.state({ text : event.target.value })
    }

    changeName(event) {
        this.state({ name : event.target.value })
    }

    sendComment(id) {
        posts.map(e => {
            if(e._id == id) e.comments.push([this.state.name, this.state.text])
        })
    }

    render() {
        return (
            <div className="block-wrComment">
                <input type="text" className="inp-text" onChange={this.changeName}/>
                <input type="text" className="inp-text" onChange={this.changeText}/>
                <div className="button" onClick={this.sendComment(this.props._id)}></div>
            </div>
        );
    }
}