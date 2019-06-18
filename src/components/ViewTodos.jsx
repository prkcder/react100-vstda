import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class ViewTodos extends Component {
    render(){
        
        return(
            
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            View Todos
                        </div>
                        <div className="card-body">
                        
                        {this.props.todosList.map((item)=> {
                        return <TodoItem key={item.id} 
                        todosList={this.props.todosList}
                        addTodo={item.addTodo} 
                        selectPriority={item.selectPriority} 
                        id={item.id} 
                        completed={item.completed} 
                        handleEdit={item.handleEdit}
                        handleCheck={this.props.handleCheck} 
                        handleDelete={this.props.handleDelete} 
                        handleEditMode={this.props.handleEditMode}
                        handleSave={this.props.handleSave}/>;
                        })}
                        </div>
                    </div>
                </div>
           
        );
    }
}

        ViewTodos.propTypes = {
            todosList: PropTypes.array.isRequired
        }

export default ViewTodos;