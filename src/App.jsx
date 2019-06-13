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
      todosList: []
    }
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  // handleChange(e) {
  //   this.setState({[e.target.name]: e.target.value});
  //   console.log("it was press");
    
  // }



  handleCheck(id) {
      //  console.log("clicked");    
    // if (this.states.todos.completed === true) {
    //     return "line-through" 
    // } else "none"


    this.setState({todosList: this.state.todosList.map((item) => {
      if(item.id == id) {
        item.completed = !item.completed
      }
      return item
    })})

    // let listArr = this.state.todosList;
    // for(var i=0; i<listArr.length; i++) {
    //   if(listArr[i].id == id) {
    //         listArr[i].completed = !listArr[i].completed;
    //       }
    // }
    //   this.setState({todosList: listArr});
}



  handleSubmit(todo, priority) {
    // e.preventDefault();
    
    // if (this.state.addTodo === "") {
    //   alert("??");
    // return false
    // }
    // this.setState({ todo: "", priority: ""});


    // if (todo.length === 0) {
    //   alert('Please enter a To Do');
    //   return;
    // }
    // if (priority === "select") {
    //   alert('Please select a Priority');
    //   return;
    // }

    const newItem = {
      todo: todo,
      priority: priority,
      id: 1 + Math.random(),
      completed: false
    };

    this.state.todosList.push(newItem);
    this.setState({todosList: this.state.todosList});
    
    // const list = [...this.state.todos];
    // list.push(entryTodo);
    // this.setState({list, addTodo: ""});

    // this.setState({
    //   todos: [...this.state.todos, newItem],
    //   addTodo: '',
    //   currPriority: '0'
    // });

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
          <ViewTodos todosList={this.state.todosList} handleCheck={this.handleCheck}/>

        </div>
      </div>
    );
  }
}

export default App;
