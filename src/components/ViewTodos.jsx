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
                        <div >
                        <div className="list-group-item-success form-group">
                            <span htmlFor="intro"><strong>Welcome to Very Simple Todo App!</strong></span>
                            <p name="intro">Get started now by adding a new todo on the left.</p>
                        </div>
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