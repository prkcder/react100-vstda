import React, { Component } from 'react';
import Header from './components/Header';
import NewTodos from './components/NewTodos';
import ViewTodos from './components/ViewTodos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      todos: [
        {
          id: 1,
          title: "hello",
          completed: false
        },
        {
          id: 2,
          title: "there",
          completed: false
        },
        {
          id: 3,
          title: "you",
          completed: false
        }
      ]
    }
  }



  render() {
    
    return (
      <div className='container'>
        <Header />
        <hr className="white"/>
        <div className="row">
          <NewTodos />
          <ViewTodos todos={this.state.todos} markComplete={this.markComplete} />

        </div>
      </div>
    );
  }
}

export default App;
