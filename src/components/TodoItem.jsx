import React, { Component } from 'react';
// import PropTypes from 'prop-types';


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
                addTodo: this.props.addTodo,
                selectPriority: this.props.selectPriority,
                // handleEdit: false
                }
                this.handleChange = this.handleChange.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);
        }
        
        // handleEdit() {
            // this.setState({handleEditMode: !this.state.handleEditMode})
    //         let copy = this.props.todoList;
    // for (let i = 0; i < copy.length; i++) {
    //   if (copy[i].id == id) {
    //     copy[i].editEnabled = !copy[i].editEnabled;
    //   }
    // }
    // this.setState({ todoList: copy });


  
            // console.log("edit this")
        // }
        
                
                handleChange(e) {
                    this.setState({[e.target.name]: e.target.value});
                  }
                
                
                
                
                
                render(){
                    
                    var colorPriority = ""
                    switch (this.props.selectPriority) {
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
                        {!this.props.handleEdit ?     
                    (<div>
                        <h6 className={ colorPriority } >
                    <input type="checkbox" checked={this.props.completed} onChange={() => this.props.handleCheck(this.props.id)} />
                    <span style={{textDecoration: lineThrough(this.props.completed)}}>{this.props.addTodo}</span>

                    <div className="float-right">
                    <a className="edit-todo" style={{ cursor: 'pointer' }}
                     onClick={() => this.props.handleEditMode(this.props.id)}>
                        <i className="far fa-edit"></i> 
                    </a>

                    <a className="delete-todo" style={{ cursor: 'pointer' }} 
                    onClick={() => this.props.handleDelete(this.props.id)}>
                        <i className="fas fa-trash-alt"></i>  
                    </a>
                    </div>
                    </h6>
                    </div> ) : (

                        <div className={colorPriority} >


<div className="form-group">
    <label htmlFor="description"> Description</label>
    <textarea className="update-todo-text" name="addTodo" value={this.state.addTodo} onChange={this.handleChange} ></textarea>
</div>
<div className="form-group">
    <label htmlFor="priority">Priority</label>
     <select className="update-todo-priority" name="selectPriority" value={this.state.selectPriority} onChange={this.handleChange}  >
            <option value="select"  >
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

<button className="btn btn-success update-todo " onClick={() => this.props.handleSave(this.state.addTodo, this.state.selectPriority, this.props.id)} >Save</button>

</div>)
                        }
                   
                </div>
           
        );
    }
}

// TodoItems.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItems;