import React, { Component } from 'react';

class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.status ? 'line-through' : 'none'
        }
    }

    render() {
        const id = this.props.position;
        return (
            <div className='item-list' position={id} style={this.getStyle()}>
                <input onChange={(e) => this.props.onChange(e)} type="checkbox" checked={this.props.todo.status}></input>{this.props.todo.title}
                <button className='delete' onClick={(e) => this.props.onDelete(e)}>x</button>
            </div>
        );
    }
}

export default TodoItem;