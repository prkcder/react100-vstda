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

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

handleSave(addTodo, selectPriority, id) {
  console.log("saved");

  let copyTodos = this.state.todosList;
  for (let i = 0; i < copyTodos.length; i++) {
    if (copyTodos[i].id == id) {
      copyTodos[i].addTodo = addTodo;
      copyTodos[i].selectPriority = selectPriority;
      copyTodos[i].handleEdit= false;
    }
  }
  
  this.setState({ todosList: copyTodos });
}


handleEditMode(id) {

  // this.setState({handleEdit: !this.state.handleEdit});
  let editList = this.state.todosList;
  for (let i=0; i<editList.length; i++){
      if(editList[i].id==id){
        // editList[i].addTodo = this.state.editedTodo;
        // editList[i].selectPriority = this.state.editedPriority;
        editList[i].handleEdit= !this.state.handleEdit;
      }
  }
 
  this.setState({ todosList: editList});

  // console.log(todosList);
}



handleDelete(id) {
  const todosList = [...this.state.todosList];
  const updatedList = todosList.filter(item => item.id !== id);
  this.setState({todosList: updatedList});
}


  handleCheck(id) {
    this.setState({todosList: this.state.todosList.map((item) => {
      if(item.id == id) {
        item.completed = !item.completed
      }
      return item
    })});
}



  handleSubmit(addTodo, selectPriority) {
    // e.preventDefault();
    
    // if (this.state.addTodo === "") {
    //   alert("??");
    // return false
    // }
    // this.setState({ todo: "", priority: ""});


    if (addTodo.length === 0) {
      alert('Please enter a To Do');
      return;
    }
    if (selectPriority === "select") {
      alert('Please select a Priority');
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
          <ViewTodos todosList={this.state.todosList} 
          handleCheck={this.handleCheck}
          handleDelete={this.handleDelete}
          handleEditMode={this.handleEditMode}  
          handleSave={this.handleSave}/>

        </div>
      </div>
    );
  }
}

export default App;
























// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state= {
//       // addTodo: "",
//       // selectPriority: "Select a Priority",
//       todosList: []
//     }

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleCheck = this.handleCheck.bind(this);
//     // this.handleDelete = this.handleDelete.bind(this);
//     // this.handleEdit = this.handleEdit.bind(this);
//     this.handleSave =this.handleSave.bind(this);
//   }

// handleSave(addTodo, selectPriority, id) {
//   console.log("saved");

//   let copyTodos = this.state.addTodo;
//   for (let i = 0; i < copyTodos.length; i++) {
//     if (copyTodos[i].id == id) {
//       copyTodos[i].addTodo = addTodo;
//       copyTodos[i].selectPriority = selectPriority;
//     }
//   }
//   this.setState({ newItem: copyTodos });




// }

// handleDelete(id) {
//   const todosList = [...this.state.todosList];
//   const updatedList = todosList.filter(item => item.id !== id);
//   this.setState({todosList: updatedList});
// }


//   handleCheck(id) {
//     this.setState({todosList: this.state.todosList.map((item) => {
//       if(item.id == id) {
//         item.completed = !item.completed
//       }
//       return item
//     })});
// }



//   handleSubmit(todo, priority) {
//     // e.preventDefault();
    
//     // if (this.state.addTodo === "") {
//     //   alert("??");
//     // return false
//     // }
//     // this.setState({ todo: "", priority: ""});


//     // if (todo.length === 0) {
//     //   alert('Please enter a To Do');
//     //   return;
//     // }
//     // if (priority === "select") {
//     //   alert('Please select a Priority');
//     //   return;
//     // }

//     const newItem = {
//       todo: todo,
//       priority: priority,
//       id: 1 + Math.random(),
//       completed: false
//     };

//     this.state.todosList.push(newItem);
//     this.setState({todosList: this.state.todosList});
    
//     // const list = [...this.state.todos];
//     // list.push(entryTodo);
//     // this.setState({list, addTodo: ""});

//     // this.setState({
//     //   todos: [...this.state.todos, newItem],
//     //   addTodo: '',
//     //   currPriority: '0'
//     // });

//     // event.preventDefault();
//     // if(this.state.addTodo===""){
//     //   alert("Add a ToDo before adding to the list");
//     //   return false
//     // } 



//     // const addTodo = {
//     //   id: 1,
//     //   title: this.props.addTodo,
//     //   completed: false
//     // };
//     // const todos = [...this.state.todos];
//     // todos.push(addTodo);
//     // this.setState({todos, addTodo: "", selectPriority: ""});
//     console.log("clciked");
//   }

//   // handleEdit(id) {

//   //   this.setState({handleEditMode: !this.state.handleEditMode});
//   // //   var editList = [...this.state.todosList];
//   // //   const index = editList.findIndex(item => item.id === id);
//   // //  editList[index].addTodo = this.state.editedTodo;
//   // //  editList[index].selectPriority = this.state.editedPriority;
//   // //   this.setState({
//   // //     toDoList: editList
//   // //   });


//   //   console.log("edit was pressed");
//   // }

//   render() {
    
//     return (
//       <div className='container'>
//         <Header />
//         <hr />
//         <div className="row">
//           <NewTodos handleSubmit={this.handleSubmit}  />
//           <ViewTodos todosList={this.state.todosList} handleCheck={this.handleCheck} handleDelete={this.handleDelete} handleEdit={this.handleEdit}  handleSave={this.handleSave}/>

//         </div>
//       </div>
//     );
//   }
// }

// export default App;






