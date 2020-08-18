import React, { Component } from 'react';

class TodoInput extends Component {

    getElement = (e) => {
        e.preventDefault()
        const element = e.target.firstChild.value
        if (element) {
            this.props.onAdd(element)
            e.target.firstChild.value = ''
        }
        return;
    }

    render() {
        return (
            <form onSubmit={this.getElement}>
                <input type="text"></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default TodoInput;