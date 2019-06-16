import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// function selectPriority(priority) {
//     if(priority == 1){
//         return "danger"
//     } else if(priority == 2) {
//         return "warning"
//     } else if(priority == 3) {
//         return "success"
//     }
// }

// function selectPriority(priority) {
                    
//                         switch(priority) {
//                             case 1:  "danger";          
                                
//                             case 2:  "warning";
                                
//                             case 3:  "success";
                    
//                             // default: return "default";
//                         }
//                     }

function lineThrough(completed) {
    if (completed) {
        return "line-through";
    } else {
        return "none";
    }
}



class TodoItems extends Component {
    constructor(props) {
            super(props);
        
            
            
            this.state ={
                todo: this.props.addTodo,
                priority: this.props.selectPriority,
                handleEditMode: false
                }
                //     this.markComplete = this.markComplete.bind(this);
                this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        }
        
        handleEdit(id) {
            this.setState({handleEditMode: !this.state.handleEditMode})
    //         let copy = this.props.todoList;
    // for (let i = 0; i < copy.length; i++) {
    //   if (copy[i].id == id) {
    //     copy[i].editEnabled = !copy[i].editEnabled;
    //   }
    // }
    // this.setState({ todoList: copy });
  
            console.log("edit this")
        }
        // markComplete() {
            
            //         if (this.props.todos.completed === true) {
                //             return "line-through" 
                //         } else "none"
                
                // }
                
                handleChange(e) {
                    this.setState({[e.target.name]: e.target.value});
                  }
                
                
                
                
                
                render(){
                    // function selectPriority(priority) {
                    
                    //     switch(priority) {
                    //         case 1: return "danger";          
                                
                    //         case 2: return "warning";
                                
                    //         case 3: return "success";
                    
                    //         // default: return "default";
                    //     }
                    // }
                    // const {}
                    var colorPriority = ""
                    switch (this.props.priority) {
                        case "1":
                          colorPriority = "list-group-item-danger";
                          break;
                        case "2":
                          colorPriority = "list-group-item-warning";
                          break;
                        case "3":
                          colorPriority = "list-group-item-success";
                          break;
                      }



                    return(
                        <div >
                    <h6 className={/*`list-group-item-${selectPriority(this.props.priority)}`*/ colorPriority } >
                    <input type="checkbox" checked={this.props.completed} onChange={() => this.props.handleCheck(this.props.id)} />
                    <span style={{textDecoration: lineThrough(this.props.completed)}}>{this.props.todo}</span>


                    {this.state.handleEditMode  ?  (<div className={colorPriority} >


<div className="form-group">
    <label htmlFor="description"> Description</label>
    <textarea className="update-todo-text" name="description" value={this.state.editTodo} onChange={this.handleChange} ></textarea>
</div>
<div className="form-group">
    <label htmlFor="priority">Priority</label>
     <select className="update-todo-priority" name="priority" value={this.state.editPriority} onChange={this.handleChange} >
            <option value="select" disabled >
                Select a Priority
            </option>
            <option value="1">
                High Priority
            </option>
            <option value="2">
                Medium Priority
            </option>
            <option value="3">
                Low Priority
            </option>
    </select>
    
</div>

<button className="btn btn-success update-todo " onClick={() => this.props.handleSave()} >Save</button>

</div>): null}




                    <div className="float-right">
                    <a className="edit-todo" style={{ cursor: 'pointer' }} onClick={() => this.handleEdit()}>
                        <i className="far fa-edit"></i> 
                    </a>

                    {/* <a className="delete-todo" style={{ cursor: 'pointer' }} onClick={() => this.props.handleDelete(this.props.id)}>
                        <i className="fas fa-trash-alt"></i>  
                    </a> */}
                    </div>
                    </h6>






                     {/* {this.state.handleEditMode  ?  (<div className={colorPriority} >


                    <div className="form-group">
                        <label htmlFor="description"> Description</label>
                        <textarea className="update-todo-text" name="description" value={this.state.addTodo} onChange={this.handleChange} ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                         <select className="update-todo-priority" name="priority" value={this.state.selectPriority} onChange={this.handleChange} >
                                <option value="select" disabled >
                                    Select a Priority
                                </option>
                                <option value="1">
                                    High Priority
                                </option>
                                <option value="2">
                                    Medium Priority
                                </option>
                                <option value="3">
                                    Low Priority
                                </option>
                        </select>
                        
                    </div>

                    <button className="btn btn-success update-todo " onClick={() => this.props.handleSave()} >Save</button>

                </div>): null}

 */}



                    
                    
                </div>
           

           
        );
    }
}

// TodoItems.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItems;