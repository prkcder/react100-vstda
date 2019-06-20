import React, { Component } from "react";
import Header from "./components/Header";
import NewTodos from "./components/NewTodos";
import ViewTodos from "./components/ViewTodos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todosList: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(addTodo, selectPriority, id) {
    let copyTodos = this.state.todosList;
    for (let i = 0; i < copyTodos.length; i++) {
      if (copyTodos[i].id == id) {
        copyTodos[i].addTodo = addTodo;
        copyTodos[i].selectPriority = selectPriority;
        copyTodos[i].handleEdit = false;
      }
    }
    this.setState({ todosList: copyTodos });
  }

  handleEditMode(id) {
    let editList = this.state.todosList;
    for (let i = 0; i < editList.length; i++) {
      if (editList[i].id == id) {
        editList[i].handleEdit = !this.state.handleEdit;
      }
    }
    this.setState({ todosList: editList });
  }

  handleDelete(id) {
    const todosList = [...this.state.todosList];
    const updatedList = todosList.filter(item => item.id !== id);
    this.setState({ todosList: updatedList });
  }

  handleCheck(id) {
    this.setState({
      todosList: this.state.todosList.map((item) => {
        if (item.id == id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  }

  handleSubmit(addTodo, selectPriority) {
    if (addTodo.length === 0) {
      alert("Please enter a To Do");
      return;
    }
    if (selectPriority === "select") {
      alert("Please select a Priority");
      return;
    }

    const newItem = {
      addTodo: addTodo,
      selectPriority: selectPriority,
      id: 1 + Math.random(),
      completed: false,
      handleEdit: false
    };

    this.state.todosList.push(newItem);
    this.setState({ todosList: this.state.todosList, addTodo: "", selectPriority: "" });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <div className="row">
          <NewTodos handleSubmit={this.handleSubmit} />
          <ViewTodos
            todosList={this.state.todosList}
            handleCheck={this.handleCheck}
            handleDelete={this.handleDelete}
            handleEditMode={this.handleEditMode}
            handleSave={this.handleSave}
          />
        </div>
      </div>
    );
  }
}

export default App;