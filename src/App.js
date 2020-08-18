import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem';
import './App.css';

class App extends Component {
  state = {
    item: '',
    todos: JSON.parse(window.localStorage.getItem('data')) || []
  }

  saveLocalStorage() {
    const todos = this.state.todos
    window.localStorage.setItem('data', JSON.stringify(todos))
  }

  checkElement = (e) => {
    const id = Number(e.target.parentElement.getAttribute('position'))
    const todos = this.state.todos.map((data, index) => {
      if (id === index) {
        data.status = !data.status
      }
      return data;
    })
    this.setState({ todos })
    this.saveLocalStorage()
  }

  addElement = (element) => {
    const title = { title: element, status: false }
    const todos = [...this.state.todos, title]
    this.setState({ todos })
    this.saveLocalStorage()
  }

  removeElement = (e) => {
    const id = e.target.parentElement.getAttribute('position')
    const to = this.state.todos.splice(id, 1);
    const todos = this.state.todos.filter(todo => todo !== to)
    this.setState({ todos })
    this.saveLocalStorage()
  }

  render() {
    return (
      <div className="App">
        <TodoInput onAdd={this.addElement} item={this.state.item} state={this.state} />
        {this.state.todos.map((todo, index) => (
          <TodoItem
            position={index}
            onChange={this.checkElement}
            onDelete={this.removeElement}
            state={this.state}
            todo={todo}
            key={index + 1} />
        ))}
      </div>
    );
  }
}

export default App;
