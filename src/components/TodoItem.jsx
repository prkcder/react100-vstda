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
    // constructor(props) {
        //     super(props);
        
        //     this.markComplete = this.markComplete.bind(this);
        // }
        
        
        // markComplete() {
            
            //         if (this.props.todos.completed === true) {
                //             return "line-through" 
                //         } else "none"
                
                // }
                
               
                
                
                
                
                
                render(){
                    // function selectPriority(priority) {
                    
                    //     switch(priority) {
                    //         case 1: return "danger";          
                                
                    //         case 2: return "warning";
                                
                    //         case 3: return "success";
                    
                    //         // default: return "default";
                    //     }
                    // }

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
                    <p className={/*`list-group-item-${selectPriority(this.props.priority)}`*/ colorPriority}>
                    <input type="checkbox" checked={this.props.completed} onChange={() => this.props.handleCheck(this.props.id)} />
                    <span style={{textDecoration: lineThrough(this.props.completed)}}>{this.props.todo}</span>
                    <a className="edit-todo">
                        <i className="far fa-edit"></i> 
                    </a>

                    <a className="delete-todo">
                        <i className="fas fa-trash-alt"></i>  
                    </a>
                    </p>
                </div>
           
        );
    }
}

// TodoItems.propTypes = {
//     todo: PropTypes.object.isRequired
// }

export default TodoItems;