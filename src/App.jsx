import React, { Component } from 'react';
import Header from './components/Header';
import NewTodos from './components/NewTodos';
import ViewTodos from './components/ViewTodos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      // addTodo: "",
      // selectPriority: "Select a Priority",
      todos: []
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   this.setState({[e.target.name]: e.target.value});
  //   console.log("it was press");
    
  // }


  handleSubmit(todo, priority) {
    let addTodo = {
      todo: todo,
      priority: priority,
      id: 1 + Math.random(),
      completed: false
    };

    this.state.todos.push(addTodo);
    this.setState({todos: this.state.todos});
    

    // event.preventDefault();
    // if(this.state.addTodo===""){
    //   alert("Add a ToDo before adding to the list");
    //   return false
    // } 



    // const addTodo = {
    //   id: 1,
    //   title: this.props.addTodo,
    //   completed: false
    // };
    // const todos = [...this.state.todos];
    // todos.push(addTodo);
    // this.setState({todos, addTodo: "", selectPriority: ""});
    console.log("clciked");
  }

  render() {
    
    return (
      <div className='container'>
        <Header />
        <hr />
        <div className="row">
          <NewTodos handleSubmit={this.handleSubmit}  />
          <ViewTodos todos={this.state.todos} />

        </div>
      </div>
    );
  }
}

export default App;
